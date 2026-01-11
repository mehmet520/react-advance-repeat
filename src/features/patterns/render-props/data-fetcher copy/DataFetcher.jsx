import { useEffect, useState } from "react";

function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      let result;

      if (url === "/desserts") {
        result = ["cake", "ice cream", "tiramisu"];
      } else if (url === "/drinks") {
        result = ["cola", "water", "juice"];
      } else {
        result = [];
      }

      if (isMounted) {
        setData(result);
      }
    }

    fetchData();

    return ()=>{
        isMounted=false
    }
    
  }, [url]);

  return render(data);
}

export default DataFetcher;
