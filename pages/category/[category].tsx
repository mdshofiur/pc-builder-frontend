import React from 'react';
import ProductCard from '@/components/product-card';
import { useRouter } from 'next/router';
import axios from 'axios';
import type { GetStaticPaths } from 'next';

const CategoryDetails = ({ products }: any) => {
   const router = useRouter();
   const { category } = router.query;

   if (!products?.items || products?.items.length === 0) {
      // Handle loading or empty state
      return <div>Loading...</div>;
   }

   return (
      <section className='container mx-auto h-screen'>
         <h1 className='text-3xl font-bold my-4 py-10'>{category}</h1>
         <div className='grid grid-cols-3 gap-4'>
            {products?.items?.map((product: any, index: number) => (
               <ProductCard key={index} product={product} />
            ))}
         </div>
      </section>
   );
};

export default CategoryDetails;

// Fetch the products for the category
export async function getStaticProps({
   params,
}: {
   params: { category: string };
}) {
   try {
      const response = await axios.get(
         `http://localhost:2000/api/builder/products/${params.category.replace(
            /%20/g,
            ' ',
         )}`,
      );

      const products = response.data;

      return {
         props: {
            products,
         },
      };
   } catch (error) {
      console.error('Error fetching products:', error);
      return {
         notFound: true,
      };
   }
}

// Define the paths for the featured categories
const featuredCategories = [
   'Processor',
   'Motherboard',
   'Ram',
   'Power Supply',
   'Storage',
   'Monitor',
   'Others',
];

// Define the paths for the featured categories
export const getStaticPaths: GetStaticPaths = async () => {
   const paths = featuredCategories.map((category) => ({
      params: { category: category.replace(/%20/g, ' ') },
   }));
   return {
      paths,
      fallback: false,
   };
};
