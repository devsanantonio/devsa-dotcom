/* 
export async function getShopData() {
    const response = await fetch('https://api.printify.com/v1/shops.json', {
        headers: {
            Authorization: `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
}

export async function getProducts() {
    const response = await fetch(
        'https://api.printify.com/v1/shops/14508575/products.json',
        {
            headers: {
                Authorization: `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}

export async function getProduct(id: string) {
    const response = await fetch(
        `https://api.printify.com/v1/shops/14508575/products/${id}.json`,
        {
            headers: {
                Authorization: `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}
 */
