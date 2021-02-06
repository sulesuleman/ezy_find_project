
export const getProductsOfSelectedCategory = (products, type) => {
    console.log("type", type.name);
    let items = products.filter(product => {
        return product.category === type.name;
    })
    return items;
}