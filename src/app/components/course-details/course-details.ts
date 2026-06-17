import {  Component, inject, OnInit, signal } from '@angular/core';
import { CouseService } from '../../services/couse-service';
import { ICourses } from '../../models/icourses';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  private courseService = inject(CouseService);
  private activeRoute = inject(ActivatedRoute);

  id: number = 0;
  course = signal<ICourses | null>(null);

  ngOnInit(): void {
    this.id = +this.activeRoute.snapshot.params['id'];
    this.course.set(this.courseService.getCourseByCourseId(this.id));
  }
}
