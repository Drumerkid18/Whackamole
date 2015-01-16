$(document).ready(function() {
		// var randomTime = (Math.floor(Math.random() * 2000) + 800);
		var selectedMole, test, score = 0, randomTime, game, count = 6, moleImage;
		var picture = ["url(/img/blink182face.png) no-repeat center", "url(/img/blink182rabbit.png) no-repeat center",
		"url(/img/Ramones.png) no-repeat center","url(/img/mxpx.png) no-repeat center",
		"url(/img/goodcharlotte.png) no-repeat center", "url(/img/misfits.png) no-repeat center",
		"url(/img/linkinpark.png) no-repeat center"];

		

		function endGame(){
			clearTimeout(game);
			console.log("Yay you got " + score + " hits!");
		}
		

		function pickMole(){
			var randomNumber = Math.floor(Math.random() * 38);
			var randomPicture = Math.floor(Math.random() * 8);
			var moles = $('#newcontainer').children();
			moleImage = picture[randomPicture];
			selectedMole = $(moles[randomNumber]);
			$('.addme').css('background', moleImage);
			selectedMole.addClass('addme');
		
			setTimeout(function(){
				selectedMole.removeClass('addme');
			}, 800);
			
	        $(selectedMole).click(function(event) {
	        	score++;
	        	console.log(score);
				$('.mole').off();
			});
			randomTime = (Math.floor(Math.random() * 2000) + 800);

			setInterval(endGame, 30000);	
			game = setTimeout(pickMole, randomTime);
			// var currentTime = randomTime;
			// console.log(randomTime);	
		}

		function timer(){
			var test = setInterval(starttimer,1000);
			function starttimer(){
				if(count !== 0){
					count--;
					console.log(count);
					$('.timer').text(count);
				}else{
					clearInterval(test);
					starter();
				}
			}
			
		}
		
		function starter(){
			console.log('ive been clicked');
			$('#change').addClass('hideme');
			$('.mole').removeClass('hideme');
			$('.timer').text('');
			$('#newcontainer').removeClass('startgame');
			$('#newcontainer').addClass('gameplay');
			pickMole();
		}
		
		$('#change').click(function(event){
			event.preventDefault();
			timer();
		});
		
			



	});