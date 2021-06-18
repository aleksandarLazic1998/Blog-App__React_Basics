import { useEffect, useState } from "react";

const useFetch = (url) => {
  // Data that was hardcoded for the purpose of refacturing it later with database
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  // To get the data first deploy database with fake API JSON Server
  useEffect(() => {
    // To Control data that is rendering to the page to stop the React rendering crash
    const controller = new AbortController();
    const { signal } = controller.signal;

    fetch(url, { signal })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Bad request!!!");
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setData(null);
        setLoading(false);
        setError(err.message);
      });

    return controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
