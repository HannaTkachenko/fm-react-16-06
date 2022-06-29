export const getUsers = (pageNum) => {
  return fetch(
    `https://randomuser.me/api/?results=15&page=${pageNum}&seed=users&nat=gb`
  ).then((response) => response.json());
};

