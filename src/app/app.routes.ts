import { Routes } from '@angular/router';
import { Home } from './pages/home/home';


export const routes: Routes = [
    { path: '', component: Home },
  // Redirect any other path to the home page
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
