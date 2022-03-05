import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { FixturesComponent } from './fixtures/fixtures.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'fixtures', component: FixturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
