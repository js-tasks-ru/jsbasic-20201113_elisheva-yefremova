function toggleText() {
  document.addEventListener('click', function(e){
    
    if ( e.target.className == 'toggle-text-button' ) {
      (text.hidden == false) ? text.hidden = true : text.hidden = false
    }

  })
}
