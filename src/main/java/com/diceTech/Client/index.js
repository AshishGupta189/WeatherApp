
    details = document.getElementById("details");
    fri = document.getElementById("fri");
    sat = document.getElementById("sat"); 
    sun = document.getElementById("sun");
    mon = document.getElementById("mon");
    tue = document.getElementById("tue");
    wed = document.getElementById("wed");
    thu = document.getElementById("thu");
    thu1 = document.getElementById("thu1");
    async function gettemp(){
        try{
            let city = document.getElementById("search_box").value;

            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f28f733a748c7e17c084cf41dd38bf6&units=metric&dt=unix`);

            let data = await res.json();

            let lat = data.coord.lat;
            let lon = data.coord.lon;

            appendData(data);

            let weeklyres = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=5f28f733a748c7e17c084cf41dd38bf6&units=metric`);

            let weeklydata  = await weeklyres.json();

            console.log(weeklydata);
            weeklyappend(weeklydata);


        }
        catch(err){
            console.log("error in code is :",err);
        }
    };
    function appendData(data){
        details.innerHTML="";

        let datadiv = document.createElement("div");
        let mapdiv = document.createElement("div");

        let country = document.createElement("h1");
        country.innerText = `Country : ${data.sys.country}`;

        let city = document.createElement("h1");
        city.innerText = `City : ${data.name}`;

        let sunrise = document.createElement("h2");
        sunrise.innerHTML = `<i class="fa-solid fa-sunrise"></i><span>Sunrise Time : ${data.sys.sunrise}</span>`;


        let sunset = document.createElement("h2");
        sunset.innerHTML= `<i class="fa-solid fa-sunset"></i> <span>Sunset Time : ${data.sys.sunset}</span>`;

        let mintemp = document.createElement("h2");
        mintemp.innerHTML= `<i class="fa-solid fa-temperature-half"></i> <span>Min temp : ${data.main.temp_min}</span>`;

        let maxtemp = document.createElement("h2");
        maxtemp.innerHTML= `<i class="fa-solid fa-temperature-high"></i> <span>Max temp : ${data.main.temp_max}</span>`;

        let wind = document.createElement("h2");
        wind.innerHTML= `<i class="fa-solid fa-wind"></i><span>Wind speed: ${data.wind.speed}</span>`;

        let clouds = document.createElement("h2");
        clouds.innerHTML= `<i class="fa-solid fa-clouds"></i> <span>Clouds : ${data.clouds.all}</span>`;

        datadiv.append(country,city,sunrise,sunset,mintemp,maxtemp,wind,clouds);

        map = document.createElement("iframe");
        map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        map.height = `100%`;
        map.width =`100%`;

        mapdiv.append(map);

        details.append(datadiv,mapdiv);
    }
    function weeklyappend(weeklydata){
        fri.innerHTML  ="";
        sat.innerHTML  ="";
        sun.innerHTML  ="";
        mon.innerHTML  ="";
        tue.innerHTML  ="";
        wed.innerHTML  =""; 
        thu.innerHTML  ="";
        thu1.innerHTML ="";

        thumax = document.createElement("h3");
        thumax.innerText = weeklydata.daily[0].temp.max;
        thumin = document.createElement("h3");
        thumin.innerText = weeklydata.daily[0].temp.min;
        thu.append(thumax,thumin);

        frimax = document.createElement("h3");
        frimax.innerText = weeklydata.daily[1].temp.max;
        frimin = document.createElement("h3");
        frimin.innerText = weeklydata.daily[1].temp.min;
        fri.append(frimax,frimin);

        satmax = document.createElement("h3");
        satmax.innerText = weeklydata.daily[2].temp.max;
        satmin = document.createElement("h3");
        satmin.innerText = weeklydata.daily[2].temp.min;
        sat.append(satmax,satmin);

        sunmax = document.createElement("h3");
        sunmax.innerText = weeklydata.daily[3].temp.max;
        sunmin = document.createElement("h3");
        sunmin.innerText = weeklydata.daily[3].temp.min;
        sun.append(sunmax,sunmin);

        monmax = document.createElement("h3");
        monmax.innerText = weeklydata.daily[4].temp.max;
        monmin = document.createElement("h3");
        monmin.innerText = weeklydata.daily[4].temp.min;
        mon.append(monmax,monmin);

        tuemax = document.createElement("h3");
        tuemax.innerText = weeklydata.daily[5].temp.max;
        tuemin = document.createElement("h3");
        tuemin.innerText = weeklydata.daily[5].temp.min;
        tue.append(tuemax,tuemin);

        wedmax = document.createElement("h3");
        wedmax.innerText = weeklydata.daily[6].temp.max;
        wedmin = document.createElement("h3");
        wedmin.innerText = weeklydata.daily[6].temp.min;
        wed.append(wedmax,wedmin);

        thu1max = document.createElement("h3");
        thu1max.innerText = weeklydata.daily[7].temp.max;
        thu1min = document.createElement("h3");
        thu1min.innerText = weeklydata.daily[7].temp.min;
        thu1.append(thu1max,thu1min);
    }
