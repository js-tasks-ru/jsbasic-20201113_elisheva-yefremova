function initCarousel() {

    let slides = 4,
        position = 0,
        currentSlide = 0,
        slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  
        
    let track = document.querySelector('.carousel__inner'),
        buttonPrev = document.querySelector('.carousel__arrow_left'),
        buttonNext = document.querySelector('.carousel__arrow_right');
  
    function hideButton(elem) {
      elem.style.display = 'none';
    }
  
    function showButton(elem) {

      elem.style.display = 'flex';

    }
  
    function moveTrack(direction, currentSlide) {   
      
      track.style.transform = `translateX(-${ slideWidth * currentSlide }px)`;
  
      if ( currentSlide < 3 && currentSlide > 0 ) {
        showButton(buttonPrev);
        showButton(buttonNext)
      } else if ( currentSlide == 3 )  {
        hideButton(buttonNext); 
      } else if ( currentSlide == 0 ) {
          hideButton(buttonPrev);
        }
      
    }
  
    hideButton(buttonPrev);
  
    buttonNext.addEventListener('click', function() {
      
      currentSlide++;
      moveTrack('next', currentSlide);
  
    })
  
    buttonPrev.addEventListener('click', function() {
    
      currentSlide--;
      moveTrack('prev', currentSlide)
  
    })
      
  }