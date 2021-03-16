// hide left & right arrow button on carousel when viewport width less than 600px
if($(window).width() < 600){
    $('.left-button').hide()
    $('.right-button').hide()
}
else {
    $('.left-button').show()
    $('.right-button').show()
}

const state = {
    currentHoveredProjectElement: null,

}
// add event listener to buttons to animate content left or right
$('.left-button').click(function(){
    let leftPos = $('.wrapper').scrollLeft();
    $('.wrapper').animate({scrollLeft: leftPos - 450},400);
})
$('.right-button').click(function(){
    let leftPos = $('.wrapper').scrollLeft();
    $('.wrapper').animate({scrollLeft: leftPos + 450},400);
})

$(".saved-recipe-carousel-card.outer-card").on("mouseover", function(e) {
    // $(this).addClass('permahover');
    const card = e.currentTarget;

    if( state.currentHoveredProjectElement instanceof Element && card !== state.currentHoveredProjectElement){
        $($(state.currentHoveredProjectElement).children('.tooltiptext')[0]).hide()
        // $(state.currentHoveredProjectElement).hide();

    }
    state.currentHoveredProjectElement = card;
    // $(card).show();
    $($(card).children(".tooltiptext")[0]).show()
    
    
  });

  $(".tooltiptext").on("mouseover", function(e){
      e.preventDefault();
      e.stopPropagation();
  })
