import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: 'cv',
    component: CvComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { path: '',
    redirectTo: '/cv',
    pathMatch: 'full'
  },
  { path: '**',  redirectTo: '' }
  // { path: '**', component: PageNotFoundComponent } TODO 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
