import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CountryComponent } from "./components/country/country.component";
import { HeaderComponent } from "./components/header/header.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    HeaderComponent,
    CountryDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
