import { initializeTimes, updateTimes } from './Main';

// This block runs before each test in this file.
beforeEach(() => {
  // We are creating a fake function on the global window object
  // that our tests can control.
  window.fetchAPI = jest.fn(() => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  });
});

// Test for the initializeTimes function
describe('initializeTimes', () => {
  test('returns the correct, non-empty array of available booking times', () => {
    const times = initializeTimes();
    // We expect the function to return the exact array our mock provides.
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });
});

// Test for the updateTimes reducer function
describe('updateTimes', () => {
  test('returns the new state provided by the fetchAPI function', () => {
    const initialState = []; // The initial state is an empty array
    const action = { type: 'UPDATE_TIMES', payload: '2025-08-25' };
    
    const newState = updateTimes(initialState, action);
    
    // The reducer should return the new state from the API call,
    // which our mock has defined as a specific array.
    const expectedState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    expect(newState).toEqual(expectedState);
  });
});