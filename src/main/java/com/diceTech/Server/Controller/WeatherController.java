package com.diceTech.Server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.diceTech.Server.Service.WeatherService;

@RestController
@CrossOrigin(origins = "*")
public class WeatherController {
    final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/summary/{location}")
    public ResponseEntity<Object> getForecastSummaryByLocationName(@PathVariable String location) {
        return new ResponseEntity<>(weatherService.weatherForecastByLocationName(location), HttpStatus.OK);
    }

    @GetMapping("/hourly/{lon}/{lat}")
    public ResponseEntity<Object> GetHourlyForecastByLocationName(@PathVariable long lon, @PathVariable long lat) {
        return new ResponseEntity<>(weatherService.hourlyForecastByLocationName(lon,lat),HttpStatus.OK);
    }
}