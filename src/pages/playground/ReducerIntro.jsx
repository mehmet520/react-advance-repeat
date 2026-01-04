import UserDataFetching from "../../features/reducer/UserDataFetching"

// src/pages/playground/ReducerIntro.jsx
function ReducerIntro() {
  return (
    <section className="app-section">
      <h3>useReducer ve İleri Durum Yönetimi</h3>
      <p>
        Bu sayfada useReducer kullanarak daha karmaşık durum (state)
        senaryolarını yöneteceğiz. Özellikle birden fazla alanı olan
        state nesnelerini ve aksiyon (action) tabanlı güncellemeleri
        ele alacağız.
      </p>
      <p>
        Bir sonraki adımda burada çalışan örnekler ekleyeceğiz. İskelet
        şu anda hazır.
      </p>
      <UserDataFetching />
    </section>
  )
}

export default ReducerIntro
