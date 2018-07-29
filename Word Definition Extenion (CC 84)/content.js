window.addEventListener("mouseup", p => {
  let selected = window.getSelection().toString();

  if(selected.length == 0)
    return;

  let message = {
    text: selected
  };

  chrome.runtime.sendMessage(message);
});
