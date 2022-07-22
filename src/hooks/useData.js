import { useState, useEffect } from 'react';

export default function useData(getItemsJSON) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    getItemsJSON()
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  }, []);

  return {
    items,
    error,
    isFetching
  }
}