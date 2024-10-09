var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
const btnSubmit = document.getElementById('submit')
const searchinput = document.getElementById('search')
// console.log('btnSubmit',btnSubmit)
async function getWeather(city){
    console.log('in getWeather city is: ',city)
    // let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7fabff3a0a154003948171052240510&q=${city}`)
    try{
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fabff3a0a154003948171052240510&q=${city}&days=3`)
    
    let weatherData = await response.json();
    console.log('weatherData',weatherData);
    
    displayWeather(weatherData)}
    catch{
        // alert('Error , My be you entered wrong city')
        console.log('eeeeeerrrror');
        myModal.show();
    }
}

getWeather('alexandria');

function displayWeather(data){
    // console.log('in displayWeather data is ',data)
    // console.log('in displayWeather data forecast.forecastday is ',data.forecast.forecastday)
    
    const forecast_3days=data.forecast.forecastday

    let cartona = ``;
    for (let i=0;i<forecast_3days.length;i++){
        let today = new Date(forecast_3days[i].date);
        let totday_weekday = today.toLocaleDateString("en-us",{'weekday': 'long'});
        let totday_daynumber = today.toLocaleDateString("en-us",{'day': 'numeric'})
        let totday_month = today.toLocaleDateString("en-us",{'month':'long'})
        // console.log('forecast_3days[i].day.maxtemp_c',forecast_3days[i].day.maxtemp_c)
        cartona+=`
         <div class="col-md-4 ">
                        <div id="today"  class="forecast-header  d-flex justify-content-between align-items-center p-2 rounded-2" >
                            <div class="day">${totday_weekday}</div>
                            <div class="date">${totday_daynumber} ${totday_month}</div>    
                        </div>
                        <div id="current" class="forecast-content">
                            <div class="location p-2 my-3">
                                ${data.location.name}
                            </div>
                            <div class="degree   d-flex justify-content-center align-items-center ">
                                <div class="num">
                                   ${forecast_3days[i].day.maxtemp_c}
                                </div>
                                <sup>o</sup>
                                C
                            </div>

                            <div class="forecast-icon d-flex justify-content-center align-items-center">
                                <img src=${forecast_3days[i].day.condition.icon} class="text-center width-90" >
                                
                                    <h6 class="weather-status text-info ">${forecast_3days[i].day.condition.text}</h6>
                            
                            </div>
                           
                            <div class="weather-custom d-flex justify-content-between">
                                <span>
                                    <img src="Images/icon-umberella.png" alt="">
                                    ${forecast_3days[i].day.daily_chance_of_rain}%
                                </span>

                                <span>
                                    <img src="Images/icon-wind.png" alt="">      
                                    ${forecast_3days[i].day.maxwind_kph} KP/h                  
                                </span>

                                <span>
                                    <img src="Images/icon-compass.png" alt="">                          
                                    East
                                </span>
                            </div>

                        </div>                        

                    </div>
        `
    }
    document.getElementById('rowforecast').innerHTML=cartona;
 }



btnSubmit.addEventListener('click',function(e){
    
   e.preventDefault();
   let city = searchinput.value;
   console.log('value of city in search bytton value',city)
    if (city!=''){

       console.log('case there is city - city is ',city)
       getWeather(city)
    }
    else{
        console.log('case there is no city',city)
        getWeather('cairo');
        
    }


});

function getlocation(){
    console.log('in getlocation');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
      }
      
}


function showPosition(position) {
    // console.log('in showPosition position is',position);
    // console.log('in showPosition position is');
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
    // if (latitude && longitude ){
    //     codeLatLng(latitude,longitude)

    // }
    
  }

// function showPosition(position) {
//     console.log('in show position - ');
// 	var lat = position.coords.latitude;
// 	var long = position.coords.longitude;
// 	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=YOUR_API_KEY";
// 	$.ajax({
// 		type: "GET",
// 		url: url,
// 		dataType: "json",
// 		success: function (msg) {
// 			var results = msg.results;
// 			var zip = results[0].address_components[6].long_name;
// 			alert("Your zip code is: " + zip);
//             console.log('in show position return zip code is ',zip)
// 		},
// 		error: function (req, status, error) {
// 			alert('Sorry, an error occurred.');
// 			console.log(req.responseText);
// 		}
// 	});
// }

//   function codeLatLng(lat, lng) {
//     // console.log('in codeLatLng  lat : ',lat)
//     // console.log('in codeLatLng  lng : ',lng)
//     if (lat && lng){
//         var latlng = new google.maps.LatLng(lat, lng);
//         geocoder.geocode({'latLng': latlng}, function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//           console.log(results)
//             if (results[1]) {
//              //formatted address
//              alert(results[0].formatted_address)
//             //find country name
//                  for (var i=0; i<results[0].address_components.length; i++) {
//                 for (var b=0;b<results[0].address_components[i].types.length;b++) {
    
//                 //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//                     if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                         //this is the object you are looking for
//                         city= results[0].address_components[i];
//                         break;
//                     }
//                 }
//             }
//             //city data
//             alert(city.short_name + " " + city.long_name)
    
    
//             } else {
//               alert("No results found");
//             }
//           } else {
//             alert("Geocoder failed due to: " + status);
//           }
//         });
//     }
   
//   }
getlocation();