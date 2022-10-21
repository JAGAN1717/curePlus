import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path : "home",component:HomeComponent,canActivate:[AuthGuard]},
  {path : "product",component:ProductsComponent,canActivate:[AuthGuard]},
  {path : "sing-up",component:SingUpComponent},
  {path : "",component:SingInComponent},
  {path : "profile",component:ProfileComponent},
  {path : "cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }