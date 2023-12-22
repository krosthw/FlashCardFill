"use client"
import Image from 'next/image'
import { use, useState } from 'react';
import prismadb from "@/lib/prismadb";



export default function Home() {
  // const createUser = await prismadb.card.create({ data: user })
  return (
    //min-h-screen
    <div className="flex  flex-col items-center justify-between p-10 pl-0 pr-0 ">
      <form className="max-w-sm mx-auto">
        <div className="mb-2">
          <label htmlFor="latoA" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lato A</label>
          <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-2">
          <label htmlFor="latoB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lato B</label>
          <input type="text" id="latoB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="pron" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pronuncia</label>
          <input type="text" id="pron" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        <div className="mb-2">
          <a href='/' type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</a>
        </div>
      </form>

    </div>
  )
}
