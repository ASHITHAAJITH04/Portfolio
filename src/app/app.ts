import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { Resume } from './resume/resume';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, Resume],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
