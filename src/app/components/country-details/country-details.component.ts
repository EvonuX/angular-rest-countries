import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.scss"]
})
export class CountryDetailsComponent implements OnInit {
  country: {};
  loading: boolean = false;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCountry();
  }

  getCountry() {
    this.loading = true;
    this.api
      .getCountry(this.route.snapshot.paramMap.get("id"))
      .subscribe(res => {
        this.country = res[0];
        this.loading = false;
      });
  }
}
