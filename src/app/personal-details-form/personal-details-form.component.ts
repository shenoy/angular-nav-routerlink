import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  url:any;

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.route.url.pipe(map(x=>x[0].path)).subscribe(x=>this.url=x);
      console.log(this.url);
    });
  }

}
