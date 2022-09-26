chrome.storage.local.get(['stepEmail', 'stepPassword']).then(({ stepEmail, stepPassword }) => {
  if (stepEmail) {
    window.addEventListener ("load", () => {
      document.querySelector('input[type=email]').value = stepEmail
      document.querySelector('input[type=password]').value = atob(stepPassword)
      document.querySelector('input[type=submit').click()
    }, false)
  }  
})
