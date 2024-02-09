'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';


import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

import '../../css/button.css';


export default function Home() {
  const router = useRouter();
  // Funzione per gestire il click sul pulsante di test
  const login = () => {
    // Reindirizza l'utente alla pagina di test
    router.push('/mainpage');
  };
  login();
  return (

    <div >

    </div>

  )
}
