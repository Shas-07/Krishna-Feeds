import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

if (!existsSync('src/main.tsx')) {
  console.error('\n========================================')
  console.error('  BUILD FAILED — src/ folder not on GitHub')
  console.error('========================================\n')
  console.error('Your GitHub repo is missing the website source code.')
  console.error('Only config files were uploaded — not src/ or public/.\n')
  console.error('Upload these folders from: d:\\Users\\swast\\Downloads\\KF\n')
  console.error('  ✓ src/')
  console.error('  ✓ public/\n')
  console.error('Use GitHub Desktop: commit ALL files, then Push.')
  console.error('Or run:  .\\push-to-github.ps1\n')
  process.exit(1)
}

const result = spawnSync('npx', ['vite', 'build'], { stdio: 'inherit', shell: true })
process.exit(result.status ?? 1)
