import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ErrorComponent } from './shared/error/error.component';
// import { AdminComponent } from './feature/admin/admin.component';
// import { AdminModule } from './feature/admin/admin.module';

const routes: Routes = [
  // { path: '', component: CoreComponent },
  { path: '', loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)},
  // { path: 'admin', component: AdminComponent },
  // { path: 'buyer', component: AdminComponent },
  // { path: 'financer', component: AdminComponent },
  // { path: 'logistics', component: AdminComponent },
  // { path: 'seller', component: AdminComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
