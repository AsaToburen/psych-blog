$( document ).ready(function() {

var parseQuotes = function(callback) {
		console.log(callback[x]);

		for(x=0; x<12; x++){
			console.log(callback[x].quote.quote);
			console.log(callback[x].quote.id);
		}
};

//		var urlObj = "https://api.ted.com/v1/search.json?q=psychology&categories=quotes&api-key=kpz8qunx2cfqsxfdrr3cgady";
//		 $.ajax({
//            type:'GET',
//            dataType: 'jsonp',
//            url:urlObj,
//		success: function(data) {
//			console.log(data);
//			parseQuotes(data.results);
//		},
//		error: function(){
//			console.log('errors baby');
//		}
//	});


var blog = document.getElementById('blog');
var welcome = document.getElementById('welcome');
var navAnchors = document.querySelectorAll('nav a');
var hasClass = function (element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}

var removeActive = function() {
	for(x=0; x<5; x++){
		if(hasClass(navAnchors[x], 'selected')){
			navAnchors[x].className = "";
		};
	}
};

var hideBlog = function(sidebarBlog, blogContainer) {
	sidebarBlog.classList.toggle('slide-side');
	blogContainer.classList.toggle('blog-slide');
};


for(x=0; x<5; x++){
	navAnchors[x].addEventListener('click', function(event) {
		event.preventDefault();
		removeActive();
		this.classList.add('selected');

	});
}

//welcome.addEventListener('click', function(event){
//	console.log('google');
//});

blog.addEventListener('click', function(event){
	var sidebarBlog = document.getElementById('sidebar-blog');
	var blogContainer = document.getElementById('blog-posts');
	hideBlog(sidebarBlog, blogContainer);
});
});




