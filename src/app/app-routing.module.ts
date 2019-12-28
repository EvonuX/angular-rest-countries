import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "country/:id",
    component: CountryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
