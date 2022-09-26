window.addEventListener ('load', () => {
  console.log('loaded!')

  chrome.runtime.onMessage.addListener(({ message }) => {
    switch (message) {
      case 'injectFrame':
        document.getElementById('stepFrame')?.remove()
        const iframe = document.createElement('iframe')
        iframe.id = 'stepFrame'
        iframe.style = 'display: none'
        iframe.src = 'https://www.quicket.com/account/events/175558/step/buy'
        document.body.appendChild(iframe)      
        break
      case 'clearFrame':
        document.getElementById('stepFrame')?.remove()
    }
  })

  // DEBUGGING
  // chrome.storage.local.get(['stepQueue', 'stepEmail']).then(({ stepQueue, stepEmail }) => {
  //   const info = document.createElement('div')
  //   info.innerHTML = `queue: ${stepQueue} | email: ${stepEmail}`
  //   info.id = "stepInfo"
  //   info.style.position = 'fixed'
  //   info.style.top = 0
  //   info.style.background = 'green'
  //   info.style.padding = '10px'
  //   info.style.zIndex = 1000000
  //   document.body.appendChild(info)
  // })
})
