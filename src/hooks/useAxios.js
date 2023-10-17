import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";

function useAxios(url, config) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(url, config);
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
