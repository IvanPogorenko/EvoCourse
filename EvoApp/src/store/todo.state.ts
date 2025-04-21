import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddTask, DeleteTask, TodoModel, UpdateTaskCompleted} from "./model/todo.model";
import {Injectable} from "@angular/core";
import {ConsoleLogger} from "@angular/compiler-cli";

@State<TodoModel>({
  name: "Task",
  defaults: {
    tasks: []
  }
})

@Injectable()
export class TodoState{
  @Selector()
  static getTodoList(state: TodoModel){
    return state.tasks
  }

  @Action(AddTask)
  public updateTodoList(ctx: StateContext<TodoModel>, action: AddTask){
    const state = ctx.getState()
    state.tasks.push({
      id: action.payload.id,
      title: action.payload.title,
      completed: action.payload.completed
    })
    ctx.patchState(state)
  }

  @Action(UpdateTaskCompleted)
  public updateTaskCompleted(ctx: StateContext<TodoModel>, action: UpdateTaskCompleted) {
    const state = ctx.getState()
    const newTasks = state.tasks.map(task =>
      task.id === action.payload.id ? action.payload : task
    )
    ctx.patchState({tasks: newTasks})
  }

  @Action(DeleteTask)
  public deleteTask(ctx: StateContext<TodoModel>, action: DeleteTask){
    const state = ctx.getState()
    const newTasks = state.tasks.filter(task => task.id !== action.payload.id)
    ctx.patchState({tasks: newTasks})
  }
}
