import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {BoardmenuService} from './boardmenu.service';

@Injectable()
export class BoardmenuResolve implements Resolve<any> {
  constructor(private boardmenuService: BoardmenuService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.boardmenuService.readBoardMenu(route.params);
  }
}
