$(document).ready(function() {

  var GetURLParameter = function(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam){
        return sParameterName[1];
      }
    }
    return "";
  }
  $('.lookup').click(function() {
    var value = $('.search').val();
    var template = $('<ul></ul>');
    $.ajax({
      url:'/getTeams/'+value,
      type: 'GET',
      json:'jsonp',
      success:function(data) {
        $('.result').html("");
        var temp = template.clone();
        if(data.length < 1){
          $('.result').html("No Data returned");
        }else{
          $.each(data,function(index, ele) {
            $.each(ele,function(index2, ele2) {          
              temp.append('<li>'+ele2+'</li>');
            });
            $('.result').append(temp);
            temp = template.clone();
          });
        }
      }
    });
  });

  if(!!GetURLParameter('search')){
    $('.search').val(GetURLParameter('search'));
    $('.lookup').trigger("click");
  }

});