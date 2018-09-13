export const INCREMENT_SPEED = 'INCREMENT_SPEED';
export const DECREMENT_SPEED = 'DECREMENT_SPEED';
export const INCREMENT_TEMP = 'INCREMENT_TEMP';
export const DECREMENT_TEMP = 'DECREMENT_TEMP';
export const GET_INITIAL_STATS = 'GET_INITIAL_STATS';

export function getCarStats(payload) {
  return {
    type: INCREMENT_SPEED,
    payload
  };
}

export function getInitialStats() {
  return {
    type: GET_INITIAL_STATS
  };
}
