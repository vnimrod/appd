import { render, screen } from '@testing-library/react';
import { TodoCard } from './todo-card';

describe('TodoCard', () => {
  it('Should display input on edit button clicked', () => {
    // Steps:
    /*
      Arrange
      1. render TodoCard.
      2. reference document edit button 

      Act
      3. click edit button

      Assert
      4. expect edit todo input to be displayed on the screen (by data-testid or maybe class) 
    */
  });

  it('Should send fake request with editData, completed property - true, on check button clicked', () => {
    // Steps:
    /*
      Arrange
      1. render TodoCard.
      2. reference document edit button 
      3. reference document completed button 
      4. reference document check button 
      5. save fake update function fake request 
      6. create editData object

      Act
      7. click edit button
      8. click completed button
      9. click check button

      Assert
      10. expect editData to be with completed true and that the data was sent.
    */
  });

  // a lot more can be checked. Also need to check when data is incorrect etc.
});
