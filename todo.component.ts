import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

interface ITodo {
  complete: boolean;
  content: String;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ITodo> = [];

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        content: value,
        complete: false
    };
      this.todos.push(todo);
    }
  }
  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
