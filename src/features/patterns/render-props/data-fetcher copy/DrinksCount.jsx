import DataFetcher from "./DataFetcher";

function DrinksCount() {
  return (
    <DataFetcher
      url="/drinks"
      render={(data) => {
        if (!data) {
          return <p>Pending drinks...</p>;
        }

        return <h4>Drinks available: {data.length}</h4>
      }}
    />
  );
}

export default DrinksCount;
