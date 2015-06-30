app.controller('teamCtrl',  ['$scope', '$document','$timeout','$http', function($scope, $document, $timeout, $http){


	buildTeamJQ();
	function buildTeamJQ() {
	var memCount = 0;
	var mobileVersion = false;

	var desktop = {
		init : function() {
		}
	}

		if(typeof window.orientation !== 'undefined'){
			mobileVersion = true;
			mobile.init();
		}
		desktop.init();

		add = function(name,dad){
			var member = $('#memberOne').val(),
				container = (!!dad)?$('.'+dad):$('.members');
			if (member != 0 || (!!name && name.length > 0)){
				memCount++;
				member = (typeof name === "string")?name:member;
				// Create the member html and prepend
				container.prepend('<div id=member-'+memCount+' draggable="true" ondragstart="drag(event)" class="member hidden">'
					+member+'<span class="material-icons del right">clear</span></div>')
				
				// Create the form that goes with each member
				$pos = $('#positionBox').clone();
				$pos
					.removeAttr('id')
					.addClass('positionBox')
					.appendTo('#member-'+memCount);
				$posForm = $pos.children('.positionForm');


				// add event handlers to key objects inside the form
				$posForm.children('.btnAddPosition').click(function(e){
					e.stopPropagation();
					var $input = $(this).siblings('input');
					var posVal = $input.val();
					if (posVal) {
						var posTxt = $posForm.siblings('span');
						posTxt.removeClass('hidden').val(posVal);
						posTxt.html('Position: '+posVal);
						$posForm.fadeOut();
						$input.val('');
					}
				});
				$posForm.children('input, label').click(function(e){
					e.stopPropagation();
				});
				$posForm.children("input").bind("keypress", function(event) {
			    	if(event.which == 13) {
				    	event.preventDefault();
				        $(this).siblings('.btnAddPosition').trigger("click");
				    }
				});

				// show the member
				$('#member-'+memCount).fadeIn( function(){
					$(this).removeClass('hidden');
				});
				// remove the inputs val.
				$('#memberOne').val('');
				//delete member handler
				$('#member-'+memCount).find('.del').click(function(e){
					e.stopPropagation();
					$(this).parent().fadeOut(200, function(){
						$(this).remove();
					});
				});
				// show the form
				$('#member-'+memCount).on('click',function() {
					$(this).find('.positionForm').toggle(200);
					$(this).find('input').focus();
					// Toggle takes care of visibility now.
					if($(this).hasClass('hidden')){
						$(this).removeClass('hidden');
					} 
				})
			}
			return true;
		}

		//input member into list
		$('#btnAddMember').click( add );
		$("#memberOne").bind("keypress", function(event) {
		    if(event.which == 13) {
		    	event.preventDefault();
		        $('#btnAddMember').trigger("click");
		    }
		});

	};

	loadNames = function(){
		var teststruc={},
			responsePromise = $http.get('/getTeams/ss');
		responsePromise.success(function(data, status, headers, config) {
			if(!!data[0]){
		        teststruc ={
	                list: data[0].teststruc.list,
	                team1: data[0].teststruc.team1,
	                team2: data[0].teststruc.team2,
	                team3: data[0].teststruc.team3
	            }
				$.each(teststruc['list'], function (index,element){
					add(element,'members');
				});
				$.each(teststruc['team1'], function (index,element){
					add(element,'team1');
				});
				$.each(teststruc['team2'], function (index,element){
					add(element,'team2');
				});
				$.each(teststruc['team3'], function (index,element){
					add(element,'team3');
				});
	        }
        });
	}

	$scope.saveNames = function(){
		var teststruc = {
			name:'ss',
			list:[],
			team1:[],
			team2:[],
			team3:[]
		}

		$.each($('.members').find('.member'), function (index,element){
			teststruc['list'].push($(element).html().split('<')[0]);
		});
		$.each($('.team1').find('.member'), function (index,element){
			teststruc['team1'].push($(element).html().split('<')[0]);
		});
		$.each($('.team2').find('.member'), function (index,element){
			teststruc['team2'].push($(element).html().split('<')[0]);
		});
		$.each($('.team3').find('.member'), function (index,element){
			teststruc['team3'].push($(element).html().split('<')[0]);
		});

		var responsePromise = $http.post('/saveTeams/',teststruc);
		responsePromise.success(function(data, status, headers, config) {
        });
	}

		$timeout(function(){
			loadNames();
		}, 1000);

}]);