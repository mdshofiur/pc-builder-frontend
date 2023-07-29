import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: any) => {
   return (
      <div key={product.id} className='bg-white p-4 rounded-lg shadow'>
         <Image
            width={400}
            height={600}
            src={product.image}
            alt={product.productName}
            className='w-full h-32 object-cover mb-2 rounded'
         />
         <h3 className='text-lg font-semibold'>{product.name}</h3>
         <p>{product.category}</p>
         <p>Price: ${product.price}</p>
         <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
         <p>Rating: {product.rating} Stars</p>
         <Link
            href={`/product/${product._id}`}
            className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            View Details
         </Link>
      </div>
   );
};

export default ProductCard;
