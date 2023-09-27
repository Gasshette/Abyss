import { Deep } from '../Models/deep';
import * as api from './constants';

let getDeepsController = new AbortController();
let postController = new AbortController();
let putController = new AbortController();
let deleteController = new AbortController();

/**
 * Get all deeps
 * @returns all deeps
 */
export const getDeeps = async (): Promise<Array<Deep>> => {
  getDeepsController.abort();

  getDeepsController = new AbortController();
  const getDeepdsSignal = getDeepsController.signal;

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
  postController.abort();

  postController = new AbortController();
  const postSignal = postController.signal;

  await fetch(`${api.BASE_URL}${api.GET_DEEPS}`, {
    signal: postSignal,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deep),
  });
};

/**
 * Put a deep
 */
export const put = async (deep: Deep) => {
  putController.abort();

  putController = new AbortController();
  const putSignal = postController.signal;

  await fetch(`${api.BASE_URL}${api.GET_DEEPS}`, {
    signal: putSignal,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deep),
  });
};

/**
 * Delete a deep
 */
export const remove = async (id: number) => {
  deleteController.abort();

  deleteController = new AbortController();
  const deleteSignal = postController.signal;

  await fetch(`${api.BASE_URL}${api.GET_DEEPS}/${id}`, {
    signal: deleteSignal,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};
