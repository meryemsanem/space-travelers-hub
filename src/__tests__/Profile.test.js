import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../pages/Profile';

const mockStore = configureStore([]);

test('renders Profile correctly', () => {
  const store = mockStore({
    missions: {
      missions: [
        { id: 1, name: 'Mission 1' },
        { id: 2, name: 'Mission 2' },
      ],
      joinedMissions: [1],
    },
    rockets: {
      data: [
        { id: 1, name: 'Rocket 1' },
        { id: 2, name: 'Rocket 2' },
      ],
      joinedRockets: [2],
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
