import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Task } from './models';
import { Store, Select } from '@ngxs/store';
import { TasksState, FindAllTasks, AddTask, DoneTask } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public store: Store) {}

  @Select(TasksState.getTasks)
  tasks$: Observable<Task[]>;

  ngOnInit() {
    this.store.dispatch(new FindAllTasks());
  }

  add(title: string) {
    this.store.dispatch(new AddTask(title));
  }

  done(taskId: number) {
    this.store.dispatch(new DoneTask(taskId));
  }
}
