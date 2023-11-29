import Link from 'next/link'
import React from 'react'

const Calculator = () => {
  return (
    <div>
<div className=' w-full flex flex-col justify-center items-center'>
   <div className=' flex flex-col justify-center items-center'>

    <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        Calculator
      </h2>
      <p className=' text-slate-700 text-center'>
      for now or for your future projects you can calculate the money your project costs with our firm, the price you get here is the cheapest in the market, <span className=' font-bold'>get your envisioned project done for cheep</span>
      </p>
</div>
   </div>

    <div className=' flex gap-4 p-10'>
    <div className=' flex justify-center items-center w-full'>
      <div className=' rounded-md flex flex-col gap-8 p-5 shadow-md w-full'>
      <div className=' flex flex-col gap-1'>
      <span className=' text-slate-500 text-sm'>Do you want a Website or a Mobile App</span>
      <select className=" text-black border p-2 rounded-md">
        
              <option>Website</option>
              <option>Mobile-App</option>
        </select>
      </div>
      <div className=' flex flex-col gap-1'>
        <span className=' text-slate-500 text-sm'>What type of website/app do you want?</span>
      <select className=" text-black border p-2 rounded-md">
              <option>portfolio</option>
              <option>e-commerce</option>
              <option>hotel</option>
              <option>registration-form </option>
        </select>
      </div>
        <div className=' text-black'>
            <span>Number of Pages: </span>
            <input type='number'
            min={0}
            max={15}
             className=' border p-1 w-12 rounded-md'/>
        </div>
        <div className=' text-black flex flex-col gap-1'>
            <span className=' text-slate-500 text-sm'>*select a payment method only if your project needs a payment method </span>
            <select className=" text-black border p-2 rounded-md">
                <option>none</option>
                <option>Chapa</option>
                <option>Stripe</option>
                <option>Chapa and Stripe</option>
            </select>
        </div>
        <button className=' bg-green-400 p-2 rounded-md hover:bg-green-300 hover:text-slate-200'>
            Calculate
        </button>

      </div>
    </div>
    <div className='w-full bg-slate-50 rounded-md p-2 flex flex-col gap-8'>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>Category:  = Website</h2> <span className='bg-slate-100 px-1 text-green-400'>+2000</span>
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>Type: portfolio = </h2> <span className='bg-slate-100 px-1 text-green-400'>+1000</span>
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>Number of Pages: 3 = </h2> <span className='bg-slate-100 px-1 text-green-400'>+2000</span>
    </div>
    <div className=' mt-2 flex gap-1'>
        <h2 className='text-slate-800'>Payment Method:  = </h2> <span className='bg-slate-100 px-1 text-green-400'>None</span>
    </div>
    <div className=' flex justify-center items-center mt-8'>
    <h2 className='text-slate-800'>Total = </h2> <span className='bg-slate-100 px-1 text-xl text-black'>5000 birr</span>
    </div>
    <div className=' flex justify-around items-center'>
        <button className=' bg-green-400 rounded-full p-2 flex shadow-md'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
 Call Now</button>
 <Link href={'/'} className=' bg-green-400 rounded-full p-2 flex shadow-md'>
    Contact Us
 </Link>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Calculator
