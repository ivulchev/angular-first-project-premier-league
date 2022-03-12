import { Component, OnInit } from '@angular/core';

import { Fixture } from '../../interfaces/fixture';
import { FixtureService } from '../../services/fixture.service';

@Component({
  selector: 'app-tables',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture[] = [];

  constructor(private fixtureService: FixtureService) { }

  ngOnInit(): void {
    this.getFixtures();
  }

  getFixtures(): void {
    this.fixtureService.getFixtures()
    .subscribe(fixtures => this.fixtures = fixtures);
  }

}
