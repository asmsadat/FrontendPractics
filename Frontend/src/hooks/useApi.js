import { useState } from "react";
import axios from "axios";

const useApi = (method, initialUrl = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (payload = null, overrideUrl = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url: overrideUrl || initialUrl,
        data: payload,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
};

export default useApi;
