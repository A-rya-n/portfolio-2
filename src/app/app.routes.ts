import { Routes } from '@angular/router';

import { LandingPageComponent } from '../home/landing-page/landing-page';
import { ProjectsMainComponent } from '../projects/projects-main/projects-main';
import { EssaysMainComponent } from '../essays/essays-main/essays-main';
import { AboutMainComponent } from '../about/about-main/about-main';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingPageComponent,
    title: 'Aryan Purohit | Home',
  },
  {
    path: 'projects',
    component: ProjectsMainComponent,
    title: 'Aryan Purohit | Projects',
  },
  {
    path: 'essays',
    component: EssaysMainComponent,
    title: 'Aryan Purohit | Essays',
  },
  {
    path: 'about',
    component: AboutMainComponent,
    title: 'Aryan Purohit | About this',
  },
];
