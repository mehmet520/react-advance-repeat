import Count from "../../features/hooks/Count"
import Day from '../../features/hooks/Day'

// src/pages/playground/CustomHooksIntro.jsx
function CustomHooksIntro() {
  return (
    <section className="app-section">
      <h3>Custom Hooks (Özel Kancalar)</h3>
      <p>
        Bu sayfada tekrar eden mantığı (logic) bileşenlerden ayırmak için
        custom hook&apos;lar yazacağız. Örneğin pencere boyutu takibi,
        localStorage ile çalışma ve veri getirme gibi senaryoları
        reusable hook&apos;lar haline getireceğiz.
      </p>
      <p>
        İlerleyen adımlarda burada src/features/hooks klasöründeki
        örnekleri kullanacağız.
      </p>
      <Count />
      <Day />
    </section>
  )
}

export default CustomHooksIntro
