import DataFetcher from "./DataFetcher";
import { useCachedData } from "./useCacheData";

function DessertsCount() {
  return (
    <DataFetcher
      url="/desserts"
      render={(data) => {
        if (!data) {
          return <p>Pending deserts...</p>;
        }

        return <p>Deserts count: {data.length}</p>;
      }}
    />
  );
}

export default DessertsCount;

export function DessertsCountCached() {
  const { data, isPending } = useCachedData("/desserts");

  if (isPending || !data) {
    return <p>Pending deserts...</p>;
  }

  return <p>Deserts count cashed: {data.length}</p>;
}
