import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodosService } from './todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  todoForm: FormGroup;
  filters = this.todoService.filtersMode$;
  leftTasks = [];
  alltodos = [];
  constructor(private todoService: TodosService) {

  }


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      task: new FormControl('')
    });

    this.todoService.allTodos$.subscribe(todos => {
      this.alltodos = todos;
      this.leftTasks = todos.filter(todo => !todo.completed);
    });
  }

  onEnteKey() {
    const fieldvalue = this.todoForm.get('task').value;
    if (fieldvalue) {
      this.todoService.addTodo(fieldvalue);
      this.todoForm.get('task').setValue('');
    }
  }

  onClearCompleted() {
    this.todoService.clearCompleted();
  }

  onChangeFilter(e, mode) {
    this.todoService.changeFilterMode(mode);
  }


}
