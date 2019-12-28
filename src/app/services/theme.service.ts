import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>("light");
  selectedTheme = this.themeSource.asObservable();

  constructor() {}

  setTheme(theme: string) {
    this.themeSource.next(theme);
  }
}
