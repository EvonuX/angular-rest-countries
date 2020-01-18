import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.scss"]
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  country: {};
  loading: boolean = false;
  component: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    this.getCountry();
  }

  ngOnDestroy() {
    this.component.unsubscribe();
  }

  getCountry() {
    const routeParams = this.route.snapshot.params;
    this.component = this.api.getCountry(routeParams.id).subscribe(res => {
      this.country = res[0];
      this.loading = false;
    });
  }
}
