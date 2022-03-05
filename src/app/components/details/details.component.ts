import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Details } from '../../details';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  team: Details | undefined;

  constructor(private route: ActivatedRoute,
    private teamService: DetailsService,
    private location: Location) { }

    ngOnInit(): void {
      this.getTeam();
      console.log(this.team)
    }
  
    getTeam(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.teamService.getTeam(id)
        .subscribe(team => this.team = team);
        
    }
  
    goBack(): void {
      this.location.back();
    }
  
    save(): void {
      if (this.team) {
        this.teamService.updateTeam(this.team)
          .subscribe(() => this.goBack());
      }
    }
}
