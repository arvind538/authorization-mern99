import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      
      <section className='flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] ' >
        
        <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1 mt-10 rounded-full bg-white/50 border border-white">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </div>
          <p className="text-sm text-black/60">Join 12,450+ brands growing with us</p>
        </div>

        <h1 className='text-3xl  text-center  mt-8 text-gray-800 bg-clip-text leading-tight font-medium'>Design a scalable, secure software solution with clean architecture</h1>
        <p className="text-sm text-gray-600 text-center max-w-/[630px] mt-4">
          We design high-impact websites that convert and scale. From sleek interfaces to full stack experiences, we bring your brand to life online.
        </p>

        

        <div className="flex items-center gap-4 mt-8 text-sm">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-md px-7 h-11">
            <Link to="/contact">Connect Now</Link>
          </button>
          <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strockewidth="1" strokeLinecap="round" strokelinjoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>
            <Link to="/services">Join Now</Link>
          </button>
        </div>

        <div className='w-full max-w-/[800px] h-/[3px] mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10'></div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-/[930px] w-full bg-red-400'>
          <div className='text-center '>
            <h2 className='font-medium text-2xl md:text-3xl text-white'>20+</h2>
            <p className='text-xs md:text-sm text-white'>Years Experience</p>
          </div>
          <div className='text-center'>
            <h2 className='font-medium text-2xl md:text-3xl text-white'>12k+</h2>
            <p className='text-xs md:text-sm text-white'>Projects Completed</p>
          </div>
          <div className='text-center'>
            <h2 className='font-medium text-2xl md:text-3xl text-white'>5k+</h2>
            <p className='text-xs md:text-sm text-white'>Happy Customers</p>
          </div>
          <div className='text-center'>
            <h2 className='font-medium text-2xl md:text-3xl text-white'>5+</h2>
            <p className='text-xs md:text-sm text-white'>Countries</p>
          </div>
        </div>
      </section>

      {/* shirt patterns------------------- */}
      <div className="m-5 p-5">
      <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">New Arrivals</h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">Explore the latest additions to our collection.</p>
      <section className="flex flex-wrap items-center justify-center gap-6">
        <a href="#" className='group w-56'>
          <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top' src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop" alt="image"/>
            <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
            <p className='text-xl'>$ 29.00</p>
        </a>
        <a href="#" className='group w-56'>
          <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop" alt="image"/>
            <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
            <p className='text-xl'>$ 39.00</p>
        </a>
        <a href="#" className='group w-56'>
          <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop" alt="image"/>
            <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
            <p className='text-xl'>$ 29.00</p>
        </a>
        <a href="#" className='group w-56'>
          <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop" alt="image"/>
            <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
            <p className='text-xl'>$ 49.00</p>
        </a>
        </section>
        </div>
    </>
  )
}
export default Home;