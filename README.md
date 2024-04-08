
# Weather Forecast Server

This is a Spring Boot application that provides weather forecast information based on location.

## Description

This server application exposes RESTful endpoints to retrieve weather forecast information by location name or coordinates.

## Getting Started

### Prerequisites

- Java JDK 8 or higher
- Maven

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/diceTech/WeatherForecastServer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd WeatherForecastServer
    ```

3. Build the project using Maven:

    ```bash
    mvn clean install
    ```

4. Run the application:

    ```bash
    java -jar target/weather-forecast-server.jar
    ```

## Usage

### Endpoints

#### 1. Get Forecast Summary by Location Name

- **URL:** `/summary/{location}`
- **Method:** GET
- **Description:** Retrieve a summary of weather forecast for the specified location.
- **Parameters:**
  - `location`: The name of the location for which weather forecast is requested.
- **Response:** JSON object containing the weather forecast summary.

#### 2. Get Hourly Forecast by Coordinates

- **URL:** `/hourly/{lon}/{lat}`
- **Method:** GET
- **Description:** Retrieve hourly weather forecast for the specified coordinates.
- **Parameters:**
  - `lon`: Longitude of the location.
  - `lat`: Latitude of the location.
- **Response:** JSON object containing the hourly weather forecast.

### Example

#### Request

```http
GET /summary/London

```
#### Response

`{
  "location": "London",
  "forecast": "Partly cloudy",
  "temperature": "22°C",
  "humidity": "60%"
}`
