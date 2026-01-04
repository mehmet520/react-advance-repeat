import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h2>Seite nicht gefunden.</h2>
      <p>
        Die gesuchte Seite existiert nicht. Sie können den folgenden Link
        verwenden, um zur Startseite zurückzukehren.
      </p>
      <Link to="/">Ana Sayfa</Link>
    </section>
  );
}

export default NotFound;
