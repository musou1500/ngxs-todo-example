import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../models";

@Component({
  selector: "task-list",
  templateUrl: "./task-list.html"
})
export class TaskList {
  @Input()
  tasks: Task[] = [];

  @Output()
  done: EventEmitter<number> = new EventEmitter();
}