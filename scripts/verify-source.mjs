import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const main = resolve('src/main.tsx')
const index = resolve('index.html')

if (!existsSync(main)) {
  console.error('\n❌ DEPLOY BLOCKED: src/main.tsx is missing from this repository.\n')
  console.error('Vercel cannot build without the src/ folder.')
  console.error('\nFix: Push the FULL project from your computer, including:')
  console.error('  - src/          (all .tsx and .ts files)')
  console.error('  - public/       (logo and product images)')
  console.error('\nSee DEPLOY.md for step-by-step instructions.\n')
  process.exit(1)
}

if (!existsSync(index)) {
  console.error('\n❌ DEPLOY BLOCKED: index.html is missing.\n')
  process.exit(1)
}

console.log('✓ Source files found (src/main.tsx)')
