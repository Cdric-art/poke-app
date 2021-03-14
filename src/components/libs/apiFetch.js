export async function apiFetch(endpoint) {

    const response = await fetch(`https://pokeapi.co/api/v2${endpoint}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })

    const responseData = await response.json()

    if (response.ok) {
        return responseData
    }

}
