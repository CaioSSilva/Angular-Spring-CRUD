import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]> | null = null;

  visible = ['_id', 'name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.refresh();
  }
  refresh() {
    this.courses$ = this.coursesService.FindCourses().pipe(
      catchError(() => {
        this.onError('Error loading courses.');
        return of([]);
      })
    );
  }
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
