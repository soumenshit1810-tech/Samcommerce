import React from "react";
import order from "../data/order";

function Myorders() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🛒 My Orders
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Item</th>
              <th className="p-3">Seller</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Price</th>
              <th className="p-3">Total</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Order Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              order.length > 0 ? (
                order.map((order, orderIdx) =>
                  order.items.map((item, idx) => (
                    <tr
                      key={`${order.orderId}-${item.id}`}
                      className={`${orderIdx % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition`}
                    >
                      {idx === 0 && (
                        <td
                          rowSpan={order.items.length}
                          className="p-3 font-semibold text-blue-600 align-middle border-t border-gray-200"
                        >
                          {order.orderId}
                        </td>
                      )}
                      <td className="p-3 flex items-center gap-3 border-t border-gray-200">
                        <img
                          src={item.previewImage}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded-lg shadow-sm"
                        />
                        <span className="font-medium">{item.title}</span>
                      </td>
                      <td className="p-3 border-t border-gray-200">{item.seller}</td>
                      <td className="p-3 border-t border-gray-200">{item.quantity}</td>
                      <td className="p-3 border-t border-gray-200">${item.price}</td>

                      {idx === 0 && (
                        <>
                          <td
                            rowSpan={order.items.length}
                            className="p-3 font-medium border-t border-gray-200"
                          >
                            ${order.totalAmount}
                          </td>
                          <td
                            rowSpan={order.items.length}
                            className="p-3 border-t border-gray-200"
                          >
                            <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 font-medium">
                              {order.paymentMethod || "Credit Card"}
                            </span>
                          </td>
                          <td
                            rowSpan={order.items.length}
                            className="p-3 border-t border-gray-200"
                          >
                            {order.orderDate}
                          </td>
                          <td
                            rowSpan={order.items.length}
                            className="p-3 border-t border-gray-200"
                          >
                            <span
                              className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md ${order.status === "Delivered"
                                ? "bg-green-500"
                                : order.status === "Shipped"
                                  ? "bg-blue-500"
                                  : "bg-yellow-500"
                                }`}
                            >
                              {order.status}
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )



            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Myorders;
