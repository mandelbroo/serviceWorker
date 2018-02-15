const swUrl = `http://localhost:3031/sw.js`

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(swUrl, { scope: '/' })
      .then(reg => { console.log('registered!', reg.scope) })
      .catch(err => console.log('registration error', err))
  })
}
