import { allTodos, filterMode, initialState, ITodosState, todos, todosReducer } from './todos.reducer';
import { ITodo } from './../interfaces';
import * as TodoActions from './todo.actions';

import { clone } from '@app/lib/utils';

describe('Todos Reducer', () => {
  let state: ITodosState;

  beforeEach(() => {
    state = clone(initialState);
    expect(state).toEqual(initialState);
  });

  describe('Add Todo', () => {
    it('Should add a new Todo', () => {
      const text = 'New todo';
      const todo: ITodo = {
        text,
        completed: false,
      };

      const newState = todosReducer(state, TodoActions.addTodo({ text }));
      expect(newState.todos).toEqual([todo]);
    });
  });

  describe('Remove Todo', () => {
    it('should remove a Todo', () => {
      const text1 = 'Todo 1';
      const todo1: ITodo = {
        text: text1,
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ text: text1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ text: 'Todo 2' }));
      newState = todosReducer(newState, TodoActions.removeTodo({ index: 0 }));
      expect(newState.todos).toEqual([todo1]);
    });
  });
  
  describe('Update Todo', () => {
    it('should update a Todo', () => {
      const text1 = 'Todo 1';
      const todo1: ITodo = {
        text: text1,
        completed: false,
      };
      const text2 = 'Todo 2';
      const todo2: ITodo = {
        text: text2,
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ text: text1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ text: 'Todo 2' }));
      newState = todosReducer(newState, TodoActions.changeFilterMode({ mode: 'All' }));
      expect(newState.todos).toEqual([todo2, todo1]);
    });
  });
  
  describe('toggleCompleted', () => {
    it('should toggle a Todo', () => {
      const text1 = 'Todo 1';
      const todo1: ITodo = {
        text: text1,
        completed: false,
      };
      const text2 = 'Todo 2';
      const todo2: ITodo = {
        text: text2,
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ text: text1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ text: 'Todo 2' }));
      newState = todosReducer(newState, TodoActions.toggleCompleted({ index: 0 }));
      expect(newState.todos).toEqual([{text: text2, completed: true}, todo1]);
    });
  });

  describe('updateTodo', () => {
    it('should toggle a Todo', () => {
      const text1 = 'Todo 1';
      const todo1: ITodo = {
        text: text1,
        completed: false,
      };
      const text2 = 'Todo 2';
      const todo2: ITodo = {
        text: text2,
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ text: text1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ text: 'Todo 2' }));
      expect(todosReducer(newState, TodoActions.updateTodo({ index: 0, text: '' })).todos)
      .toEqual([{text: text1, completed: false}]);
      expect(todosReducer(newState, TodoActions.updateTodo({ index: 0, text: 'Todo 3' })).todos)
      .toEqual([{text: 'Todo 3', completed: false, editing: false}, {text: 'Todo 1', completed: false}]);
    });
  });
  describe('clearCompleted', () => {
    it('should clear the completed Todo', () => {
      const text1 = 'Todo 1';
      const todo1: ITodo = {
        text: text1,
        completed: false,
      };
      const text2 = 'Todo 2';
      const todo2: ITodo = {
        text: text2,
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ text: text1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ text: 'Todo 2' }));
      newState = todosReducer(newState, TodoActions.toggleCompleted({ index: 1 }));
      expect(todosReducer(newState, TodoActions.clearCompleted()).todos)
      .toEqual([{text: 'Todo 2', completed: false}]);
    });      
  });

  describe('filterMode', () => {
    it('should get filterMode from the state', () => {
      let stateFilterMode = filterMode(state);
      expect(stateFilterMode).toEqual('All');
    });
  })

  describe('get todos', () => {
    it('should get todos from the state', () => {
      let stateTodos = todos(state);
      expect(stateTodos).toEqual(state.todos);
    });
  })

  describe('allTodos', () => {
    it('should get all todos from the state', () => {
      let stateAllTofos = allTodos(state);
      expect(stateAllTofos).toEqual(state.allTodos);
    });
  })
});
