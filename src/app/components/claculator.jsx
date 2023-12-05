"use client"
import { Metrophobic } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'
import eng from "./lang"
const Calculator = () => {
const [kind, setKind]  = useState('Website')
const [type, setType] = useState('portfolio')
const [method, setMethod] = useState('none')
const [pages, setPages] = useState(1)
const [kindPrice, setKindPrice]  = useState(0)
const [typePrice, setTypePrice] = useState(0)
const [methodPrice, setMethodPrice] = useState(0)
// const [pagesPrice, setPagesPrice] = useState(0)
let [total, setTotal] = useState(0)

// let website = 2000
// let mobileApp = 3000
// let personalPortfolio = 2000
// let ecommerce = 4000
// let hotel = 4000
// let registrationForm = 1000
// let ngo = 2000
// let businessPortfolio  = 3000
// let none = 0
// let chapa = 6000
// let stripe = 6000
// let chapaAndStripe = 10000

async function calculate(e){
  e.preventDefault()
  if (kind == "Website"){
    setKindPrice(2000)
  }
  if (kind == "Mobile-App"){
    setKindPrice(3000)
  }
  if (type == "Personal-Portfolio"){
    setTypePrice(1000)
  }
  if (type == "E-commerce"){
    setTypePrice(4000)
  }
  if (type == "Hotel-with-booking"){
    setTypePrice(4000)
  }
  if (type == "Registration-form"){
    setTypePrice(1000)
  }
  if (type == "Hotel-with-out-booking"){
    setTypePrice(1000)
  }
  if (type == "Mobile-App"){
    setTypePrice(3000)
  }
  if (type == "Business-Portfolio"){
    setTypePrice(2000)
  }
  if (type == "NGO-and-Charity"){
    setTypePrice(2000)
  }
  if (type == "Restaurant"){
    setTypePrice(2000)
  }
  if (type == "Events"){
    setTypePrice(2000)
  }
  if (method == "none"){
    setMethodPrice(0)

  }
  if (method == "Chapa"){
    setMethodPrice(6000)

  }
  if (method == "Chapa-and-Stripe"){
    setMethodPrice(10000)

  }
  if (method == "Stripe"){
    setMethodPrice(6000)
  }
  await setTotal(kindPrice+typePrice+methodPrice+((pages-1)*2000))
}
  return (
    <div className=' mt-24'>
<div className=' w-full flex flex-col justify-center items-center'>
   <div className=' flex flex-col justify-center items-center'>

    <h2 className="text-center text-4xl font-bold text-black mt-4 mb-12 md:mb-16">
        {eng.calculateTitle}
      </h2>
      <p className=' text-slate-700 text-start sm:text-center'> {eng.calculateDesc}
      <span className=' font-bold'>{eng.calculateDescSpan}</span>
      </p>
</div>
   </div>

    <div className=' flex flex-col sm:flex-row gap-4 py-4'>
    <div className=' flex justify-center items-center w-auto'>
      <div className=' rounded-md flex flex-col p-4 shadow-md w-full'>
      <div className=' flex flex-col gap-1'>
      <span className=' text-slate-500 text-sm'>{eng.calculatorTypeDisc}</span>
      <select
      value={kind}
      onChange={e=>setKind(e.target.value)} 
      className=" text-black border p-2 rounded-md mb-8">
        
              <option>Website</option>
              <option>Mobile-App</option>
        </select>
      </div>
      <div className=' mb-8 flex flex-col gap-1'>
        <span className=' text-slate-500 text-sm'>{eng.calculatorKindDisc}</span>
      <select
      value={type}
      onChange={e=>setType(e.target.value)}
       className=" text-black border p-2 rounded-md">
              <option>Personal-Portfolio</option>
              <option>E-commerce</option>
              <option>Hotel-with-booking</option>
              <option>Business-Portfolio</option>
              <option>NGO-and-Charity</option>
              <option>Hotel-with-out-booking</option>
              <option>Restaurant</option>
              <option>Events</option>
              {/* <option>E-commerce</option>
              <option>E-commerce</option> */}
        </select>
      </div>
        <div className=' mb-8 text-black'>
            <span>{eng.NumberOfPages}</span>
            <input type='number'
            value={pages}
            onChange={e=>setPages(e.target.value)}
            min={0}
            max={15}
             className=' border p-1 w-12 rounded-md'/>
        </div>
        <div className=' mb-8 text-black flex flex-col gap-1'>
            <span className=' text-slate-500 text-sm'>{eng.calculatorMethodDisc}</span>
            <select
            value={method}
            onChange={e=>setMethod(e.target.value)} 
            className=" text-black border p-2 rounded-md">
                <option>none</option>
                <option>Chapa</option>
                <option>Stripe</option>
                <option>Chapa-and-Stripe</option>
            </select>
        </div>
        <button
        onClick={(e)=>{calculate(e)}} 
        className=' bg-primary-400 mb-2 p-2 rounded-md hover:bg-primary-200 hover:text-black'>
            Set-price
        </button>
        <button
        onClick={(e)=>{calculate(e)}} 
        className=' bg-primary-500 p-2 rounded-md hover:bg-primary-200 hover:text-black'>
            Calculate
        </button>

      </div>
    </div>
    <div className='w-full px-8 bg-slate-50 rounded-md py-2 flex flex-col gap-8 '>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>{eng.Category} {kind} = </h2> <span className='bg-slate-100 px-1 text-green-400'>+{kindPrice}</span>
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>{eng.Type} {type} = </h2> <span className='bg-slate-100 px-1 text-green-400'>+{typePrice}</span>
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>{eng.NumberOfPages}{pages} = </h2> {pages >1?<span className='bg-slate-100 px-1 text-green-400'>+ {(pages-1)*2000}</span>:<span className='bg-slate-100 px-1 text-green-400'>+ 0</span> }
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>{eng.PaymentMethod}{method} = </h2> <span className='bg-slate-100 px-1 text-green-400'>+{methodPrice}</span>
    </div>
    <div className=' flex justify-center items-center mt-8'>
    <h2 className='text-slate-800'>{eng.Total}</h2> <span className='bg-slate-100 px-1 text-xl text-black'>{total} birr</span>
    </div>
    <div className=' flex justify-around items-center'>
        <button className=' toma'>
{eng.CallNow}</button>
 <Link href={'/'} className=' toma'>
    {eng.contact}
 </Link>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Calculator
