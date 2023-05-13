import Head from 'next/head';
import Booking from "../components/Booking"
import Cards from "../components/Cards"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center lg:m-[15vh] m-[5vh]">
        <div className="items-center w-[60vh]">
          <h2 className="font-bold text-3xl mb-[3vh]">Plan your journey now</h2>
          <p className="text-xl">Rent the car you need to start your amazing trip. Affordeble prices, various models, easy payment, and much more.</p>
          <div className='pt-5'>
            <button className=" text-slate-50  mt-3 mr-3 pl-5 pr-5 pt-3 pb-3 bg-[#655DBB] rounded" type="button">Rent a Car</button>
            <button className="  mt-3  pl-5 pr-5 pt-3 pb-3 border-2 text-[#655DBB] border-[#655DBB] rounded" type="button">Learn More</button>
          </div>
        </div>
        <div className="md:w-[800px] hidden md:flex xl:w-[1000px]">
          <img className="w-[100vh] "src="/honda-car.png" alt="car free transparent png @transparentpng.com"></img>
        </div>

      </div>
      <Booking />
      <Cards />
      <div className='p-[15px] mt-20 bg-[#ECF2FF] m-20 rounded pt-10'>
        <h1 className="lg:text-3xl font-bold text-center text-slate-400 mb-10">POPULAR CARS</h1>
        <Slider />
      </div>

    </div>
    
  )
}
