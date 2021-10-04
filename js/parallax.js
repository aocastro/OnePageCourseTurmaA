$(function(){
    $(window).scroll(function(){
        var window_scrooltop = $(this).scrollTop()

        // Pasar por cada elemento com a class .parallax
        $('.parallax').each(function(){
            var obj = $(this)

            // Garante que apenas trabalharemos com elemento que está visível na tela
            if(window_scrooltop >= obj.position().top - obj.height() && window_scrooltop <= obj.position().top + obj.height()) {

                // O atributo data-divisor vai definir a velocidade do efeito
                var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor')

                // Correção da diferemça da posição do primeiro elemento
                if(obj.is(':first-child')){
                    var bg_pos = (window_scrooltop - obj.position().top) / divisor
                }else{
                    var bg_pos = (window_scrooltop - obj.position().top + (obj.height() - 100)) / divisor
                }

                // Modificação da posição dos backgrounds
                obj.css({
                    'background-position' : '50% -' + bg_pos + 'px'
                });

            }
        })
    })
})