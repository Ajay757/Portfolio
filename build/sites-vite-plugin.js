import { cp, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

// Adapt the Sites packaging hook to this existing React/Vite SPA.
export function sites() {
  let root
  return {
    name: 'sites',
    apply: 'build',
    configResolved(config) { root = config.root },
    async closeBundle() {
      await mkdir(resolve(root, 'dist/.openai'), { recursive: true })
      await mkdir(resolve(root, 'dist/server'), { recursive: true })
      await cp(resolve(root, '.openai/hosting.json'), resolve(root, 'dist/.openai/hosting.json'))
      await cp(resolve(root, 'worker/index.js'), resolve(root, 'dist/server/index.js'))
    },
  }
}
