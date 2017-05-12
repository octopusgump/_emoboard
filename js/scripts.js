

$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------*/
	/*0&1 Page*/
	$(".coverpage .covername span").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".coverpage .covername span").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});

	$(".coverpage .down img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".coverpage .down img").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});


	/*--------------------------------------------------------------------------------------------*/
	/*Cover Page*/
	 /*covername movingup control*/
	$('.coverpage .covername').one("click",function(){
		$(this).animate({ "top": "-=255px" }, 800 );
	});

	/*covername emerging control*/
	$('.coverpage .covername').one("click",function(){
		$('.leftbubble').delay( 300 ).animate({ opacity:1}, 1000 ) ;
		$('.leftbubbletext').delay( 300 ).animate({ opacity:1}, 1000 ) ;
		$('.rightbubble').delay( 650 ).animate({ opacity:1}, 1000 );
		$('.rightbubbletext').delay( 650 ).animate({ opacity:1}, 1000 );
		$('.downbubble').delay( 1000 ).animate({ opacity:1}, 1000 )
		$('.down').delay( 1000 ).animate({ opacity:1}, 1000 );
	});

	/*covername emerging control*/
	$('.keyboard .up').one("click",function(){
		$('.leftbubble').animate({ opacity:1}, 1000 ) ;
		$('.leftbubbletext').animate({ opacity:1}, 1000 ) ;
		$('.rightbubble').animate({ opacity:1}, 1000 );
		$('.rightbubbletext').animate({ opacity:1}, 1000 );
		$('.downbubble').animate({ opacity:1}, 1000 )
		$('.down').animate({ opacity:1}, 1000 );
	});


	/*--------------------------------------------------------------------------------------------*/
	/*Cover Page*/
	 /*moving control*/
	  /*slidedown trigger*/
	$('.coverpage .down').click(function(){
		$(this).animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .downbubble').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .leftbubble').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .leftbubbletext').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .rightbubble').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .rightbubbletext').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .covername').animate({ "top": "-=850px" }, 1600 );
		// $('.coverpage .covername span').animate({ "top": "-=850px" }, 1600 );
		$('.coverpage .coverbackground').animate({ "top": "-=850px" }, 1600 );
	});

	   /*slideup trigger*/
	$('.keyboard .up').click(function(){
		$('.coverpage .down').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .downbubble').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .leftbubble').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .leftbubbletext').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .rightbubble').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .rightbubbletext').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .covername').animate({ "top": "+=850px" }, 1600 );
		// $('.coverpage .covername span').animate({ "top": "+=850px" }, 1600 );
		$('.coverpage .coverbackground').animate({ "top": "+=850px" }, 1600 );
	});



	/*--------------------------------------------------------------------------------------------*/
	/*1&1-1 Page*/
	/*keys fadeIn fadeOut control*/
	$(".keyboard a img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".keyboard a img").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});

	/*up fadeIn fadeOut control*/
	$(".keyboard .up img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".keyboard .up img").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});







	/*--------------------------------------------------------------------------------------------*/
	/*emoji Page*/

	/*plusmins icon*/
	$(".emotion .plusminus img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".emotion .plusminus img").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});

	/*keyboardicon*/
	$(".emotion .keyboardicon").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".emotion .keyboardicon").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});

	$( '.emotion .keyboardicon' ).click(function() {
		$( ".emotion .bar img" ).animate({ "bottom": "+=82px" }, "fast" );
	})

	/*cheatbox*/
	$(".emotion .bar #cheatbox img").mouseover(function(){
		$('.emotion .keyboardicon').fadeTo("fast", 0.6);
	});
	$(".emotion .bar #cheatbox img").mouseout(function(){
		$('.emotion .keyboardicon').fadeTo("fast", 1);
	});

	$( '.emotion .bar #cheatbox img' ).click(function() {
		$( ".emotion .bar img" ).animate({ "bottom": "-=82px" }, "fast" );
	})

	/*floating letter on upper left corner*/
	$(".emotion .back img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$('.emotion .back img').mouseout(function(){
		$(this).fadeTo("fast", 1);
	});


	/*plusminus*/
	$( '.emotion .keyboardicon' ).click(function() {
		$( ".emotion .plusminus img" ).animate({ "bottom": "+=82px" }, "fast" );
	})
	$( '.emotion .bar #cheatbox img' ).click(function() {
		$( ".emotion .plusminus img" ).animate({ "bottom": "-=82px" }, "fast" );
	})

	/*keyboard*/
	$(".emotion .bar div img").mouseover(function(){
		$(this).fadeTo("fast", 0.6);
	});
	$(".emotion .bar div img").mouseout(function(){
		$(this).fadeTo("fast", 1);
	});

	/*--------------------------------------------------------------------------------------------*/
	/*hidebar appear*/
	$('.bar #A img').mouseover(function(){
		$('.hidebar #A img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #A img').mouseout(function(){
		$('.hidebar #A img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #B img').mouseover(function(){
		$('.hidebar #B img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #B img').mouseout(function(){
		$('.hidebar #B img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #C img').mouseover(function(){
		$('.hidebar #C img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #C img').mouseout(function(){
		$('.hidebar #C img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #D img').mouseover(function(){
		$('.hidebar #D img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #D img').mouseout(function(){
		$('.hidebar #D img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #E img').mouseover(function(){
		$('.hidebar #E img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #E img').mouseout(function(){
		$('.hidebar #E img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #F img').mouseover(function(){
		$('.hidebar #F img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #F img').mouseout(function(){
		$('.hidebar #F img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #G img').mouseover(function(){
		$('.hidebar #G img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #G img').mouseout(function(){
		$('.hidebar #G img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #H img').mouseover(function(){
		$('.hidebar #H img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #H img').mouseout(function(){
		$('.hidebar #H img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #I img').mouseover(function(){
		$('.hidebar #I img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #I img').mouseout(function(){
		$('.hidebar #I img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #J img').mouseover(function(){
		$('.hidebar #J img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #J img').mouseout(function(){
		$('.hidebar #J img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #K img').mouseover(function(){
		$('.hidebar #K img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #K img').mouseout(function(){
		$('.hidebar #K img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #L img').mouseover(function(){
		$('.hidebar #L img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #L img').mouseout(function(){
		$('.hidebar #L img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #L img').mouseover(function(){
		$('.hidebar #L img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #L img').mouseout(function(){
		$('.hidebar #L img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #M img').mouseover(function(){
		$('.hidebar #M img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #M img').mouseout(function(){
		$('.hidebar #M img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #N img').mouseover(function(){
		$('.hidebar #N img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #N img').mouseout(function(){
		$('.hidebar #N img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #O img').mouseover(function(){
		$('.hidebar #O img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #O img').mouseout(function(){
		$('.hidebar #O img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #P img').mouseover(function(){
		$('.hidebar #P img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #P img').mouseout(function(){
		$('.hidebar #P img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #Q img').mouseover(function(){
		$('.hidebar #Q img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #Q img').mouseout(function(){
		$('.hidebar #Q img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #R img').mouseover(function(){
		$('.hidebar #R img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #R img').mouseout(function(){
		$('.hidebar #R img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #S img').mouseover(function(){
		$('.hidebar #S img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #S img').mouseout(function(){
		$('.hidebar #S img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #T img').mouseover(function(){
		$('.hidebar #T img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #T img').mouseout(function(){
		$('.hidebar #T img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #U img').mouseover(function(){
		$('.hidebar #U img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #U img').mouseout(function(){
		$('.hidebar #U img').animate({ opacity:0}, 75 ) ;
	});



	$('.bar #V img').mouseover(function(){
		$('.hidebar #V img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #V img').mouseout(function(){
		$('.hidebar #V img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #W img').mouseover(function(){
		$('.hidebar #W img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #W img').mouseout(function(){
		$('.hidebar #W img').animate({ opacity:0}, 75 ) ;
	});



	$('.bar #X img').mouseover(function(){
		$('.hidebar #X img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #X img').mouseout(function(){
		$('.hidebar #X img').animate({ opacity:0}, 75 ) ;
	});



	$('.bar #Y img').mouseover(function(){
		$('.hidebar #Y img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #Y img').mouseout(function(){
		$('.hidebar #Y img').animate({ opacity:0}, 75 ) ;
	});


	$('.bar #Z img').mouseover(function(){
		$('.hidebar #Z img').animate({ opacity:1}, 75 ) ;
	});
	$('.bar #Z img').mouseout(function(){
		$('.hidebar #Z img').animate({ opacity:0}, 75 ) ;
	});










});