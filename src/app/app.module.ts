import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ClassesComponent } from './classes/classes.component';
import { DefinitionComponent } from './definition/definition.component';
import { SearchComponent } from './search/search.component';
import { InterceptorService } from './services/interceptor.service';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  { path: '**', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    SearchComponent,
    CardComponent,
    ClassesComponent
  ],
  imports: [
    // RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // --
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
