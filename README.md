# Serverless E-Commerce API (Azure POC)

## Student Information
Name: Nisanta Khadka  
Course: CSP451   
Presentation 

--
## Project Overview
This project demonstrates a Serverless E-Commerce backend built using Microsoft Azure cloud services. The system allows users to retrieve product information and place orders through HTTP-triggered Azure Functions. Orders are processed asynchronously using Azure Service Bus to ensure scalability and reliability.

---

## Business Problem
Traditional e-commerce systems require scalable infrastructure to handle product browsing and order processing. Managing servers increases operational costs and complexity.

This solution uses a serverless architecture to:
- Reduce infrastructure management
- Improve scalability
- Support asynchronous order processing
- Minimize operational costs through consumption-based pricing

---

## Azure Services Used
- Azure Functions – Serverless API for order processing
- Azure Cosmos DB – NoSQL database for product catalog
- Azure Service Bus – Queue for order processing
- Azure Logic Apps – Automated notifications (optional enhancement)
- API Management – API Gateway layer (optional enhancement)

---

## Architecture Flow

1. Client sends HTTP request  
2. GetProducts function returns product catalog  
3. PlaceOrder function validates order  
4. Order is sent to Azure Service Bus queue  
5. Orders can be processed asynchronously  

---

## Features
- Retrieve product list (HTTP GET)
- Place order (HTTP POST)
- Input validation
- Queue-based asynchronous processing
- Scalable serverless architecture
- Cost-efficient consumption model

---

## Cost Considerations
Azure services are configured under the Consumption pricing model.

Estimated Monthly Cost (POC scale):

| Service | Estimated Cost |
|----------|---------------|
| Azure Functions | $5 |
| Cosmos DB | $15 |
| Service Bus | $10 |
| Logic Apps (Optional) | $5 |
| API Management (Optional) | $10 |

Estimated Total: ~$35–$45/month depending on usage.

---

## Scalability Benefits
- Auto-scaling with Azure Functions
- Reliable message handling using Service Bus
- Globally distributed database support with Cosmos DB
- Pay-per-use pricing model

---

## Future Enhancements
- Add user authentication (Azure AD B2C)
- Integrate payment gateway
- Add order tracking dashboard
- Implement monitoring with Azure Application Insights
- Add email/SMS notifications via Logic Apps

---

## Conclusion
This Proof of Concept demonstrates how Microsoft Azure serverless services can be combined to build a scalable, cost-efficient, and reliable e-commerce backend system.
