import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';

export interface ITodosState {
  filterMode?: FILTER_MODES;
  todos?: ITodo[];
  allTodos?: ITodo[];
}

export const initialState: ITodosState = {
  filterMode: 'All',
  todos: [],
  allTodos: []
};


function getFilteredTodos(updatedTodos, filterMode) {
  return filterMode === 'All' ? updatedTodos : filterMode === 'Active' ?
    [...updatedTodos.filter(todo => !todo.completed)] :
    [...updatedTodos.filter(todo => todo.completed)];
}

export function todosReducer(state: ITodosState, action: Action) {
  return createReducer(
    initialState,
    on(TodoActions.addTodo, (existingState, { text }) => {
      let updatedTodos = [{ text, completed: false, id: new Date().getTime() }, ...existingState.allTodos];
      let { filterMode } = existingState;

      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),


    on(TodoActions.removeTodo, (existingState, { id }) => {
      const updatedTodos = [...existingState.allTodos];
      updatedTodos.forEach((task, i) => {
        if (task.id === id) {
          updatedTodos.splice(i, 1);
        }
      });
      let { filterMode } = existingState;


      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),
    on(TodoActions.changeFilterMode, (existingState, { mode }) => ({
      ...existingState,
      filterMode: mode,
      todos: getFilteredTodos(existingState.allTodos, mode),
    })),
    on(TodoActions.toggleCompleted, (existingState, { id }) => {
      let updatedTodos = [...existingState.allTodos];
      updatedTodos.forEach((todo, i) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
      });
      let { filterMode } = existingState;
      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),
    on(TodoActions.editTodo, (existingState, { id }) => {
      let updatedTodos = [...existingState.allTodos];
      updatedTodos.forEach((todo, i) => {
        if (id === todo.id) {
          todo.editing = true;
        }
      });
      let { filterMode } = existingState;
      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),
    on(TodoActions.updateTodo, (existingState, { id, text }) => {
      let updatedTodos = [...existingState.allTodos];
      updatedTodos.forEach((todo, i) => {
        if (id === todo.id) {
          if (text === '') {
            updatedTodos.splice(i, 1);
          } else {
            todo.text = text;
            todo.editing = false;
          }
        }
      });
      let { filterMode } = existingState;

      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),
    on(TodoActions.clearCompleted, (existingState) => {
      let updatedTodos = [...existingState.allTodos.filter(todo => !todo.completed)];
      let { filterMode } = existingState;
      return {
        ...existingState,
        todos: getFilteredTodos(updatedTodos, filterMode),
        allTodos: updatedTodos
      };
    }),
  )(state, action);
}

export const filterMode = (state: ITodosState) => state.filterMode;
export const todos = (state: ITodosState) => state.todos;
export const allTodos = (state: ITodosState) => state.allTodos;
