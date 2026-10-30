import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const generator = path.join(scriptDir, 'generate-content-index.mjs')
const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'df-sabiku-index-'))

try {
  const researchDir = path.join(fixtureRoot, 'public/documents/research')
  const communityDir = path.join(fixtureRoot, 'public/documents/community')
  fs.mkdirSync(researchDir, { recursive: true })
  fs.mkdirSync(communityDir, { recursive: true })

  const pdf = path.join(researchDir, 'seed-quality-report.pdf')
  fs.writeFileSync(pdf, 'fixture')
  fs.writeFileSync(pdf + '.meta.json', JSON.stringify({
    id: 'attacker-controlled-id',
    category: 'other',
    type: 'image',
    url: 'https://example.invalid/replace-me',
    title: 'Seed Quality Report',
    year: '2026',
    description: 'Fixture metadata',
    language: 'en'
  }))

  const image = path.join(communityDir, 'field-day.jpg')
  fs.writeFileSync(image, 'fixture')
  fs.writeFileSync(image + '.meta.json', JSON.stringify({
    id: 'wrong-id',
    category: 'research',
    type: 'document',
    url: '/wrong/path',
    title: 'Field Day'
  }))

  const run = spawnSync(process.execPath, [generator], {
    cwd: fixtureRoot,
    encoding: 'utf8'
  })
  assert.equal(run.status, 0, run.stderr || run.stdout)

  const indexPath = path.join(fixtureRoot, 'public/data/document-index.json')
  const records = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
  assert.equal(records.length, 2)

  const pdfRecord = records.find(item => item.title === 'Seed Quality Report')
  assert.ok(pdfRecord, 'PDF metadata title should be retained')
  assert.equal(pdfRecord.id, 'documents/research/seed-quality-report.pdf')
  assert.equal(pdfRecord.category, 'research')
  assert.equal(pdfRecord.type, 'document')
  assert.equal(pdfRecord.url, '/df-sabiku/documents/research/seed-quality-report.pdf')
  assert.equal(pdfRecord.year, '2026')
  assert.equal(pdfRecord.description, 'Fixture metadata')
  assert.equal(pdfRecord.language, 'en')

  const imageRecord = records.find(item => item.title === 'Field Day')
  assert.ok(imageRecord, 'Image metadata title should be retained')
  assert.equal(imageRecord.id, 'documents/community/field-day.jpg')
  assert.equal(imageRecord.category, 'community')
  assert.equal(imageRecord.type, 'image')
  assert.equal(imageRecord.url, '/df-sabiku/documents/community/field-day.jpg')

  console.log('PASS: document index keeps canonical IDs, categories, types, and URLs while retaining descriptive metadata.')
} finally {
  fs.rmSync(fixtureRoot, { recursive: true, force: true })
}
