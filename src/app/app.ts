import { Component, signal } from '@angular/core';


import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Courses } from "./components/courses/courses";

@Component({
  selector: 'app-root',
  imports: [ Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
