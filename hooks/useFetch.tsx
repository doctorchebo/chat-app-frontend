import api from "@/api/api";
import { useEffect, useState } from "react";

const useFetch = (endpoint: string, params?: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, { params });
      setData(response.data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Problem setting error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, params]);

  return { data, loading, error };
};

export default useFetch;
