$(function() {

		//getting zip code that is typed into zip field
		$('.enter-button').on('click',function(){
			zipCode = $('.zip-field').val();
			//sets zipCode to zip???
			getZip(zipCode);

			$('#zip-screen').hide();
			$('#weather-screen').show();


		});
});

function getZip(zip){
		//setting my api id to a variable
		var userId = 'fb5379470dcd4e87';

		//Getting the weather data from wunderground account with ajax
		$.ajax({
          //  url: "http://api.wunderground.com/api/"+userId+"/forecast10day/geolookup/conditions/q/"+zip+".json",
            url: "http://api.wunderground.com/api/"+userId+"/forecast10day/geolookup/conditions/q/12550.json",
						dataType: 'jsonp',
            type: 'GET',
            success: function (tiempo) {
							//get the weather,temperature,location,wind, humidity, and
							//forcast of current day
							var location = tiempo['current_observation']['display_location']['full'];
							var temp_f = tiempo['current_observation']['temp_f'];
							//Temp rounds the decimal value of temp_f
							var temp = Math.ceil(temp_f);
							var feels = tiempo['current_observation']['feelslike_f'];
							var weather = tiempo['current_observation']['weather'];
							var current_weekday = tiempo['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'];
							var current_m = tiempo['forecast']['simpleforecast']['forecastday'][0]['date']['monthname'];
							var current_d = tiempo['forecast']['simpleforecast']['forecastday'][0]['date']['day'];
							var current_y = tiempo['forecast']['simpleforecast']['forecastday'][0]['date']['year'];

							$('.temp_f').append(temp);
							$('.weather').append(weather);
              $('.location').append(location);
							$('.date').append(current_m+' '+current_d+', '+current_y);
							$('.day').append(current_weekday);


            },

        });
}
