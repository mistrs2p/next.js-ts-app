"use client";

import { Button } from '@/components/ui/button';
import axios from 'axios';
import React from 'react'
import { useState } from "react";

interface Quote {
    quote: string;
    author: string;
    category: string;
  }
  const generateQuote = async() => {
    await axios.get('/api').then((response) =>{
        console.log(response)
    })
  }
export default function Quote() {
  const [quote, setQuote] = useState<Quote>();

    
  return (
    <div className='bg-blue-300 w-full h-[80vh] flex flex-col items-center justify-center'>
        <Button onClick={generateQuote}>Generate Quote</Button>
        <div>
            <h2>{quote?.quote}</h2>
            <span>{quote?.author}</span>
        </div>
    </div>
  )
}
