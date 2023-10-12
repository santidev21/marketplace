import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/main-page/home/home.component';
import { ProductDetailComponent } from './components/main-page/home/product-detail/product-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
