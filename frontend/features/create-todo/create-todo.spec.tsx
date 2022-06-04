import { render, screen } from '@testing-library/react';
import { CreateTodo } from './create-todo';

describe('CreateTodo', () => {
  it('Should add new todo to the list', () => {
    // Steps:
    /*
      Arrange
      1. render CreateTodo.
      2. reference document input 
      3. reference document ADD button 
      4. save bottom screen Left To Do number

      Act
      5. enter any input (new todo) with user.type from user-event react testing library
      6. click ADD button

      Assert
      7. check if bottom screen Left To Do number is plus 1 bigger
    */
  });
});
