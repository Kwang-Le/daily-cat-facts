import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cat-fact', component: CatFactsComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/cat-fact', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
