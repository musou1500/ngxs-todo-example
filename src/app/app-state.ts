import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Task } from "./models";
import { TodoService } from "./services/todo-service";

export class FindAllTasks {
  static readonly type = "[Tasks] FindAll";
}

export class AddTask {
  static readonly type = "[Tasks] AddTask";
  constructor(public title: string) {}
}

export class DoneTask {
  static readonly type = "[Tasks] DoneTask";
  constructor(public taskId: number) {}
}


export interface TasksStateModel {
  tasks: Task[];
}

@State<TasksStateModel>({
  name: "tasks",
  defaults: {
    tasks: []
  }
})
export class TasksState {
  constructor(public todoService: TodoService) {}
  @Selector()
  static getTasks(state: TasksStateModel) {
    return state.tasks;
  }

  @Action(FindAllTasks)
  async findAllTasks(ctx: StateContext<TasksStateModel>) {
    const tasks = await this.todoService.findAll();
    ctx.patchState({ tasks });
  }

  @Action(DoneTask)
  async doneTask(ctx: StateContext<TasksStateModel>, doneTaskAction: DoneTask) {
    await this.todoService.done(doneTaskAction.taskId);
    ctx.patchState({
      tasks: ctx.getState().tasks.map(t => t.id === doneTaskAction.taskId ? { ...t, done: true } : t)
    });
  }

  @Action(AddTask)
  async addTask(ctx: StateContext<TasksStateModel>, addTaskAction: AddTask) {
    const task = await this.todoService.add(addTaskAction.title);
    console.log(task, ctx.getState().tasks);
    ctx.patchState({
      tasks: [
        ...ctx.getState().tasks,
        task
      ]
    });
  }

}