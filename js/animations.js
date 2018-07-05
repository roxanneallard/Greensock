




// 1 - Selectors
//
// 	var header = document.getElementById('header');
// 	var h1 = document.getElementsByTagName('h1');
// 	var intro = document.getElementsByClassName('intro');
// 	var firstItem = document.getElementsByClassName('list')[0].firstElementChild;
// 	var secondItem = document.getElementsByClassName('list')[0].children[1];
// 	var lastItem = document.getElementsByClassName('list')[0].lastElementChild;
//
// 	TweenLite.to(lastItem, 1, {opacity:0, y: 50});





// 2 - Tweenlite

// (function($){
//
// 	var img = $('img');
// 	var h2 = $('h2');

// method one:
// TweenLite.to(img, 1, {x:-200});

// method two:
// TweenLite.fromTo(img, 1, {x:-200},{x:200});

// method three:
// TweenLite.set(img, {x:-200});

// method four:
// TweenLite.from(img, 1, {x:-200});
// TweenLite.from(h2, 1, {autoAlpha:0, delay:1});

// })(jQuery);





// 3 - Easing

// (function($){
//
// 	var img = $('img');
// 	var h2 = $('h2');

// Ease None:
// TweenLite.from(img, 1, {x:-200, ease:Power0.easeNone});

// Ease In:
// TweenLite.from(img, 1, {x:-200, ease:Power3.easeIn});

// Back Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Back.easeOut});

// Bounce Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Bounce.easeOut});

// Circ Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Circ.easeOut});

// Elastic Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Elastic.easeOut});

// Expo Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Expo.easeOut});

// Sine Ease Out
// TweenLite.from(img, 1, {x:-200, ease:Sine.easeOut});

// TweenLite.from(h2, 1, {autoAlpha:0, delay:1});
//
// })(jQuery);





// 4 - Simple Call Back Functions

// (function($){
//
// 		var img = $('img');
// 		var h2 = $('h2');
// 		var i = 0;
//
// 	TweenLite.from(img, 1, {x:-200, ease:Power3.easeInOut, onStart: onStart, onUpdate: onUpdate, onComplete: onComplete});
//
// 	function onStart(){
// 		console.log('animation started')
// 	};
//
// 	function onUpdate(){
// 		// console.log('animation is in progress')
// 		h2.text(i++);
// 	};
//
// 	function onComplete(){
// 		console.log('animation completed')
// 	};
//
// })(jQuery);





// 5 - Animating Multiple Objects

// (function($){

			// BAD WAY:
			// var img = $('img');
			// var h2 = $('h2');
			// var h1 = $('h1');
			// var intro = $('.intro');
			// var listItem = $('ul li');
			//
			// TweenLite.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut, delay:0.2});
			// TweenLite.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut, delay:0.4});
			// TweenLite.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut, delay:0.6});
			// TweenLite.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut, delay:0.8});
			// TweenLite.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut, delay:1});



			// GOOD WAY:
// 			var img = $('img');
// 			var h2 = $('h2');
// 			var h1 = $('h1');
// 			var intro = $('.intro');
// 			var listItem = $('ul li');
// 			var tl = new TimelineLite();
//
//
// 			tl.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 				.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, '-=0.15')
// 				.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, '-=0.15')
// 				.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, '-=0.15')
// 				.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeO}, '-=0.15');
//
//
//
// })(jQuery);







// Adding Tweens To A Timeline
//
// (function($){
//
// 				var img = $('img');
// 				var h2 = $('h2');
// 				var h1 = $('h1');
// 				var intro = $('.intro');
// 				var listItem = $('ul li');
// 				var tl = new TimelineLite();
//
// 				tl.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.add('intro')
// 					.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, 'intro')
// 					.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeO});
//
// })(jQuery);










// Controlling Timeline Playback

// (function($){
//
// 				var img = $('img');
// 				var h2 = $('h2');
// 				var h1 = $('h1');
// 				var intro = $('.intro');
// 				var listItem = $('ul li');
// 				var tl = new TimelineLite();
//
// 				tl.from(h1, 1, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(intro, 1, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(img, 1, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(h2, 1, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(listItem, 1, {y:-15, autoAlpha:0, ease:Power1.easeO});
//
// 					tl.pause();
//
// 					$('#btnPlay').on('click', function(){
// 						tl.play();
// 					});
//
// 					$('#btnPause').on('click', function(){
// 						tl.pause();
// 					});
//
// 					$('#btnResume').on('click', function(){
// 						tl.resume();
// 					});
//
// 					$('#btnReverse').on('click', function(){
// 						tl.reverse();
// 					});
//
// 					$('#btnSpeedUp').on('click', function(){
// 						tl.timeScale(8);
// 					});
//
// 					$('#btnSlowDown').on('click', function(){
// 						tl.timeScale(0.5);
// 					});
//
// 					$('#btnSeek').on('click', function(){
// 						tl.seek(1);
// 					});
//
// 					$('#btnProgress').on('click', function(){
// 						tl.progress(0.5);
// 					});
//
// 					$('#btnRestart').on('click', function(){
// 						tl.restart();
// 					});
//
// })(jQuery);





// Staggering animations

// (function($){
//
// 				var img = $('img');
// 				var h2 = $('h2');
// 				var h1 = $('h1');
// 				var intro = $('.intro');
// 				var listItem = $('ul li');
// 				var buttons = $('button');
// 				var tl = new TimelineLite();
//
// 				tl.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeO})
// 					.staggerFrom(buttons, 0.2, {cycle:{
// 						x: [50, -50],
// 						scale: [2, 0.5]
// 					}, autoAlpha:0, ease:Power1.easeOut}, 0.1);
//
// 					$('#btnPlay').on('click', function(){
// 						tl.play();
// 					});
//
// 					$('#btnPause').on('click', function(){
// 						tl.pause();
// 					});
//
// 					$('#btnResume').on('click', function(){
// 						tl.resume();
// 					});
//
// 					$('#btnReverse').on('click', function(){
// 						tl.reverse();
// 					});
//
// 					$('#btnSpeedUp').on('click', function(){
// 						tl.timeScale(8);
// 					});
//
// 					$('#btnSlowDown').on('click', function(){
// 						tl.timeScale(0.5);
// 					});
//
// 					$('#btnSeek').on('click', function(){
// 						tl.seek(1);
// 					});
//
// 					$('#btnProgress').on('click', function(){
// 						tl.progress(0.5);
// 					});
//
// 					$('#btnRestart').on('click', function(){
// 						tl.restart();
// 					});
//
// })(jQuery);








// TimelineMax vs TimelineLite Part 1
//
// (function($){
//
// 				var img = $('img');
// 				var h2 = $('h2');
// 				var h1 = $('h1');
// 				var intro = $('.intro');
// 				var listItem = $('ul li');
// 				var buttons = $('button');
// 				var tl = new TimelineLite({paused:true});
// 				var dot = $('.dot');
// 				var loader = $('#loader');
// 				var tlLoader = new TimelineMax({repeat:2, onComplete: loadContent});
//
//
// 				tl.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
// 					.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeO})
// 					.staggerFrom(buttons, 0.2, {cycle:{
// 						x: [50, -50],
// 						scale: [2, 0.5]
// 					}, autoAlpha:0, ease:Power1.easeOut}, 0.1);
//
//
// 					// Loader Timeline
// 					tlLoader.staggerFromTo(dot, 0.3,
// 							{y:0, autoAlpha:0},
// 							{y:20, autoAlpha:1, ease:Back.easeInOut},
// 							0.05)
// 							.fromTo(loader, 0.3,
// 								{autoAlpha:1, scale:1.3},
// 								{autoAlpha:0, scale:1,  ease:Power0.easeNone},
// 								0.9);
//
// 								function loadContent(){
// 									console.log('bring on the content');
// 								};
//
// 					$('#btnPlay').on('click', function(){
// 						tl.play();
// 					});
//
// 					$('#btnPause').on('click', function(){
// 						tl.pause();
// 					});
//
// 					$('#btnResume').on('click', function(){
// 						tl.resume();
// 					});
//
// 					$('#btnReverse').on('click', function(){
// 						tl.reverse();
// 					});
//
// 					$('#btnSpeedUp').on('click', function(){
// 						tl.timeScale(8);
// 					});
//
// 					$('#btnSlowDown').on('click', function(){
// 						tl.timeScale(0.5);
// 					});
//
// 					$('#btnSeek').on('click', function(){
// 						tl.seek(1);
// 					});
//
// 					$('#btnProgress').on('click', function(){
// 						tl.progress(0.5);
// 					});
//
// 					$('#btnRestart').on('click', function(){
// 						tl.restart();
// 					});
//
// })(jQuery);









// TimelineMax vs TimelineLite Part 2
//
(function($){

				var img = $('img');
				var h2 = $('h2');
				var h1 = $('h1');
				var intro = $('.intro');
				var listItem = $('ul li');
				var buttons = $('button');
				var tl = new TimelineLite({paused:true});
				var dot = $('.dot');
				var loader = $('#loader');
				var tlLoader = new TimelineMax({repeat:2, onComplete: loadContent});


				tl.set(header, {autoAlpha:1})
					.from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
					.from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
					.from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
					.from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
					.from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeO})
					.staggerFrom(buttons, 0.2, {cycle:{
						x: [50, -50],
						scale: [2, 0.5]
					}, autoAlpha:0, ease:Power1.easeOut}, 0.1);


					// Loader Timeline
					tlLoader.staggerFromTo(dot, 0.3,
							{y:0, autoAlpha:0},
							{y:20, autoAlpha:1, ease:Back.easeInOut},
							0.05)
							.fromTo(loader, 0.3,
								{autoAlpha:1, scale:1.3},
								{autoAlpha:0, scale:1,  ease:Power0.easeNone},
								0.9);

								function loadContent(){
									var tlLoaderOut = new TimelineLite({onComplete:contentIn});
									tlLoaderOut
									.set(dot, {backgroundColor:'#2b4d66'})
									.to(loader, 0.3, {autoAlpha:1, scale:1.3, ease:Power0.easeNone})
									.staggerFromTo(dot, 0.3,
											{y:0, autoAlpha:0},
											{y:20, autoAlpha:1, ease:Back.easeInOut},
											0.05, 0
										)
										.to(loader, 0.3, {y: -150, autoAlpha:0, ease:Back.easeIn}, '+=0.3')

										;
								}

								function contentIn(){
									tl.play();
								}

					$('#btnPlay').on('click', function(){
						tl.play();
					});

					$('#btnPause').on('click', function(){
						tl.pause();
					});

					$('#btnResume').on('click', function(){
						tl.resume();
					});

					$('#btnReverse').on('click', function(){
						tl.reverse();
					});

					$('#btnSpeedUp').on('click', function(){
						tl.timeScale(8);
					});

					$('#btnSlowDown').on('click', function(){
						tl.timeScale(0.5);
					});

					$('#btnSeek').on('click', function(){
						tl.seek(1);
					});

					$('#btnProgress').on('click', function(){
						tl.progress(0.5);
					});

					$('#btnRestart').on('click', function(){
						tl.restart();
					});

})(jQuery);








// TweenMax

// (function($){
// 	var box = $('.box');
// 	var boxSVG = $('#boxSVG');
// 	var boxHTML = $('#boxHTML');
// 	var htmlDot = $('#htmlDOT');
// 	var svgDot = $('#boxSVG .circ');
// 	var tl = new TimelineLite({paused:true});
//
// 	tl
// 	.to(boxHTML, 0.7, {x:'100%', y:'100%', ease:Power2.easeInOut})
// 	.to(boxSVG, 0.7, {x:'100%', y:'100%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {left:'50%', top:'50%', ease:Power2.easeInOut})
// 	.to(boxSVG, 0.7, {left:'50%', top:'50%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {left:'50%', top:'50%', x:'50%', y:'50%', ease:Power2.easeInOut})
// 	.to(htmlDot, 0.7, {left:0, top:0, ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxSVG, 0.7, {left:'50%', top:'50%', x:'50%', y:'50%', ease:Power2.easeInOut})
// 	.to(svgDot, 0.7, {attr:{cx:0, cy:0}, ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {rotation:90, transformOrigin:'100% 100%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxSVG, 0.7, {rotation:90, transformOrigin:'100% 100%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {xPercent:-100, rotation:0, ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxSVG, 0.7, {x:'0%', rotation:0, ease:Power2.easeInOut})
// 	.addPause()
// 	.to(htmlDot, 0.7, {left:'50%', top:'50%', x:'50%', y:'50%', ease:Power2.easeInOut})
// 	.to(svgDot, 0.7, {attr:{cx:100, cy:100}, ease:Power2.easeInOut}, '-=0.7')
// 	.addPause()
// 	.to([boxSVG,boxHTML], 0.7, {rotation:720, transformOrigin: '50% 50%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {rotationX: -180, transformOrigin:'0% 50%', ease:Power2.easeInOut})
// 	.to(boxSVG, 0.7, {rotationY: -180, transformOrigin:'100% 50%', ease:Power2.easeInOut})
// 	.addPause()
// 	.to(boxHTML, 0.7, {rotationX: -360, ease:Power2.easeInOut})
// 	.to(boxSVG, 0.7, {rotationY: -360, ease:Power2.easeInOut})
// 	;
//
// 	$('#btnNext').on('click', function(){
// 		tl.play();
// 	});
//
// 	$('#btnPrev').on('click', function(){
// 		tl.reverse();
// 	});
//
//
// })(jQuery);
