'use client';

import React from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Footer from '@/components/body/footer';
import Navbar from '@/components/body/navbar';

function Providers({ children }: React.PropsWithChildren) {
  

  return (
    <ThemeProvider
    attribute="class"
            
            enableSystem
      disableTransitionOnChange>
      <Navbar/>
      {children}
       <div className='fixed bottom-10 right-14'>
            <ModeToggle/> 
          </div>
          <Footer/>
    </ThemeProvider>
  );
}

export default Providers;