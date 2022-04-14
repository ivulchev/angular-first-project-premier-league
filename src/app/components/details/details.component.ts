import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Details } from '../../interfaces/details';
import { DetailsService } from '../../services/details.service';
import { Coach } from 'src/app/interfaces/coach';
import { Players } from 'src/app/interfaces/players';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  team: Details | undefined;
  players: Players | undefined;

  constructor(private route: ActivatedRoute,
    private teamService: DetailsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTeam();
    this.getPlayers();
  }

  getTeam(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.teamService.getTeam(id)
        .subscribe(team => this.team = team);
    });
  }




  getPlayers(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.teamService.getPlayers(id)
        .subscribe(players => this.players = players)
    });
  }


  goBack(): void {
    this.location.back();
  }
}
