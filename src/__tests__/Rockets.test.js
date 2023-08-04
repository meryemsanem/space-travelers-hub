import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../pages/Rockets';

const mockStore = configureStore([thunk]);

test('renders Rockets correctly', async () => {
  const store = mockStore({
    rockets: {
      isLoading: true,
      data: [],
      error: null,
      joinedRockets: [],
    },
  });

  const mockData = [
    {
      id: 1,
      name: 'Rocket 1',
      description: 'Description 1',
      image: 'rocket1.jpg',
    },
    {
      id: 2,
      name: 'Rocket 2',
      description: 'Description 2',
      image: 'rocket2.jpg',
    },
  ];

  const { asFragment, getByText } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
