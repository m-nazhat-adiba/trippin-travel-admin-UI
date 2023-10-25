import { useState, useEffect } from "react";

function useAxios(method, url, payload, config) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await method(url, payload, config);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [url]);

  return { data, loading, error };
}

export default useAxios;
