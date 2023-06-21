import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  courses$: Observable<Course[]>;
  visible = ['_id', 'name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.courses$ = this.coursesService.FindCourses().pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }
  onDelete(course: Course) {
    
    this.coursesService.Delete(course).subscribe(() => {
      this.courses$ = this.coursesService.FindCourses().pipe(
        catchError(() => {
          return of([]);
        })
      );

      return this._snackBar.open('Removed with Sucess!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
