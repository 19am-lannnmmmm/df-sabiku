import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('public/documents')
const output = path.resolve('public/data/document-index.json')
const categories = ['research', 'publications', 'community', 'teaching', 'other']
const records = []

function walk(dir, category) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) { walk(full, category); continue }
    if (entry.name.endsWith('.meta.json')) continue
    const ext = path.extname(entry.name).toLowerCase()
    if (!['.pdf', '.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue
    const metaPath = full + '.meta.json'
    const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : {}
    const relative = path.relative(path.resolve('public'), full).split(path.sep).join('/')
    records.push({
      id: relative,
      category,
      title: meta.title || path.basename(entry.name, ext).replace(/[-_]/g, ' '),
      year: meta.year || '',
      description: meta.description || '',
      language: meta.language || 'id',
      type: ext === '.pdf' ? 'document' : 'image',
      url: '/' + relative,
      ...meta
    })
  }
}

for (const category of categories) walk(path.join(root, category), category)
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, JSON.stringify(records.sort((a,b) => (b.year || '').localeCompare(a.year || '')), null, 2) + '\\n')
console.log(`Generated document index: ${records.length} file(s)`)