import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngwlrd";
  theme: string = "light";

  constructor(private themeSwitcher: ThemeService) {}

  ngOnInit() {
    this.themeSwitcher.selectedTheme.subscribe(res => {
      this.theme = res;
    });
  }
}
