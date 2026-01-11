import DataFetcher from "./DataFetcher"

function DessertsCount() {
    return(
        <DataFetcher
            url='/desserts'
            render={
                (data) => {
                    if(!data) {
                        return <p>Pending desserts...</p>
                    }

                    return <p>Desserts count: {data.length}</p>
                }
            }
        />
    )
}

export default DessertsCount
