export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    // Let real assets keep their status; only application routes use the SPA shell.
    if (url.pathname === '/' || /^\/projects\/[^/]+\/?$/.test(url.pathname) || url.pathname === '/coming-soon') {
      url.pathname = '/index.html'
      return env.ASSETS.fetch(new Request(url, request))
    }
    return env.ASSETS.fetch(request)
  },
}
