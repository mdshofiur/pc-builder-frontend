import React, { useContext, useState, useEffect, useCallback } from 'react';
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
   const { selectedComponents, removeComponent } = useContext(BuilderContext);

   const isCategorySelected = (category: string) => {
      return !!selectedComponents[category]; // Check if a product is selected for the category
   };

   const handleRemove = (category: string) => {
      removeComponent(category);
   };

   const selectedProducts = Object.entries(selectedComponents);

   const selectedItems = selectedProducts.filter(
      ([category, product]) => product !== null,
   );

   const [selectedCount, setSelectedCount] = useState(0);

   // Function to update the selected component count
   const updateSelectedCount = useCallback(() => {
      const count = selectedProducts.filter(
         ([category, product]) => product !== null,
      ).length;
      setSelectedCount(count);
   }, [selectedProducts]);

   useEffect(() => {
      updateSelectedCount();
   }, [selectedProducts, updateSelectedCount]);

   const isCompleteBuildDisabled = selectedCount < 5;


   return (
      <section className='container mx-auto py-10 min-h-screen'>
         <div className='flex items-center justify-between  my-4'>
            <h1 className='text-3xl font-semibold'>PC Builder</h1>
            {/* Complete Build Button */}
            <button
               className={`block mt-6 bg-green-500 text-white px-4 py-2 rounded ${
                  isCompleteBuildDisabled
                     ? 'cursor-not-allowed opacity-50'
                     : 'hover:bg-green-600'
               }`}
               disabled={isCompleteBuildDisabled}>
               Complete Build
            </button>
         </div>
         {/* Featured Categories */}
         <div className='grid grid-cols-5 gap-4'>
            {featuredCategories?.map((category, index: number) => (
               <div key={index}>
                  <div className='text-center py-4 border border-gray-300 rounded hover:bg-gray-200 font-bold'>
                     {category}
                  </div>
                  {!isCategorySelected(category) ? (
                     <Link
                        href={`/category/${encodeURIComponent(category)}`}
                        className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        Select
                     </Link>
                  ) : (
                     <div className='flex items-center gap-3'>
                        <button className='block mt-4 bg-blue-500 text-white px-4 py-2 rounded  w-full cursor-not-allowed opacity-50'>
                           Selected
                        </button>
                        <button
                           onClick={() => handleRemove(category)}
                           className='block mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full'>
                           Remove
                        </button>
                     </div>
                  )}
               </div>
            ))}
         </div>
         {/* Display selected data */}
         {selectedCount > 0 && (
            <div className='mt-10'>
               <h1 className='text-3xl font-semibold my-4'>
                  Selected Products:
               </h1>
               <div className='grid grid-cols-4 gap-5 py-3'>
                  {selectedItems.map(([category, product]) => (
                     <div key={category} className='mb-2 border p-3'>
                        <p className='font-bold text-blue-500 uppercase pb-4'>
                           {category}:
                        </p>{' '}
                        <h1 className='font-bold'>
                           {`Title: ${product.productName}`}
                        </h1>
                        <p className='font-bold'>{`Price: ${product.price}`}</p>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </section>
   );
};

export default Builder;
