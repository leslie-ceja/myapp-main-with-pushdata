import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {//NEW ADDITION HERE!
    path: 'home/:id',
    resolve:{
      myData: ResolverService
    },
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'newaccount',
    loadChildren: () => import('./newaccount/newaccount.module').then( m => m.NewaccountPageModule)
  },
  {
    path: 'newlist',
    loadChildren: () => import('./newlist/newlist.module').then( m => m.NewlistPageModule)
  },
  {
    path: 'listview',
    loadChildren: () => import('./listview/listview.module').then( m => m.ListviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
