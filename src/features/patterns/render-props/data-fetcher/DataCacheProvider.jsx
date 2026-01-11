import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const DataCacheContext = createContext(null);

export function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

export async function mockFetch(url) {
  if (url === "/desserts") return ["cake", "ice cream", "tiramisu"];
  if (url === "/drinks") return ["cola", "water", "juice"];
  return [];
}

function DataCacheProvider({ children }) {
  const [cache, setCache] = useState({});
  const [pending, setPending] = useState({}); //{ [url]: true/false }

  // Keep latest values in refs so fetchUrl can stay stable (no deps)
  const cacheRef = useRef(cache);
  const pendingRef = useRef(pending);

  useEffect(() => {
    cacheRef.current = cache;
  }, [cache]);

  useEffect(() => {
    pendingRef.current = pending;
  }, [pending]);

  const fetchUrl = useCallback(async (url) => {
    // Don't refetch if cached or already in-flight
    if (hasOwn(cacheRef.current, url) || pendingRef.current[url] === true)
      return;

    setPending((prevPending) => ({ ...prevPending, [url]: true }));

    try {
      const result = await mockFetch(url);
      setCache((prevCache) => ({ ...prevCache, [url]: result }));
    } finally {
      setPending((prevPending) => ({ ...prevPending, [url]: false }));
    }
  }, []);

  const value = useMemo(
    () => ({ cache, pending, fetchUrl }),
    [cache, pending, fetchUrl]
  );

  return (
    <DataCacheContext.Provider value={value}>
      {children}
    </DataCacheContext.Provider>
  );
}

export default DataCacheProvider;
