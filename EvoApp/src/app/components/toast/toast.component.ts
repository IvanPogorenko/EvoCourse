import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IFeedBackMsg} from "../../interfaces/IFeedBackMsg";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges{
  @Input() content!: IFeedBackMsg | null

  public show = false

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content'] && this.content) {
      this.show = true;

      setTimeout(() => {
        this.show = false;
        this.content = null;
      }, 5000);
    }
  }
}
