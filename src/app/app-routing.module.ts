import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DirectorComponent } from "./director/director.component";
import { FilmComponentComponent } from './film-component/film-component.component';
import { GetComponent } from './get/get.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path:'',component:DirectorComponent},
  {path:'film',component:FilmComponentComponent},
  {path:'film/get',component:GetComponent},
  {path:'director',component:DirectorComponent},
  {path:'director/get',component:GetComponent},
  {path:'update/:name',component:UpdateComponent},
  {path:'update/:name/get',component:GetComponent},
  {path:'delete/:name',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
