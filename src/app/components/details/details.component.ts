import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Details } from '../../details';
import { DetailsService } from '../../services/details.service';
import { Coach } from 'src/app/coach';
import { Players } from 'src/app/players';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  team: Details | undefined;
  coach: Coach | undefined;
  players: Players | undefined;

  constructor(private route: ActivatedRoute,
    private teamService: DetailsService,
    private location: Location) { }

    ngOnInit(): void {
      this.getTeam();
      this.getCoach();
      this.getPlayers();
    }
  
    getTeam(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.teamService.getTeam(id)
        .subscribe(team => this.team = team);
        
    }
    getCoach(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.teamService.getCoach(id)
        .subscribe(coach => this.coach = coach);
    }

    getPlayers(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.teamService.getPlayers(id)
        .subscribe(players => this.players = players)

    }
  
    goBack(): void {
      this.location.back();
    }
  
    // save(): void {
    //   if (this.team) {
    //     this.teamService.updateTeam(this.team)
    //       .subscribe(() => this.goBack());
    //   }
    // }
}
