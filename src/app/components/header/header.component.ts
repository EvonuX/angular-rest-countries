import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

const defaultTheme = localStorage.getItem("theme") || "light";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  colorMode: string = defaultTheme;

  constructor(private themeSwitcher: ThemeService) {}

  ngOnInit() {}

  toggleMode() {
    this.colorMode === "light"
      ? (this.colorMode = "dark")
      : (this.colorMode = "light");
    this.themeSwitcher.setTheme(this.colorMode);
  }
}
