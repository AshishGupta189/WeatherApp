package com.diceTech.Server.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import lombok.Value;

@Service
public class WeatherServiceImplementation implements WeatherService{


	@Autowired
     RestTemplate restTemplate;

	@Override
	public Object weatherForecastByLocationName(String location) {
		 	HttpHeaders httpHeaders = new HttpHeaders();
	        httpHeaders.set("X-RapidAPI-Key", "b33886d7bcmsh1716f07a2d941b8p10b33fjsn174d13881d84");
	        httpHeaders.set("X-RapidAPI-Host", "forecast9.p.rapidapi.com");
	        String url = "https://forecast9.p.rapidapi.com/rapidapi/forecast/"+location+"/summary";
	        String responseBody = restTemplate.
	                exchange(url, HttpMethod.GET, new HttpEntity<>(httpHeaders), String.class).getBody();
	        return responseBody;
	}

	@Override
	public Object hourlyForecastByLocationName(long longitude, long latitude) {
		String url = String.format("%s?lat=%d&lon=%d&appid=%s", "api.openweathermap.org/data/2.5/forecast", longitude, latitude, "997bd994f8d93f6bc21f06ee5ababbc3\r\n"
				+ "");
        String body = restTemplate.exchange(url, HttpMethod.GET, null, String.class).getBody();
        return body;
	}


    

	

}
