import { useEffect, useState } from "react";
import { mockFetch } from "./DataCacheProvider";

/**
 * 1) Render-Props version (your existing pattern)
 */
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // When url changes, reset so the UI can show "Pending..." again
    setData(null);

    async function fetchData() {
      const result = await mockFetch(url);

      if (isMounted) {
        setData(result);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return render(data);
}

export default DataFetcher;
