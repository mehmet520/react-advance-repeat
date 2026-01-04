import Radio from "../../features/forms/Radio/Radio"

// src/pages/playground/FormsIntro.jsx
function FormsIntro() {
  return (
    <section className="app-section">
      <h3>Form Yönetimi</h3>
      <p>
        Bu sayfada basit controlled input&apos;ların ötesine geçerek
        daha büyük formları, doğrulama (validation), hata mesajları
        ve üçüncü parti form kütüphaneleriyle (örn. React Hook Form)
        nasıl yöneteceğimizi inceleyeceğiz.
      </p>
      <p>
        src/features/forms klasöründe farklı form senaryoları için
        bileşenler oluşturacağız.
      </p>
      <Radio />
    </section>
  )
}

export default FormsIntro
