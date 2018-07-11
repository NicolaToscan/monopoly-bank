import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/_index';
import { SharedDataService } from '../../services/shared-data.service';
import { List } from 'linqts';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.less']
})
export class PlayerInfoComponent implements OnInit {

  players: List<Player>;
  _player: Player
  @Input()
  set player(player: Player) {
    if (player) {
      this.players = this.shareDataService.Players.Where(p => p.index != player.index);
    }
    this._player = player;
  }
  get player(): Player {
    return this._player;
  }


  constructor(public shareDataService: SharedDataService) {
  }
  
  ngOnInit() {
  }


}
