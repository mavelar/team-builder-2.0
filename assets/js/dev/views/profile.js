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
	
	// $.ajax({
	// 	url:'/getUser/'+GetURLParameter('user'),
	// 	type: 'GET',
	// 	json:'jsonp',
	// 	data:GetURLParameter('user'),
	// 	success:function(data) {
	// 		$(".name").append(data[0].name);
	// 		$(".username").append(data[0].username);
	// 		$(".email").append(data[0].email);
	// 	}
	// });
});