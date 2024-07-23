
async function displayBlackFridayProducts() {
    const { products, offers } = await getProductsAndDeals();

    const blackFridayOffers = offers
        .reduce((acc, curr) => {
            if (curr.code === "BF_2023" && !acc.includes(curr.product))
                acc.push(curr.product);
            return acc;
        }, []);

    const bfProducts = products
        // .filter((product) => blackFridayOffers.includes(product.id))
        .reduce((acc, curr) => {
            if (blackFridayOffers.includes(curr.id)) {
                const count = Object.values(curr.count).reduce((accu, curr) => accu + curr, 0);
                const title = `${curr.title} $${curr.price}`;
                acc.push({ title, count })
            }
            return acc;
        }, [])
        .sort((a, b) => b.count - a.count);

    const rootDiv = document.getElementById('root');

    const ulElement = document.createElement('ul');

    bfProducts.map((item) => {
        const olElement = document.createElement('li');
        olElement.innerText = item.title;
        ulElement.appendChild(olElement);
    })

    rootDiv.appendChild(ulElement);
}

displayBlackFridayProducts();

// do not modify the content of this function
function getProductsAndDeals() {
    return new Promise((resolve, reject) => {
        resolve(
            {
                products: [
                    {
                        id: "product_1",
                        title: "Baker",
                        category: "kitchen",
                        price: 12,
                        discount: 0,
                        count: {
                            warehouse: 2,
                            store: 3,
                            reserve: 5
                        }
                    },
                    {
                        id: "product_2",
                        title: "1984",
                        category: "books",
                        discount: 22,
                        price: 22,
                        count: {
                            warehouse: 2,
                        }
                    },
                    {
                        id: "product_3",
                        title: "T-Shirt",
                        category: "clothing",
                        discount: 5,
                        price: 35,
                        count: {
                            store: 3,
                            reserve: 5
                        }
                    },
                    {
                        id: "product_4",
                        title: "Boots",
                        category: "clothing",
                        discount: 34,
                        price: 11,
                        count: {
                            warehouse: 6,
                            store: 1,
                            reserve: 3
                        }
                    },
                    {
                        id: "product_5",
                        title: "Chess Board",
                        category: "games",
                        discount: 0,
                        price: 19,
                        count: {
                            warehouse: 2,
                            store: 3,
                        }
                    },
                    {
                        id: "product_6",
                        title: "Fifa 2023",
                        category: "games",
                        price: 64,
                        discount: 12,
                        count: {
                            warehouse: 2,
                            store: 3,
                            reserve: 5
                        }
                    },
                    {
                        id: "product_7",
                        title: "God of War",
                        category: "games",
                        discount: 22,
                        price: 44,
                        count: {
                            warehouse: 2,
                            store: 3,
                            reserve: 5
                        }
                    }
                ],
                offers: [
                    {
                        id: "offer_1",
                        title: "Black Friday Deals",
                        code: "BF_2023",
                        product: "product_5"
                    },
                    {
                        id: "offer_2",
                        title: "Black Friday Deals",
                        code: "BF_2023",
                        product: "product_2"
                    },
                    {
                        id: "offer_3",
                        title: "Black Friday Deals",
                        code: "BF_2023",
                        product: "product_4"
                    },
                    {
                        id: "offer_4",
                        title: "Christmas Deals",
                        code: "CH_2023",
                        product: "product_1"
                    },
                    {
                        id: "offer_5",
                        title: "Black Friday Deals",
                        code: "BF_2023",
                        product: "product_3"
                    },
                    {
                        id: "offer_6",
                        title: "Black Friday Deals",
                        code: "BF_2023",
                        product: "product_5"
                    },
                    {
                        id: "offer_7",
                        title: "Cyber Monday Deals",
                        code: "CM_2023",
                        product: "product_7"
                    },
                    {
                        id: "offer_8",
                        title: "Cyber Monday Deals",
                        code: "CM_2023",
                        product: "product_5"
                    },
                ],
            }
        );
    });
}

