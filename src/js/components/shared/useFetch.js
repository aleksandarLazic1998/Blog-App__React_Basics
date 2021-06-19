import { useEffect, useState } from "react";

const useFetch = (url) => {
  // Data that we receive from API, Loading Data, Sending Error if something went wrong
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  // Change the page based on item in Data Base with useEffect
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
