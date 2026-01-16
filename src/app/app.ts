import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderSectionComponent } from '../home/header-section/header-section';
import { FooterSectionComponent } from '../home/footer-section/footer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent, FooterSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-blog');
}
