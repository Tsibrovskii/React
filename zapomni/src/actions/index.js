import events from '../apis/events';
import {
  FETCH_TOKEN,
  FETCH_EVENTS
} from './types';

export const fetchToken = () => async dispatch => {
  const response = await events.get('/settings');

  dispatch({ type: FETCH_TOKEN, payload: response.headers && response.headers['x-auth-token'] });
  dispatch(fetchEvents());
};

export const fetchEvents = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const response = await events.get('/nearest_events_by_date?date=2020-08-01&date_interval=120',
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );
  const sorted = response.data.sort((a, b) => a.valueOf() - b.valueOf());
  dispatch({ type: FETCH_EVENTS, payload: sorted });
}