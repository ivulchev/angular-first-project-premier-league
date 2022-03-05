import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { ResultsComponent } from './components/results/results.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'details/:id', component: DetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
