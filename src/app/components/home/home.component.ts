import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  countries: any;
  search: string = "";
  regions: {} = [
    { name: "All", value: "" },
    { name: "Africa", value: "africa" },
    { name: "Americas", value: "americas" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" }
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.loading = true;
    this.api.getCountries().subscribe(res => {
      this.countries = res;
      this.loading = false;
    });
  }

  getRegionCountries(region) {
    if (region.target.value === "") {
      this.getCountries();
    } else {
      this.loading = true;
      this.api.getRegionCountries(region.target.value).subscribe(res => {
        this.countries = res;
        this.loading = false;
      });
    }
  }

  searchTerm() {
    const searchTerm = this.countries.filter(
      data =>
        !this.search ||
        data.name.toLowerCase().includes(this.search.toLowerCase())
    );
    this.search.length > 2
      ? (this.countries = searchTerm)
      : this.getCountries();
  }
}
