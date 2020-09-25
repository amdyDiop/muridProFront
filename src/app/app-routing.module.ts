import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {XasidaComponent} from './xasida/xasida.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'xasida', component: XasidaComponent},
  {path: 'home', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
