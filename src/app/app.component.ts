import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nav-routerlink';
  @ViewChild(NgbNav, {static: true})
  ngbNav!: NgbNav;
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
        console.log(this.route.url);
        this.route?.firstChild?.url.subscribe((url) => {
          const urlPath = url[url.length - 1]?.path;
          this.ngbNav.select(urlPath);
        });
  }
}
