import BitCoinDataFetching from "../../features/data-fetching/BitCoinDataFetching"

// src/pages/playground/DataFetchingIntro.jsx
function DataFetchingIntro() {
  return (
    <section className="app-section">
      <h3>Data Fetching ve React Query</h3>
      <p>
        Bu sayfada veri çekme (data fetching), caching ve yeniden
        doğrulama (refetch) işlemlerini React Query ile yöneteceğiz.
        useEffect + fetch yaklaşımının ötesine geçip, istek durumlarını
        (loading / error / success) daha ölçeklenebilir şekilde ele alacağız.
      </p>
      <p>
        src/features/query klasöründe küçük örnekler oluşturup burada
        kullanacağız. Ayrıca src/services altında API yardımcıları tanımlayacağız.
      </p>
      <BitCoinDataFetching />
    </section>
  )
}

export default DataFetchingIntro
