$(document).ready(function(){

    $('#btn-menu').click(function(e){
        e.preventDefault()
        $('#menu').toggle('slow')
    })

    // Pegando os link do menu para apresentar a página
    $('a').click(function(e){
        e.preventDefault()
        // Variável para se guardar qual link abrir
        let url = $(this).attr('href')
        $('#'+url).show()
    })
})