export const getLaunches = async () => {

    const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12
            }
        })
    })

    const {docs: launches} = await response.json()

    return launches;
}

export const getLaunchBy = async ({id}: { id: string }) => {

    const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    return await response.json();
}