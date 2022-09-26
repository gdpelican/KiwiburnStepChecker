const {
  action: { setPopup, setBadgeText, setBadgeBackgroundColor, onClicked },
  storage: { local, onChanged },
  tabs: { query, sendMessage }
} = chrome

local.get(['stepQueue']).then(({ stepQueue }) => {
  setBadgeText({ text: stepQueue || '' })
  setBadgeBackgroundColor({ color: '#AB0332' })
})

onChanged.addListener(({ stepRefresh }) => {
  local.get(['stepSalt', 'stepQueue']).then(({ stepSalt, stepQueue }) => {
    // Manual refresh
    if (stepRefresh?.newValue) {
      setBadgeText({ text: '...' })
      broadcast('injectFrame').then(() => local.set({ stepRefresh: false }))
    }
    
    // Logging in
    else if (stepSalt && !stepQueue) {
      setBadgeText({ text: '...' })
      setPopup({ popup: 'popups/report.html' })
      broadcast('injectFrame')
    }

    // Step queue retrieved
    else if (stepSalt && stepQueue) {
      setBadgeText({ text: stepQueue })
      broadcast('clearFrame')
    }
    
    // Logging out
    else if (!stepSalt) {
      setBadgeText({ text: '' })
      setPopup({ popup: 'popups/login.html' })
      broadcast('clearFrame')
    }
  })
})

onClicked.addListener(() => {
  local.get(['stepSalt']).then(({ stepSalt }) => {
    setPopup({ popup: `popups/${stepSalt ? 'report' : 'login'}.html` })
  })
})

const broadcast = (message) => {
  query({ active: true, currentWindow: true }, ([{ id } = {}, ...otherTabs]) => sendMessage(id || 0, { message }))
}

setInterval(() => broadcast('injectFrame'), 1000*60*60)
