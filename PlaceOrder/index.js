module.exports = async function (context, req) {

    const order = req.body;

    // Check if request body exists
    if (!order) {
        context.res = {
            status: 400,
            body: "Order data is required."
        };
        return;
    }

    // Validate required fields
    if (!order.productId || !order.quantity) {
        context.res = {
            status: 400,
            body: "Please provide productId and quantity."
        };
        return;
    }

    // Create order object
    const newOrder = {
        productId: order.productId,
        quantity: order.quantity,
        orderDate: new Date().toISOString(),
        status: "Pending"
    };

    // Send message to Service Bus queue
    context.bindings.outputSbMsg = JSON.stringify(newOrder);

    // Send success response
    context.res = {
        status: 200,
        body: {
            message: "Order placed and sent to queue successfully!",
            order: newOrder
        }
    };
};
