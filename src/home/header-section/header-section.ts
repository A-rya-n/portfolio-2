import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'header-section',
  templateUrl: './header-section.html',
  styleUrl: './header-section.scss',
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderSectionComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Current navigation is: ', event.url);
      });
  }
}
