import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, {
  fetchRocketsData,
  reserveRocket,
  cancelReserveRocket,
} from '../redux/rockets/rocketsSlice';

describe('rocketsSlice', () => {
  let store;

  beforeEach(async () => {
    store = configureStore({
      reducer: {
        rockets: rocketsReducer,
      },
    });

    await store.dispatch(fetchRocketsData());
  });

  it('should handle fetching rockets data successfully', () => {
    const state = store.getState().rockets;
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('');
    expect(state.data.length).toBeGreaterThan(0);
  });

  it('should handle fetching rockets data failure', async () => {
    const invalidUrl = 'https://api.spacexdata.com/v3/invalid-url';
    try {
      await store.dispatch(fetchRocketsData(invalidUrl));
    } catch (error) {
      const state = store.getState().rockets;
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Network Error');
    }
  });

  it('should reserve a rocket', () => {
    const stateBefore = store.getState().rockets;
    const rocketIdToReserve = stateBefore.data[0].id;
    store.dispatch(reserveRocket(rocketIdToReserve));

    const stateAfter = store.getState().rockets;

    const reservedRocket = stateAfter.data.find(
      (rocket) => rocket.id === rocketIdToReserve,
    );

    expect(reservedRocket.reserved).toBe(true);
    expect(stateAfter.joinedRockets).toContain(rocketIdToReserve);
  });

  it('should cancel reservation of a rocket', () => {
    const stateBefore = store.getState().rockets;
    const rocketIdToCancel = stateBefore.data[0].id;

    store.dispatch(cancelReserveRocket(rocketIdToCancel));

    const stateAfter = store.getState().rockets;
    const canceledRocket = stateAfter.data.find(
      (rocket) => rocket.id === rocketIdToCancel,
    );
    expect(canceledRocket.reserved).toBe(false);
    expect(stateAfter.joinedRockets).not.toContain(rocketIdToCancel);
  });
});
