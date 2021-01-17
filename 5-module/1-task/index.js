function hideSelf() {
  let buttons = document.querySelectorAll('.hide-self-button')
  
    for (button of buttons) {
      
      button.addEventListener('click', function(){   
        this.setAttribute('hidden', 'true')
      })
    
    }

}
