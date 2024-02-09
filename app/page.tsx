'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image'
import deFlag from '@/media/DE.png'
import itFlag from '@/media/IT.png'
import arrow from '@/media/left-and-right-arrow-white.png';
import '../css/button.css';

import NavBar from '@/components/navbar';
import Footer from '@/components/footer';



export default function Home() {
  const router = useRouter();

  // Funzione per gestire il click sul pulsante di login
  const handleLoginClick = () => {
    // Reindirizza l'utente alla pagina di login
    router.push('/login');
  };

  // Funzione per gestire il click sul pulsante di test
  const handleTestClick = () => {
    // Reindirizza l'utente alla pagina di test
    router.push('/test');
  };

  return (
    //min-h-screen
    <main >

      <div className="flex  flex-col items-center justify-between p-6" >

        <h1 className="flex justify-center mt-8">
          <Image
            src={deFlag}
            width={100}
            height={100}
            alt="Picture of the author"
          />
           <Image
            src={arrow}
            width={100}
            height={100}
            alt="Picture of the author"
            color='white'
          />
           <Image
            src={itFlag}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </h1>
        <div className="flex justify-center mt-8">
          <button className="blue-button" onClick={handleLoginClick}>Login</button>
          <button className="green-button" onClick={handleTestClick}>Test</button>
        </div>

      </div>
      <Footer />
    </main>
  )
}
