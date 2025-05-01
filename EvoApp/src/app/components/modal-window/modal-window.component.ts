import {Component, Input} from '@angular/core';
import {IModalMsg} from "../../interfaces/IModalMsg";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  @Input() content!: IModalMsg

}
