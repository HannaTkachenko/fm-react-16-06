import queryString from "query-string";
/**
 *
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.gender
 *
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    results: 5,
    page: 1,
    seed: "users",
    nat: "gb",
    inc:'login,gender,name,nat',
    gender:'male'
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
console.log(queryString.stringify(finallyOptions))
  return fetch(
    `https://randomuser.me/api/?${queryString.stringify(finallyOptions)}`
  ).then((response) => response.json());
};

