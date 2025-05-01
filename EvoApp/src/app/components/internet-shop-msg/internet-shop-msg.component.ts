import { Component } from '@angular/core';
import {FooterMsgStateService} from "../../services/footer-msg-state.service";

@Component({
  selector: 'app-internet-shop-msg',
  templateUrl: './internet-shop-msg.component.html',
  styleUrls: ['./internet-shop-msg.component.scss']
})
export class InternetShopMsgComponent {

  constructor(
    private _msgService: FooterMsgStateService
  ) {
  }

  public onClose(){
    this._msgService.updateState()
  }

}
