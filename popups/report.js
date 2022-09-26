const {
  storage: { local, onChanged },
  tabs: { create }
} = chrome

local.get(['stepEmail', 'stepQueue'], ({ stepEmail = '', stepQueue = '' }) => {
  document.querySelector('#stepEmail').innerHTML = stepEmail
  document.querySelector('#stepQueue').innerHTML = stepQueue

  if (stepQueue > 0) {
    document.querySelector('#buy').style.display = 'none'
  }
})

document.querySelector('#buy').addEventListener('click', () => {
  create({ url: 'https://www.quicket.com/account/events/175558/step/buy' })
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