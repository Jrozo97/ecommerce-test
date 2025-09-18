import { useState } from "react";
import type { ProductType } from "../../types/product";


const SidebarCart = ({
  openSidebar,
  cart,
  removeFromCart,
}: {
  openSidebar: () => void;
  cart: ProductType[];
  removeFromCart: (id: number) => void;
}) => {
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({  });

  return (
    <div className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <button
          onClick={openSidebar}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          X
        </button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium text-sm text-blue-950">
                  {item.name}
                </h3>
                <p className="text-sm text-blue-500">{item.price}</p>
              </div>

              <div className=" flex items-center mr-6">
                <button className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition" onClick={() => setQuantity({ ...quantity, [item.id]: (quantity[item.id] || 1) - 1 })}>-</button>
                <span className="mx-2">{quantity[item.id] || 1}</span>
                <button className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition" onClick={() => setQuantity({ ...quantity, [item.id]: (quantity[item.id] || 1) + 1 })}>+</button>
              </div>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => removeFromCart(item.id)}
              >
                {" "}
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <p>Items in cart: {cart.reduce((acc, item) => acc + (quantity[item.id] || 1), 0)}</p>
        <p>Total: {cart.reduce((acc, item) => acc + item.price * (quantity[item.id] || 1), 0)}</p>
      </div>    
    </div>
  );
};

export default SidebarCart;
