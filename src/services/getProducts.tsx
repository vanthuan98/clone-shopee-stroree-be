let headers: any

export const getProducts = async (url: string) => {
    const response = await fetch(url, {
        headers: {
            "Domain-Name": "shopee.storee.be"
        }
    })
    const responseData = await response.json()

}