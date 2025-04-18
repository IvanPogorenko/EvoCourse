import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef})
  private container!: ViewContainerRef
  private componentRef!: ComponentRef<TableComponent>

  public addComponent(){
    this.deleteComponent()
    this.componentRef = this.container.createComponent(TableComponent)
  }

  public deleteComponent(){
    this.container.clear()
  }

}
