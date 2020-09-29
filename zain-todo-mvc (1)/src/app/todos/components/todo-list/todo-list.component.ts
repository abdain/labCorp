import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  constructor(private todosService: TodosService) {

  }

  tasksList = this.todosService.todos$;

  onCompleteTask(i) {
    this.todosService.toggleComplete(i);
  }

  onUpdate(i, text) {
    this.todosService.updateTodo(i, text);
  }


  onClear(i) {
    this.todosService.removeTodo(i);
  }

  onEdit(i) {
    this.todosService.editTodo(i);
  }
}
