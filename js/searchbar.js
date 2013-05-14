$(document).ready(function() {
	init_searchbar();
	homepage=true;
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
	$('#searchbar').bind('isHomePage', function(event) {
	  if (!homepage) {
	  	alert('hi');
	  	$(this).css('top', 75);
	  } else {
	  	alert('ho');
	  }
	});
}

function executeSearch () {
	homepage=false;
	$('searchbar').trigger('isHomePage');
	alert("hello");
}


