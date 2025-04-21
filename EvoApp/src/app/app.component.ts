import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngxs/store";
import {TodoState} from "../store/todo.state";
import {ITask} from "./interfaces/ITask";
import {AddTask, DeleteTask, UpdateTaskCompleted} from "../store/model/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private _store: Store
  ) {
  }

  @ViewChild('taskName') taskName!: ElementRef

  public todoList: ITask[] = []

  ngOnInit() {
    this._store.select(TodoState.getTodoList).subscribe({
      next: value => {
        this.todoList = value
      }
    })
  }

  public addTask(){
    let newId = 0
    if (this.todoList.length > 0){
      newId = this.todoList.reduce((max, task) => task.id > max.id ? task : max).id + 1
    }
    this._store.dispatch(
      new AddTask({
        id: newId,
        title: this.taskName.nativeElement.value,
        completed: false
      })
    )
    this.taskName.nativeElement.value = ''
  }

  public taskCompleted(task: ITask){
    this._store.dispatch(
      new UpdateTaskCompleted({
        ...task,
        completed: !task.completed
      })
    )
  }

  public deleteTask(task: ITask){
    this._store.dispatch(
      new DeleteTask(task)
    )
  }

}
