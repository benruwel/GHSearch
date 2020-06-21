import { ReposComponent } from './views/repos/repos.component';
import { UserComponent } from './views/user/user.component';
import { FormComponent } from './views/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '' , component : FormComponent},
  {path : 'users', component : UserComponent},
  {path : 'repos', component : ReposComponent},
  {path : '**', redirectTo : '', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
