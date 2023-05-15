import React from 'react';
import { render } from '@testing-library/react';
import Recycler from './Recycler';
import { getMockRecycler } from '../mocks/mockRecycler';

describe('Recycler component', () => {

  it('should render the component and show recycler data', () => {
    const mockRecycler = getMockRecycler();

    const { getByText } = render(<Recycler {...mockRecycler} />);
    expect(getByText(mockRecycler.company)).toBeInTheDocument();
  });
});
