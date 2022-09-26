chrome.storage.local.get(['stepSalt', 'stepEmail', 'stepPassword']).then(({ stepSalt, stepEmail, stepPassword }) => {
  if (stepSalt) {
    window.addEventListener ("load", () => {
      document.querySelector('input[type=email]').value = stepEmail
      document.querySelector('input[type=password]').value = stepPassword
      document.querySelector('input[type=submit').click()
    }, false)
  }  
})
