"use client"
import { DictCard } from '@/Models/FlashModels';
import Card from '@/components/Card'
import Image from 'next/image'
import { use, useState } from 'react';

async function getQuotes(): Promise<DictCard> {
  var jj = await fetch("https://api.npoint.io/2cdc369c1349ef558579", { cache: "no-store", });
  let obj: DictCard = await jj.json() as DictCard;
  return obj;
}

export default function Home() {
  let [cnt,setCnt] = useState(0);
  let obj = use(getQuotes());
  
  console.log(obj)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card  cardObj={obj.dict[cnt]} ev={()=>setCnt(cnt++)} />

    </main>
  )
}
