import ThemeToggle from "../../features/context/ThemeToggle";
import ThemeInfoCard from "../../features/context/ThemeInfoCard";
import DeepTree from "../../features/context/DeepTree";

function ContextIntro() {
  return (
    <section className="app-section">
      <h3>Context API Girişi</h3>
      <p>
        Context API, bileşen ağacının derinlerine prop zinciri (prop drilling)
        ile veri taşımak yerine, tek bir merkezden birçok bileşene veri
        paylaşmanıza imkân verir.
      </p>

      <p>
        Bu örnekte global bir tema (light / dark) bilgisini context ile
        yönetiyoruz. Farklı bileşenler, aralarında prop geçmeden bu bilgiyi
        kullanabiliyor.
      </p>

      <ThemeToggle />

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <ThemeInfoCard />
        <DeepTree />
      </div>
    </section>
  );
}

export default ContextIntro;
