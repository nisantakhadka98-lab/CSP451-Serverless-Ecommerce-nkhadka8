module.exports = async function (context, req) {

    const products = [
        { id: "1", name: "Smartphone", price: 899, category: "electronics" },
        { id: "2", name: "Coffee Maker", price: 120, category: "home" }
    ];

    context.res = {
        status: 200,
        body: products
    };
};
