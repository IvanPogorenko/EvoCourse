import {Component, OnInit} from '@angular/core';
import {FooterMsgStateService} from "../../services/footer-msg-state.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor(
    private _footerMsgService: FooterMsgStateService
  ) {
  }

  public isShowing!: Boolean

  ngOnInit() {
    this._footerMsgService.observeMsg$.subscribe({
      next: value => {
        this.isShowing = value.isShowing
      }
    })
  }

}
