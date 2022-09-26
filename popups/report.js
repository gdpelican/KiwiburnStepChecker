const { storage: { local, onChanged } } = chrome

local.get(['stepEmail', 'stepQueue'], ({ stepEmail = '', stepQueue = '' }) => {
  document.querySelector('#stepEmail').innerHTML = stepEmail
  document.querySelector('#stepQueue').innerHTML = stepQueue
})

document.querySelector('#logout').addEventListener('click', () => {
  local.clear()
  window.close()
})

document.querySelector('#refresh').addEventListener('click', () => {
  local.remove(['stepRefresh', 'stepQueue']).then(() => {
    local.set({ stepRefresh: true })
    window.close()
  })
})