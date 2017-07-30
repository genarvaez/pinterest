$(document).ready(function(){
	$(".modal").hide();
	data.forEach(function(e){
		$(".navigator ul").append('<li><img src="../assets/img/'+ e.id + '.jpg"><a href="#">'+e.hashtag+'</a></li>');
	})
	data.filter(function(e,i){ //FILTRO PRIMERAS 20IMG
		if(i< 20){
		$(".contents").append('<div class="card_img"><img src="../assets/img/'+ e.id + '.jpg" ><h2 class="title">'+ e.title+'</h2><p class="description">'+		
			e.description+'</p><span class="usuario">'+e.user.charAt()+'</span><h4>'+e.user+'</h4><span class="hashtag">#'+e.hashtag+'</span></div>');
		}
		$(window).scroll(function(){
	   	if(i>=20&&$(window).scrollTop() + $(window).height() == $(document).height()){
	       $(".contents").html(""); //vacío el modal para que no se repliquen las imagenes
	       data.forEach(function(e){
	       		$(".contents").append('<div class="card_img"><img src="../assets/img/'+ e.id + '.jpg" class="imagen" ><h2 class="title">'+ e.title+'</h2><p class="description">'+		
			e.description+'</p><span class="usuario">'+e.user.charAt()+'</span><h4>'+e.user+'</h4><span class="hashtag">#'+e.hashtag+'</span></div>');
	       })
	       $(".contents").css("height", "900vh"); //AUMENTO ALTO DE PANTALLA PARA ACOMODAR LAS IMG A LA VENTANA
	   	}
		});
	})

	//ABRE MODAL
	$(".card_img").click(modal);

	function modal(){
		$(".modal").show()		
		var titulo = $(this).children()[1];
		//filtro el titulo de la imagen seleccionada con los elementos de la data
		var selected = data.filter(function(e){
			if(titulo.innerHTML == e.title){
				return e;
			}
		})
		//introduzco elementos a modal
		var icons = $(".icons").clone();
		var botonRojo = $(".save").clone();
		$(".contenido").append('<h1>'+ selected[0].title + '</h1>');
		$(".contenido").append('<img src="../assets/img/'+ selected[0].id + '.jpg">');
		$(".contenido").append(icons,botonRojo);
		$(".contenido").append('<div class="user"><span class="usuario">'+selected[0].user.charAt()+'</span><h4>'+selected[0].user+'</h4><span class="hashtag">#'+selected[0].hashtag+'</span></div><button class="read">Leerlo</button>');
		$(".contenido").append('<p class="description">' + selected[0].description + '</p>');

		//CIERRE DE MODAL
		$(".modal i").click(function(){
		$(".modal").hide();
		$(".contenido").html("");
		})
	}

})

