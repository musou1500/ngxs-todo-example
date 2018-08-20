import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from './app.component';
import { TaskList } from './components/task-list';
import { TodoService } from './services/todo-service';
import { TasksState } from './app-state';
import { FormsModule } from "@angular/forms";
import { TaskForm } from './components/task-form';

@NgModule({
  declarations: [
    AppComponent,
    TaskList,
    TaskForm
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TasksState
    ]),
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
