$(document).ready(function(){
	//alert("Hi I am ready");
	init();
});

function callHttp(httpLink) {
	var response =  $.ajax({
        type: "GET",
        dataType:'html',
        async:false,
        cache:true,
        url: httpLink
    }).responseText;
    if(response==null ||response.length<1){return null;}
    var obj = '<article>'.concat(response).concat('</article>');

    return obj;
}

function appendHtml(base, link) {
	$(base).append(callHttp(link));
}

function init() {
	appendHtml('body', "templates/searchbar.html");
}
