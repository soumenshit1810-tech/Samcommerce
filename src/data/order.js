import preview3 from "../assets/image3.png";
import preview6 from "../assets/image6.png";
import preview10 from "../assets/image10.png";

let orders = [
  {
    orderId: "ORD1001",
    items: [
      {
        id: 3,
        title: "Freelancer Portfolio",
        previewImage: preview3,
        price: 15.0,
        quantity: 1,
        seller: "SoloWorks",
      },
    ],
    totalAmount: 15.0,
    orderDate: "2025-08-29",
    status: "Delivered",
   
  },
  {
    orderId: "ORD1002",
    items: [
      {
        id: 6,
        title: "Online Course Template",
        previewImage: preview6,
        price: 28.0,
        quantity: 2,
        seller: "EduBuilder",
      },
    ],
    totalAmount: 56.0, 
    orderDate: "2025-08-28",
    status: "Shipped",
  },
  {
    orderId: "ORD1003",
    items: [
      {
        id: 10,
        title: "Gaming Community Website",
        previewImage: preview10,
        price: 18.0,
        quantity: 1,
        seller: "GameZone",
      },
    ],
    totalAmount: 18.0,
    orderDate: "2025-08-27",
    status: "Processing",
  },
];

export default orders;
