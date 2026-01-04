import { useEffect, useState } from "react";

export default function BitCoinDataFetching() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch("https://api.coinbase.com/v2/prices/BTC-EUR/spot")
      .then((response) => response.json())
      .then((jsonData) => {
        setBtcData(jsonData);
        console.log(jsonData.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <h3>Bit Coin Data Fetching Component</h3>
      {btcData.data 
      ? <h4>{`${btcData.data.amount} ${btcData.data.currency}`}</h4>
      : <h4>Wird geladen...</h4>
      }
    </div>
  );
}
