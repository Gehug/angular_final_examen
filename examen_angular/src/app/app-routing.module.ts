import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {HomeComponent} from "./home/home.component";
import {InputComponent} from "./input/input.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'input', component: InputComponent},
  {path: 'overview', component: OverviewComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
