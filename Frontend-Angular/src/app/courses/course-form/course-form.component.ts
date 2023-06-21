import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../services/courses.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Course } from "../models/course";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent {
  form: FormGroup;

  private course: Course = this.route.snapshot.data["course"];

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      _id: [""],
      name: [""],
      category: [""],
    });
    this.form.setValue({
      _id: this.course._id,
      name: this.course.name,
      category: this.course.category,
    });
  }
  onSubmit() {
    if (
      this.form.get("name")?.value != "" &&
      this.form.get("category")?.value != ""
    ) {
      this.service.AddCourse(this.form.value).subscribe({
        error: () => this.OnError(),
        complete: () => this.OnSuccess(),
      });
    } else this.OnError();
  }
  OnSuccess() {
    setTimeout(() => this.onBack(), 1500);
    return this._snackBar.open("Saving Sucess", "", {
      duration: 1500,
    });
  }
  OnError() {
    return this._snackBar.open("Saving Error", "Ok");
  }
  onBack() {
    this.router.navigate(["/"], { relativeTo: this.route });
  }
}
