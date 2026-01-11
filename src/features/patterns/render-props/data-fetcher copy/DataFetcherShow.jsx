import DessertsCount from "./DessertsCount"
import DrinksCount from "./DrinksCount"

export default function DataFercherShow() {
    return (
        <section className="gray-box">
        <h4>Datenabfrage (data-fetching) mit Render Props</h4>
            <DessertsCount />
            <DrinksCount />
        </section>
    )
}