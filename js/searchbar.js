$(document).ready(function() {
	init_searchbar();
});

function init_searchbar () {
	$('#searchbar input').focus();
	$('#searchbar input').keyup(function(e) {
		if (e.keyCode == 13) {
			executeSearch();
		}
	});
	$('#searchbar_button').click(function() {
		executeSearch();
	});
}

function executeSearch () {
	alert("hello");
}


