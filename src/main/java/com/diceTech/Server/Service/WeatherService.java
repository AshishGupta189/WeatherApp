package com.diceTech.Server.Service;

public interface WeatherService {

	public Object weatherForecastByLocationName(String location);

    public Object hourlyForecastByLocationName(long longitude, long latitude);

}
