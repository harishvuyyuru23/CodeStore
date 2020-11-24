import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ProductsComponent } from './Products/Products.component';
import { ContentComponent } from './content/content.component';
import { contactusComponent } from './contactus/contactus.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: "Home", component: HeaderComponent},
  { path: "About", component: IntroComponent},
  { path: "Products", component: ProductsComponent},
  { path: "Services", component: ContentComponent},
  { path: "contactus", component: contactusComponent},
  { path: "Pricing", component: PricingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
