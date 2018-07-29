export class FindCity {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  sys: Sys;
  rain: Rain;
  snow: null;
  clouds: Clouds;
  weather: Weather[];

  constructor(props: {
    id: number;
    name: string;
    coord: Coord;
    main: Main;
    dt: number;
    wind: Wind;
    sys: Sys;
    rain: Rain;
    snow: null;
    clouds: Clouds;
    weather: Weather[];
  }) {
    this.id = props.id;
    this.name = props.name;
    this.coord = new Coord(props.coord);
    this.main = new Main(props.main);
    this.dt = props.dt;
    this.wind = new Wind(props.wind);
    this.sys = new Sys(props.sys);
    this.rain = new Rain(props.rain);
    this.snow = props.snow;
    this.clouds = new Clouds(props.clouds);
    this.weather = props.weather.map(weather => new Weather(weather));
  }
}

class Main {
  public readonly temp: number;
  public readonly pressure: number;
  public readonly humidity: number;
  public readonly temp_min: number;
  public readonly temp_max: number;
  public readonly sea_level: number;
  public readonly grnd_level: number;

  constructor(props: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
  }) {
    this.temp = props.temp;
    this.pressure = props.pressure;
    this.humidity = props.humidity;
    this.temp_min = props.temp_min;
    this.temp_max = props.temp_max;
    this.sea_level = props.sea_level;
    this.grnd_level = props.grnd_level;
  }
}

class Weather {
  public readonly id: number;
  public readonly main: string;
  public readonly description: string;
  public readonly icon: string;

  constructor(props: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }) {
    this.id = props.id;
    this.main = props.main;
    this.description = props.description;
    this.icon = props.icon;
  }
}

class Clouds {
  all: number;

  constructor(props: { all: number }) {
    this.all = props.all;
  }
}

class Sys {
  country: string;

  constructor(props: { country: string }) {
    this.country = props.country;
  }
}

class Wind {
  speed: number;
  deg: number;

  constructor(props: {
    speed: number;
    deg: number;
  }) {
    this.speed = props.speed;
    this.deg = props.deg;
  }
}

class Rain {
  '3h': number;

  constructor(props: {
    '3h': number;
  }) {
    this['3h'] = props['3h'];
  }
}
class Coord {
  lat: number;
  lon: number;

  constructor(props: {
    lat: number;
    lon: number;
  }) {
    this.lat = props.lat;
    this.lon = props.lon;
  }
}
