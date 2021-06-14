$(document).ready(function(){

    //animaçao com o nav
    $(window).scroll(function(){
        var windowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.section').each(function(){
            let elOfftop = $(this).offset().top;
            let elHeight = $(this).height();

            if(elOfftop < (windowScroll + windowHeight) && elOfftop + elHeight > windowScroll){
                $('a').css('border-bottom','0');
                let attr = $(this).attr('target');
                $('.'+attr).css('border-bottom','2px solid black');
            }
        });

        if(windowScroll > 20){
            $('.nav-bar').css('transition','1s');
			$('.nav-bar').css('background','rgb(255, 255, 255)');
            $('.nav-bar').css('box-shadow','-1px 14px 21px 0px rgba(0,0,0,0.50)');
			$('div.nav-links nav ul li a').css('color','rgb(26, 26, 26)');
                fadeImg();
                function fadeImg(){
                    $(this).css('transition','1')
                        $("#logo").css('display','block');
                        $('.Nlogo').css('display','none')
                }
            $('#icone').css('color','black');
        }else{
            $('.nav-bar').css('background','#039be5');
			$('div.nav-links nav ul li a').css('color','white');
            $('#icone').css('color','white');
            $('.nav-bar').css('box-shadow','-1px 14px 21px 0px rgba(0,0,0,0)')
            fadeImg();
                function fadeImg(){
                    $(this).css('transition','1')
                        $("#logo").css('display','none');
                        $('.Nlogo').css('display','block')
                }
        }

        MeuBotaoGod = () =>{

            let header = $('#header').height()
            if(windowScroll > header){
                $('.Botao__God').fadeIn()
            }else{
                $('.Botao__God').fadeOut()
            }

          
                $('.Botao__God').click(function(){
                   $('html').css('scroll-behavior','smooth')
                })
   


        }

        MeuBotaoGod();

    });

    //menu mobile
    
    $('#icone').click(()=>{
        $('#menu__ul').slideToggle();
    });

    //slide com o bxSlide
    $('.slider').bxSlider({
        arrows:false
    });



});
//concertar o meu line do nav nao ta mudando de cor 