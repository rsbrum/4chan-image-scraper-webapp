import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewsComponent } from './views.component';
import { ScraperComponent } from './scraper/scraper.component';

const routes: Routes = [{
  path: '',
  component: ViewsComponent,
  children: [{
    path: '',
    component: ScraperComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
