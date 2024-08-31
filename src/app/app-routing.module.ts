import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; // Örnek bir ana sayfa componenti

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa
  { path: 'login', component: LoginComponent }, // Login sayfası
  // Diğer rotalar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
