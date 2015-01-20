$(document).ready(function() {
		// var randomTime = (Math.floor(Math.random() * 2000) + 800);
		var selectedMole, test, score = 0, randomTime, game, count = 6, moleImage;
		var picture = [ 'img/blink182face.png', 'img/blink182rabbit.png',
		'img/Ramones.png','img/mxpx.png','img/goodcharlotte.png',
		 'img/misfits.png', 'img/linkinpark.png' ];

		

		function endGame(){
			clearTimeout(game);
			console.log("Yay you got " + score + " hits!");
		}
		

		function pickMole(){
			var randomNumber = Math.floor(Math.random() * 36);
			var randomPicture = Math.floor(Math.random() * 7);
			var moles = $('#newcontainer').children();
			moleImage = picture[randomPicture];
			selectedMole = $(moles[randomNumber]);
			selectedMole.addClass('addme');
			$('.addme').css('background', "url('/" + moleImage + "') no-repeat center");
		
			setTimeout(function(){
				selectedMole.removeClass('addme');
				$(moles).css('background', 'none');
			}, 800);
			
	        $(selectedMole).click(function(event) {
	        	score++;
	        	// console.log(score);
				$('.mole').off();
			});
			randomTime = (Math.floor(Math.random() * 3000) + 805);

			setInterval(endGame, 30000);	
			game = setTimeout(pickMole, randomTime);
			var currentTime = randomTime;
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
			// console.log('ive been clicked');
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