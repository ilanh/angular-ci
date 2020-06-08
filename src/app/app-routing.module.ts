import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealmComponent } from './realm/realm.component';
import { RealmDetailComponent } from './realm-detail/realm-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'realms', component: RealmComponent },
  { path: 'detail/:id', component: RealmDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
