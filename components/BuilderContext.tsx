import React, { createContext, useState } from 'react';

interface SelectedComponents {
   [key: string]: any;
   Processor: any;
   Motherboard: any;
   Ram: any;
   Storage: any;
   Monitor: any;
   PowerSupply: any;
   Others: any;
}

interface BuilderContextProps {
   selectedComponents: SelectedComponents;
   selectComponent: (category: string, component: any) => void;
   removeComponent: (category: string) => void;
}

const BuilderContext = createContext<BuilderContextProps>({
   selectedComponents: {
      Processor: null,
      Motherboard: null,
      Ram: null,
      Storage: null,
      Monitor: null,
      PowerSupply: null,
      Others: null,
   },
   selectComponent: () => {},
   removeComponent: () => {},
});

export const BuilderProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [selectedComponents, setSelectedComponents] =
      useState<SelectedComponents>({
         Processor: null,
         Motherboard: null,
         Ram: null,
         Storage: null,
         Monitor: null,
         PowerSupply: null,
         Others: null,
      });

   const selectComponent = (category: string, component: any) => {
      setSelectedComponents((prevState) => ({
         ...prevState,
         [category]: component,
      }));
   };

   const removeComponent = (category: string) => {
      setSelectedComponents((prevState) => ({
         ...prevState,
         [category]: null,
      }));
   };

   return (
      <BuilderContext.Provider
         value={{
            selectedComponents,
            selectComponent,
            removeComponent,
         }}>
         {children}
      </BuilderContext.Provider>
   );
};

export default BuilderContext;
