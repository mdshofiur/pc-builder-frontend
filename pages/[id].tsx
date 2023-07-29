import React from 'react';
import axios from 'axios';
import type { GetStaticPaths, GetStaticProps } from 'next';

const SingleProduct = ({
   product,
}: {
   product: {
      _id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      category: string;
   };
}) => {
   console.log('product', product);

   return (
      <section>
         <div>ffsdfsdfdsfsdf</div>
      </section>
   );
};

export default SingleProduct;

export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const response = await axios.get(
         `http://localhost:2000/api/builder/${params?.id}`,
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
   const ipPaths = await axios.get('http://localhost:2000/api/builder');
   const paths = ipPaths.data?.items?.map((product: { _id: string }) => ({
      params: { id: product._id },
   }));
   return {
      paths,
      fallback: false,
   };
};
