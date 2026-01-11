import DessertsCount, { DessertsCountCached } from "./DessertsCount"
import DrinksCount, { DrinksCountCached } from "./DrinksCount"

export default function DataFercherShow() {
    return (
        <section className="gray-box">
        <h4>Datenabfrage (data-fetching) mit Render Props</h4>
            <DessertsCountCached />
            <DrinksCountCached />
            <DessertsCount />
            <DrinksCount />
        </section>
    )
}