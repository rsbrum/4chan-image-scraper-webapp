import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ScraperComponent } from './scraper/scraper.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';


const VIEWS = [
    ViewsComponent,
    ScraperComponent
];

@NgModule({
  imports: [
    ViewsRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    CommonModule

],
  declarations: [
    ...VIEWS
  ],
})
export class ViewsModule {
}
