import { Task } from "../models";

export class TodoService {
  private mockData: Task[] = [
    {
      id: 1,
      title: "Learn ngrx",
      done: false
    },
    {
      id: 2,
      title: "Learn Dart",
      done: false
    },
    {
      id: 3,
      title: "move ionic v1 into ionic v2",
      done: false
    }
  ];

  async findAll() {
    return [...this.mockData];
  }

  async add(title: string) {
    const taskToAdd = {
      title,
      done: false,
      id: this.mockData[this.mockData.length - 1].id + 1
    };
    this.mockData.push(taskToAdd);
    return taskToAdd;
  }

  async done(taskId: number) {
    for (let task of this.mockData) {
      if (task.id === taskId) {
        task.done = true;
        return;
      }
    }

    return;
  }

  async remove(taskId: number) {
    const taskIdx = this.mockData.findIndex(task => task.id === taskId);
    if (taskIdx > -1) {
      this.mockData.splice(taskIdx, 1);
    }
  }
}