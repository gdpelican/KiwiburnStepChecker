const { storage: { local, onChanged } } = chrome

document.querySelector('input[type=submit]').addEventListener('click', () => {
  local.set({
    stepEmail: document.querySelector('input[type=email]').value,
    stepPassword: document.querySelector('input[type=password').value,
    stepSalt: Math.random().toString(36).slice(2, 7)
  })
  window.close()
})
