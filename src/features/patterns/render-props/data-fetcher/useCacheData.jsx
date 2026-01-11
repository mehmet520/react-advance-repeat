/**
 * 2) Shared/cached version (Context + cache)
 *
 * Wrap a part of the app with <DataCacheProvider>
 * and then use: const { data, isPending } = useCachedData(url)
 */

import { useContext, useEffect } from "react";
import { DataCacheContext, hasOwn } from "./DataCacheProvider";

export function useCachedData(url) {
  const ctx = useContext(DataCacheContext);
  if (!ctx) {
    throw new Error("useCachedData must be used within a <DataCacheProvider>.");
  }

  const { cache, pending, fetchUrl } = ctx;

  const data = hasOwn(cache, url) ? cache[url] : null;
  const isPending = !!pending[url] && data === null;

  useEffect(() => {
    if (data === null) fetchUrl(url);
  }, [url, data, fetchUrl]);

  return { data, isPending };
}