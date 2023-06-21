import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent,
    ErrorDialogComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule],
})
export class CoursesModule {}
