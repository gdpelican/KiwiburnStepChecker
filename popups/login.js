const { storage: { local, onChanged } } = chrome

document.querySelector('input[type=submit]').addEventListener('click', () => {
  local.set({
    stepEmail: document.querySelector('input[type=email]').value,
    stepPassword: btoa(document.querySelector('input[type=password]').value)
  })
  window.close()
})
