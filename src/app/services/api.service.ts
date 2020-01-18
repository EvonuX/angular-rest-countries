import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiUrl: string = "https://restcountries.eu/rest/v2";

  constructor(private api: HttpClient) {}

  getCountries() {
    return this.api.get(`${this.apiUrl}/all`);
  }

  getCountry(id) {
    return this.api.get(`${this.apiUrl}/alpha?codes=${id}`);
  }

  getRegionCountries(region) {
    return this.api.get(`${this.apiUrl}/region/${region}`);
  }
}
