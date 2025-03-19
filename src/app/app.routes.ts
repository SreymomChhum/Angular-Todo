import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component'; // Adjust the path if needed

// Export the routes so they can be imported elsewhere
export const routes: Routes = [
  { path: 'product', component: ProductComponent }, // The route to redirect after login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
