import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
   id: number;
   productName: string;
   category: string;
   price: number;
   image: string;
   inStock: boolean;
   rating: number;
}

interface HomeProps {
   featuredProducts: {
      items: Product[];
   };
}

const Home = ({ featuredProducts }: HomeProps) => {
   
   return (
      <section className='container mx-auto'>
         <h1 className='text-3xl font-bold my-4'>Featured Products</h1>
         <div className='grid grid-cols-3 gap-4'>
            {featuredProducts?.items?.map((product: Product, index: number) => (
               <div key={index} className='bg-white p-4 rounded-lg shadow'>
                  <Image
                     width={400}
                     height={400}
                     src={product.image}
                     alt={product.productName}
                     className='w-full h-32 object-cover mb-2 rounded'
                  />
                  <h3 className='text-lg font-semibold'>
                     {product.productName}
                  </h3>
                  <p>{product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                  <p>Rating: {product.rating} Stars</p>
                  <Link
                     href={`/product/${product.id}`}
                     className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                     View Details
                  </Link>
               </div>
            ))}
         </div>
         <h1 className='text-3xl font-bold my-4'>Featured Categories</h1>
         {/* Add Featured Categories here */}
      </section>
   );
};

export default Home;

export async function getStaticProps() {
   const response = await fetch('http://localhost:2000/api/builder');
   const featuredProducts = await response.json();

   return {
      props: {
         featuredProducts,
      },
   };
}
