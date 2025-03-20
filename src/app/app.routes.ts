import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Export the routes so they can be imported elsewhere
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'product', component: ProductComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
