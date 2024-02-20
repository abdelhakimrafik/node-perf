export type IP = {
  mask: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  accuracy: number;
};

export type City = {
  geoname_id: string;
  continent_code: string;
  continent_name: string;
  country_iso_code: string;
  country_name: string;
  province: string;
  city_name: string;
  time_zone: string;
  subnets: IP[];
};

export type GeoResult = Omit<City, 'subnets'> & IP & { ip: string };
