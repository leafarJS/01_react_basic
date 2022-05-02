import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw {
            err: true,
            status: response.status,
            statusText: !response.statusText
              ? "Error: 404 Page not found, Ocurrío un error"
              : response.statusText,
          };
        }
        let dataJson = await response.json();

        setIsPending(false);
        setData(dataJson);
        setErr({ err: false });
      } catch (err) {
        setIsPending(true);
        setErr(err);
      }
    };
    getData(url);
  }, [url]);
  return { data, isPending, err };
};
