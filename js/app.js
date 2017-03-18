
$('a').click(function(){

$('html, body').animate({

            scrollTop: $( $(this).attr('href') ).offset().top

            }, 1000);
});

$(document).ready(function(){
    var btt = $('.back-to-top');
    
    btt.on('click', function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        
       e.preventDefault(); 
    });
    
    $(window).on('scroll', function(){
        
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();
        
        if (top > height) {
            if(!btt.is(':visible')){
                btt.show();
            }
        }else{
            btt.hide();
        }
        
        
    });
});

$('.handle').on('click', function(){
        $('nav ul').toggleClass('showing');
});