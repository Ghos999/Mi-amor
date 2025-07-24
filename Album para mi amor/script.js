$('.page').click(function() {
  $(this).removeClass('no-anim').toggleClass('flipped');
   $('.page > div').click(function(e) {
       e.stopPropagation();
  });
  reorder();
});

function reorder(){
  $(".book").each(function(){
    var pages=$(this).find(".page");
    var pages_flipped=$(this).find(".flipped");
    pages.each(function(i){
      $(this).css("z-index",pages.length-i);
    });
    pages_flipped.each(function(i){
      $(this).css("z-index",i+1);
    });
  });
}

reorder();

document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});
