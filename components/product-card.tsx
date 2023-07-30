import React, { useContext } from 'react';
import Image from 'next/image';
import BuilderContext from './BuilderContext';
import { useRouter } from 'next/router';

interface Product {
   _id: number;
   productName: string;
   category: string;
   price: number;
   inStock: boolean;
   averageRating: number;
   image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
   const router = useRouter();

   const { selectedComponents, selectComponent, removeComponent } =
      useContext(BuilderContext);

   const handleSelect = () => {
      selectComponent(product.category, product);
      setTimeout(() => {
         router.push('/builder');
      }, 1000);
   };

   const handleRemove = () => {
      removeComponent(product.category);
   };

   const isSelected = selectedComponents[product.category] === product;

   return (
      <div key={product._id} className='bg-white p-4 rounded-lg shadow'>
         <Image
            width={400}
            height={600}
            src={product.image}
            alt={product.productName}
            className='w-full h-32 object-cover mb-2 rounded'
         />
         <h3 className='text-lg font-semibold'>{product.productName}</h3>
         <p>{product.category}</p>
         <p>Price: {product.price}</p>
         <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
         <p>Rating: {product.averageRating} Stars</p>
         {isSelected ? (
            <button
               onClick={handleRemove}
               className='block mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
               Remove
            </button>
         ) : (
            <button
               onClick={handleSelect}
               className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
               Select
            </button>
         )}
      </div>
   );
};

export default ProductCard;
