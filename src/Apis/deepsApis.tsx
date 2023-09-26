import { Deep } from '../Models/deep';
import * as api from './constants';

const getDeepsController = new AbortController();
const getDeepdsSignal = getDeepsController.signal;

/**
 * Get all deeps
 * @returns all deeps
 */
export const getDeeps = async (): Promise<Array<Deep>> => {
  const res = await fetch(`${api.BASE_URL}${api.GET_DEEPS}`, { method: 'GET', signal: getDeepdsSignal });
  if (res.ok) {
    return await res.json();
  }

  throw new Error(`${res.status}: ${res.statusText}`);
};

/**
 * Post a deep
 */
export const post = async (deep: Deep) => {
  await fetch(`${api.BASE_URL}${api.GET_DEEPS}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(deep),
  });
};

/**
 * Put a deep
 */
export const put = async (deep: Deep) => {
  await fetch(`${api.BASE_URL}${api.GET_DEEPS}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(deep),
  });
};
