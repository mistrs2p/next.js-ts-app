import Image from "next/image";
import React from "react";

// export async function generateStaticParams() {
//   const response = await fetch("https://dummyjson.com/products").then((res) =>
//     res.json(),
//   );

//   return response.products.map((product: any) => ({
//     productId: String(product.id),
//   }));
// }

async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const data = await fetch(`https://dummyjson.com/products/${productId}`);
  if (data.status !== 200) {
    return (
      <div>
        ProductPage not found {JSON.stringify((await params).productId)}
        {(await params).productId}
        {JSON.stringify(await params)}
      </div>
    );
  } else {
    const product = await data.json();
    console.log(product);
    return (
      <div>
        <span>My Product ID: {productId}</span>
        <h2>Title: {product.title}</h2>
        <h3>Price: {product.price}</h3>
        {product.images.map((image: string, index: string) => (
          <Image
            key={index}
            src={image}
            alt={product.title}
            width={200}
            height={200}
          />
        ))}
      </div>
    );
  }
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.log(err);
  //     // throw new Error(err);
  //   });
  // console.log(response);
  // // const searchParams = useSearchParams();
  // // console.log(searchParams);
}

export default ProductPage;
