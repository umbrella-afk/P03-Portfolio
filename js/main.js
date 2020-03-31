const header = document.querySelector('.main-header');

window.addEventListener('scroll', () =>{
  const scrollPos = window.scrollY;
  if (scrollPos>10) {
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
})

$(function(){
  var effects = 'animated rubberBand';
  // cover all end function to make sure animation will close in different browsers
  var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('button').hover(function(){
    $(this).addClass(effects).one(effectsEnd,function(){
      $(this).removeClass(effects);
    });
  });
});
