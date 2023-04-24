import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { currency, getProductById } from "home/products";

interface ProductInfo {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
}

export default function PDPContent() {
  const params = useParams();
  console.log({ params });
  const { id } = params;
  const [product, setProduct] = useState<ProductInfo | null>(null);
  console.log({ id });
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
