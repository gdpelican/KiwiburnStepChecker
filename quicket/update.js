window.addEventListener ("load", () => {
  chrome.storage.local.set({ stepQueue: document.body.innerHTML.match(/You are number (\d+) in the queue/)[1] })
})
