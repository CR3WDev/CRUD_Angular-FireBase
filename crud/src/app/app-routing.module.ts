import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/acoes/dashboard/dashboard.component';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/acoes/list/list.module').then(m => m.ListModule) }, { path: 'novo', loadChildren: () => import('./pages/acoes/novo/novo.module').then(m => m.NovoModule) }, { path: 'details', loadChildren: () => import('./pages/acoes/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/acoes/edit/edit.module').then(m => m.EditModule) },
{path: 'dashboard', loadChildren: () => import('./pages/acoes/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
