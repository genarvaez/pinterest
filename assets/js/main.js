
data.forEach(function(e,i){
	console.log(e)
	$(".contents").append('<div class="card_img"><img src="../dist/img/'+ e.id + '.jpg" ><h2 class="title">'+ e.title+'</h2><p class="description">'+		
		e.description+'</p><span class="usuario">'+e.user.charAt()+'</span><h4>'+e.user+'</h4><span class="hashtag">#'+e.hashtag+'</span></div>');
})
