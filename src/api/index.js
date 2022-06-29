import queryString from "query-string";
import config from '../config';
/**
 *
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.inc
 * @param {string} options.gender
 *
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    results: config.DEFAULT_AMOUNT,
    page: 1,
    seed: config.API_KEY,
    nat: config.DEFAULT_NAT,
    inc:'login,gender,name,nat',
    gender:'male'
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
  return fetch(
    `${config.BASE_URL}/?${queryString.stringify(finallyOptions)}`
  ).then((response) => response.json());
};

