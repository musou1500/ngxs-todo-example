import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "../models";

@Component({
  selector: "task-form",
  templateUrl: "./task-form.html"
})
export class TaskForm {
  title: string;

  @Output()
  submit: EventEmitter<string> = new EventEmitter();

  clearAndSubmit(title: string) {
    this.title = '';
    this.submit.emit(title);
  }
}