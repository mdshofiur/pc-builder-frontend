import React, { Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {
   return (
      <Fragment>
         <nav className='bg-blue-500 p-4'>
            <div className='container mx-auto'>
               <div className='flex items-center justify-between'>
                  <div>
                     <Link href='/' className='text-white font-bold text-xl'>
                        PC Builder
                     </Link>
                  </div>
                  <div className='relative inline-block text-left group'>
                     <button className='text-white focus:outline-none'>
                        Categories
                     </button>
                     <div className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100'>
                        <div className='py-1'>
                           <Link
                              href={`/category/Processor`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              CPU / Processor
                           </Link>
                           <Link
                              href={`/category/Motherboard`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              Motherboard
                           </Link>
                           <Link
                              href={`/category/Ram`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              RAM
                           </Link>
                           <Link
                              href={`/category/Power Supply`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              Power Supply Unit
                           </Link>
                           <Link
                              href={`/category/Storage`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              Storage Device
                           </Link>
                           <Link
                              href={`/category/Monitor`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              Monitor
                           </Link>
                           <Link
                              href={`/category/Others`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                              Others
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </Fragment>
   );
};

export default Navbar;
