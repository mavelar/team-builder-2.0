function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.className == 'greyBox' || ev.target.className == 'member') {
    	$(ev.target).parent().prepend($('#'+data).hide());
    	$('#'+data).fadeIn();
    }else {
    	$(ev.target).prepend($('#'+data).hide());
    	$('#'+data).fadeIn();
    }
}