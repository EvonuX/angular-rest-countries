import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  colorMode: string = "light";

  constructor(private themeSwitcher: ThemeService) {}

  ngOnInit() {}

  toggleMode() {
    this.colorMode === "light"
      ? (this.colorMode = "dark")
      : (this.colorMode = "light");
    this.themeSwitcher.setTheme(this.colorMode);
  }
}
