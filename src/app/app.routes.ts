import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Resume } from './resume/resume';

export const routes: Routes = [
    {path:'', component:Hero},
    {path:'resume', component:Resume}
];
