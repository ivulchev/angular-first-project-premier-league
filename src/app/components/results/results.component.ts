import { Component, OnInit } from '@angular/core';

import { Results } from '../../interfaces/results';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-tables',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Results[] = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    this.resultsService.getResults()
    .subscribe(results => this.results = results);
  }

}
