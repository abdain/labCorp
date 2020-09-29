import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todosState from './todos.reducer';

export const todosSelector = createFeatureSelector<todosState.ITodosState>('todos');
export const todos = createSelector(
  todosSelector,
  todosState.todos,
);


export const alltodos = createSelector(
  todosSelector,
  todosState.allTodos,
);


export const filtersModes = createSelector(
  todosSelector,
  todosState.filterMode
);