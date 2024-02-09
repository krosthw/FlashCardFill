"use client"
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { ClerkProvider } from '@clerk/nextjs'


import { DictCard } from '../../models/flashModels';
import Card from '../../components/card'

import { use, useState } from 'react';

async function getQuotes(): Promise<DictCard> {
  var jj = await fetch("https://api.npoint.io/2cdc369c1349ef558579", { cache: "no-store", });
  let obj: DictCard = await jj.json() as DictCard;
  return obj;
}

export default function Home() {
  let [cnt, setCnt] = useState(0);
  let obj = use(getQuotes());

  console.log(obj)
  return (
    //min-h-screen
    <ClerkProvider>
      <main >
        <NavBar />
        <div className="flex  flex-col items-center justify-between p-6" >
          <Card cardObj={obj.dict[cnt]} ev={() => setCnt(cnt++)} />
        </div>
        <Footer />
      </main>
    </ClerkProvider>
  )
}