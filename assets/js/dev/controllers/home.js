app.controller('homeCtrl', function($scope){

    //register & search functionality
    var ele = $('.control .card-panel a');
    ele.click(function(element) {
        console.log('12345');
        if($(element.target).hasClass('regi')){
            $('#regi').fadeIn('slow');
            $('#buscar').hide();
        }else if($(element.target).hasClass('buscar')){
            $('#regi').hide();
            $('#buscar').fadeIn('slow');
        }

        if(!$(element.target).hasClass('active')){
            ele.removeClass('active');
            $(element.target).addClass('active');
        }
    });
});