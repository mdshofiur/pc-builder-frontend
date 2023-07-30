import React from 'react';
import axios from 'axios';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

const SingleProduct = ({
   product,
}: {
   product: {
      item: {
         _id: string;
         productName: string;
         description: string;
         price: number;
         image: string;
         category: string;
         status: string;
         individualRating: number;
         averageRating: number;
         model: string;
         reviews: {
            id: string;
            user: string;
            comment: string;
            rating: number;
         }[];
      };
   };
}) => {
   const {
      productName,
      image,
      description,
      category,
      status,
      price,
      individualRating,
      averageRating,
      reviews,
      model,
   } = product?.item;

   return (
      <section className='p-4'>
         <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg'>
            <h1 className='text-3xl font-semibold p-4'>{productName}</h1>
            <Image width={600} height={600} src={image} alt={productName} />
            <p className='p-4'>Category: {category}</p>
            <p className='p-4'>Status: {status}</p>
            <p className='p-4'>Price: ${price}</p>
            <p className='p-4'>Description: {description}</p>
            <h2 className='text-2xl font-semibold p-4'>
               Key Features: {model}
            </h2>
            <p className='p-4'>Individual Rating: {individualRating} Stars</p>
            <p className='p-4'>Average Rating: {averageRating} Stars</p>
            <h2 className='text-2xl font-semibold p-4'>Reviews</h2>
            {reviews?.map((review) => (
               <div className='p-4' key={review.id}>
                  <p className='font-semibold'>User: {review.user}</p>
                  <p className='p-2'>Comment: {review.comment}</p>
                  <p className='p-2'>Rating: {review.rating} Stars</p>
               </div>
            ))}
            {reviews?.length === 0 && <p className='p-4'>No reviews yet.</p>}
         </div>
      </section>
   );
};

export default SingleProduct;

export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const response = await axios.get(
         `https://pc-builder-backend-flax.vercel.app/api/builder/${params?.id}`,
      );

      const product = response.data;

      return {
         props: {
            product,
         },
      };
   } catch (error) {
      console.error('Error fetching products:', error);
      return {
         notFound: true,
      };
   }
};

export const getStaticPaths: GetStaticPaths = async () => {
   const ipPaths = await axios.get(
      'https://pc-builder-backend-flax.vercel.app/api/builder',
   );
   const paths = ipPaths.data?.items?.map((product: { _id: string }) => ({
      params: { id: product._id },
   }));
   return {
      paths,
      fallback: false,
   };
};
