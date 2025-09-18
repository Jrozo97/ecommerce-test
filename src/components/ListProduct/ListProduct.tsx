import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../services/dataMock";
import type { ProductType } from "../../types/product";
import Products from "../Products/Products";

const ListProduct = ({
  addToCart,
  cart,
  removeFromCart,
}: {
  addToCart: (product: ProductType) => void;
  cart: ProductType[];
  removeFromCart: (id: number) => void;
}) => {
  const [listProduct, setListProduct] = useState<ProductType[]>(PRODUCTS);

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const filteredProducts = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListProduct(filteredProducts);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm === "") {
      setListProduct(PRODUCTS);
    }
  }, [searchTerm]);

  return (
    <div className="w-full mt-10 px-10">
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 rounded w-1/3 mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="text-xl font-bold mb-4 ml-4">Products</h2>
      <Products
        products={listProduct}
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default ListProduct;
