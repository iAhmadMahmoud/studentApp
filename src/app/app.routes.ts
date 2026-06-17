import { Routes } from '@angular/router';
import { Category } from './components/category/category';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { CourseDetails } from './components/course-details/course-details';
import { Login } from './components/login/login';
import { authGuardGuard } from './guards/auth-guard-guard';
import { OrderTraker } from './components/order-traker/order-traker';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home page' },
  { path: 'order', component: Category, title: 'Order page' ,canActivate:[authGuardGuard]},
  { path: 'about-us', component: AboutUs, title: 'About-Us page' },
  { path: 'contact-us', component: ContactUs, title: 'Contact-Us page' },
  {path:'details/:id',component:CourseDetails},

  {path:'login',component:Login},
  {path:'order-tracker',component:OrderTraker},
  {path:'**',component:NotFound,title:'Not Found Page'}
];
