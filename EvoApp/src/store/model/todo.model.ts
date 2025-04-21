import {ITask} from "../../app/interfaces/ITask";

export interface TodoModel{
  tasks: ITask[]
}

export class AddTask {
  static readonly type = '[Todo] Add Task';
  constructor(public payload: ITask) {}
}

export class UpdateTaskCompleted {
  static readonly type = '[Todo] Update Task Completed';
  constructor(public payload: ITask) {}
}

export class DeleteTask {
  static readonly type = '[Todo] Delete Task';
  constructor(public payload: ITask) {}
}
