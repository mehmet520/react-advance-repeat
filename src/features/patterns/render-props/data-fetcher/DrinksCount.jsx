import DataFetcher from "./DataFetcher";
import { useCachedData } from "./useCacheData";

function DrinksCount() {
  return (
    <DataFetcher
      url="/drinks"
      render={(data) => {
        if (!data) {
          return <p>Pending drinks...</p>;
        }

        return <h4>Drinks available: {data.length}</h4>;
      }}
    />
  );
}

export default DrinksCount;

export function DrinksCountCached() {
  const { data, isPending } = useCachedData("/drinks");

  if (isPending || !data) {
    return <p>Pending drinks...</p>;
  }

  return <h4>Drinks available cached: {data.length}</h4>;
}
