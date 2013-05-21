function paint (id) {
	var className = '.'+id+' .itembase';
}

function append(id) {
	appendHtml('#searchresults', "templates/searchitem.html");
	
	$('#searchresults :last-child').addClass(id); // space before comma matters
	
	paint(id);
}
