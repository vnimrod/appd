import { render, screen } from '@testing-library/react';
import { CreatedAt } from './created-at';

describe('CreatedAt', () => {
  it('should check if date form 2022-06-02T15:33:45.440Z is displayed on the screen as 2.6.2022', () => {
    // Steps:
    /*
      Arrange
      1. render CreatedAt.
      2. save date string to variable - 2022-06-02T15:33:45.440Z

      Act
      3. run dateFormat function

      Assert
      4. expect data returned from the function to be equal 2.6.2022
    */
  });
});
