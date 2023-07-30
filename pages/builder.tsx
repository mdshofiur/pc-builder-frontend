import React, { useContext } from 'react';
import Link from 'next/link';
import BuilderContext from '@/components/BuilderContext';

const featuredCategories = [
   'Processor',
   'Motherboard',
   'Ram',
   'Power Supply',
   'Storage',
   'Monitor',
   'Others',
];

const Builder = () => {
   const { selectedComponents, selectComponent, removeComponent } =
      useContext(BuilderContext);

   return (
      <div>
         <div className='container mx-auto py-10 h-screen'>
            <h1 className='text-3xl font-semibold my-4'>PC Builder</h1>
            <div className='grid grid-cols-5 gap-4'>
               {featuredCategories?.map((category, index: number) => (
                  <div key={index}>
                     <div className='text-center py-4 border border-gray-300 rounded hover:bg-gray-200 font-bold'>
                        {category}
                     </div>
                     <Link
                        href={`/category/${encodeURIComponent(category)}`}
                        className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        Select
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Builder;
