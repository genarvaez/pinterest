
data.filter(function(e,i){
	
	if(i< 20){

	$(".contents").append('<div class="card_img"><img src="../dist/img/'+ e.id + '.jpg" ><h2 class="title">'+ e.title+'</h2><p class="description">'+		
		e.description+'</p><span class="usuario">'+e.user.charAt()+'</span><h4>'+e.user+'</h4><span class="hashtag">#'+e.hashtag+'</span></div>');
	}
	$(window).scroll(function(){
   	if(i>=20&&$(window).scrollTop() + $(window).height() == $(document).height()){
       $(".contents").html("");
       data.forEach(function(e){
       		$(".contents").append('<div class="card_img"><img src="../dist/img/'+ e.id + '.jpg" ><h2 class="title">'+ e.title+'</h2><p class="description">'+		
		e.description+'</p><span class="usuario">'+e.user.charAt()+'</span><h4>'+e.user+'</h4><span class="hashtag">#'+e.hashtag+'</span></div>');
       })
       $(".contents").css("height", "1000vh");
   	}
});
	
})
