import { useState, useEffect } from "react";
import { BASE_URL } from "../config/config";

const useApiCall = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefresh, setisRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}${url}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        setisRefresh(false);
      } catch (error) {
        setisRefresh(false);
        setError(error);
      } finally {
        setisRefresh(false);
        setLoading(false);
      }
    };
    if (isRefresh) {
      fetchData();
    }
  }, []);

  return { data, setData, loading, error };
};

export default useApiCall;
