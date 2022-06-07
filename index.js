function addingEventListener() {
  const inputField = document.querySelector('#input')
  inputField.addEventListener('click', clickAlert)
}

function clickAlert(){
  alert("AH! YOU GOT ME!")
}
