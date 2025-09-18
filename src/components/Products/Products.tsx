
import type { ProductType } from "../../types/product";


const Products = ({
  products,
  addToCart,
  cart,
  removeFromCart,
}: {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  cart: ProductType[];
  removeFromCart: (id: number) => void;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-md w-auto"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover mb-2"
          />
          <h2 className="font-medium text-sm text-blue-950">{product.name}</h2>
          <p className="text-sm text-blue-500">{product.price}</p>
          {cart.find((item) => item.id === product.id) ? (
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
