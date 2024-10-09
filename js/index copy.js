async function getWeather(city){
    // let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7fabff3a0a154003948171052240510&q=${city}`)
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fabff3a0a154003948171052240510&q=07112&days=3`)
    
    let weatherData = await response.json();
    console.log('weatherData',weatherData);
    
    displayWeather(weatherData)
}

getWeather('cairo')

function displayWeather(data){
    console.log('in displayWeather data is ',data)
    let today_daily_chance_of_rain = data.forecast.forecastday[0].day.daily_chance_of_rain
    let totday_wind_kph = data.current.wind_kph
    let today_maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph
    console.log('today_maxwind_kph day is ',data.forecast.forecastday[0].day.maxwind_kph)

    let next_daily_chance_of_rain = data.forecast.forecastday[0].day.daily_chance_of_rain
    // let next_wind_kph = data.current.wind_kph
    let next_maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph


    let cartona = ``;

    console.log('current state',data.current.condition.text)
    console.log('city',data.location.name)
    console.log('country',data.location.country)
    console.log('forcast',data.forecast.forecastday[0].date)
    console.log('forcast typeof ',typeof data.forecast.forecastday[0].date)
    // console.log('forcast dateString ',new Date(data.forecast.forecastday[0].date));
    // console.log('forcast dateString typeof ',typeof new Data(data.forecast.forecastday[0].date))
    // let dateee= data.forecast.forecastday[0].date
    // let ddd= Date.toLocaleDateString(dateee)
    // console.log('ddd',ddd);

    // const d = new Date('10/8/2024');
    // const d = new Date(data.forecast.forecastday[0].date);
    const currentDate = new Date(data.forecast.forecastday[0].date);
    console.log('date from data.forecast.forecastday[0].date is ',currentDate);
    console.log('dddddddd typeof',typeof d);
    let text = currentDate.toLocaleDateString();
    console.log('text',text);
    console.log('text typeof ff',typeof text);
    // const date = new Date();
    // console.log('new dateeeeeee ',date.toLocaleDateString("en-us","short"))
    // console.log('new dateeeeeee22 ',d.toLocaleDateString("en-us","short"))
    // console.log('new dateeeeeee33 short ',d.toLocaleDateString("en-us",{weekday:"short"}))
    // console.log('new dateeeeeee44 long ',d.toLocaleDateString("en-us",{weekday:"long"}))
    // console.log('new dateeeeeee55 ar eg long ',d.toLocaleDateString("ar-eg",{weekday:"long"}))
    // options:{'year': 'numeric','month':'long','day': 'numeric','weekday': 'long'};          
    // options={
    //     'year': 'numeric',
    //     'month':'long',
    //     'day': 'numeric',
    //     'weekday': 'long'
    // }
    options={
        
        'month':'long',
        'day': 'numeric',
    }
    console.log('new currentDate long ',currentDate.toLocaleDateString("en-us",{weekday:"long"}))
    let currentWeekDay = currentDate.toLocaleDateString("en-us",{weekday:"long"})
    let currentdaynumber = currentDate.toLocaleDateString("en-us",{'day': 'numeric'})
    let currentMonth = currentDate.toLocaleDateString("en-us",{'month':'long'})
    console.log('new dateeeeeee66 with options only weekday is :  ',currentDate.toLocaleDateString("en-us",{weekday: 'long'}))
    console.log('new dateeeeeee66 with options with day only is :  ',currentDate.toLocaleDateString("en-us",{'day': 'numeric'}))
    console.log('new dateeeeeee66 with options with month only is :  ',currentDate.toLocaleDateString("en-us",{'month':'long'}))
    // console.log('new dateeeeeee type of  ',typeof date.toLocaleDateString("en-us","short"))
    // for (let i=0;i<data.length;i++){
        cartona+=`
         <div class="col-md-4 ">
                        <div id="today"  class="forecast-header  d-flex justify-content-between align-items-center p-2 rounded-2" >
                            <div class="day">${currentWeekDay}</div>
                            <div class="date">${currentdaynumber} ${currentMonth}</div>    
                        </div>
                        <div id="current" class="forecast-content">
                            <div class="location p-2 my-3">
                                ${data.location.name}
                            </div>
                            <div class="degree   d-flex justify-content-center align-items-center ">
                                <div class="num">
                                   ${data.current.temp_c}
                                </div>
                                <sup>o</sup>
                                C
                            </div>

                            <div class="forecast-icon d-flex justify-content-center align-items-center">
                                <img src=${data.current.condition.icon} class="text-center width-90" >
                                
                                    <h6 class="weather-status text-info ">${data.current.condition.text}</h6>
                            
                            </div>
                           
                            <div class="weather-custom d-flex justify-content-between">
                                <span>
                                    <img src="Images/icon-umberella.png" alt="">
                                    ${today_daily_chance_of_rain}%
                                </span>

                                <span>
                                    <img src="Images/icon-wind.png" alt="">      
                                    ${today_maxwind_kph} KP/h                  
                                </span>

                                <span>
                                    <img src="Images/icon-compass.png" alt="">                          
                                    East
                                </span>
                            </div>

                        </div>                        

                    </div>
        `

        cartona+=`
        <div class="col-md-4 ">
                       <div id="today"  class="forecast-header  d-flex justify-content-between align-items-center p-2 rounded-2" >
                           <div class="day">${currentWeekDay}</div>
                           <div class="date">${currentdaynumber} ${currentMonth}</div>    
                       </div>
                       <div id="current" class="forecast-content">
                           <div class="location p-2 my-3">
                               ${data.location.name}
                           </div>
                           <div class="degree   d-flex justify-content-center align-items-center ">
                               <div class="num">
                                  ${data.current.temp_c}
                               </div>
                               <sup>o</sup>
                               C
                           </div>

                           <div class="forecast-icon d-flex justify-content-center align-items-center">
                               <img src=${data.current.condition.icon} class="text-center width-90" >
                               
                                   <h6 class="weather-status text-info ">${data.current.condition.text}</h6>
                           
                           </div>
                          
                           <div class="weather-custom d-flex justify-content-between">
                               <span>
                                   <img src="Images/icon-umberella.png" alt="">
                                   ${next_daily_chance_of_rain}%
                               </span>

                               <span>
                                   <img src="Images/icon-wind.png" alt="">      
                                   ${next_maxwind_kph} KP/h                  
                               </span>

                               <span>
                                   <img src="Images/icon-compass.png" alt="">                          
                                   East
                               </span>
                           </div>

                       </div>                        

                   </div>
       `
    // }
    document.getElementById('rowforecast').innerHTML=cartona;
}