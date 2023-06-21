import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Course } from "../models/course";
import { first } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private readonly API = "/api/courses";

  constructor(private httpClient: HttpClient) {}

  FindCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }

  AddCourse(course: Course) {
    if (course._id) {
      return this.Update(course);
    } else {
      return this.Create(course);
    }
  }

  Delete(course: Course) {
    return this.httpClient.delete(`${this.API}/${course._id}`);
  }

  LoadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }
  private Create(course: Partial<Course>) {
    return this.httpClient.post<Course[]>(this.API, course);
  }
  private Update(course: Partial<Course>) {
    return this.httpClient.put<Course[]>(`${this.API}/${course._id}`, course);
  }
}
