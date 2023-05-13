import Input from "./Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMapLocation, faCar, faCalendar} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Booking(){
    return(
        <div className="p-[8vh]  rounded shadow-2xl shadow-blue lg:m-[10vh] m-[1vh]">
            <h1 className="font-bold text-3xl pb-[4vh]">Book a car</h1>
            <div className="grid lg:grid-rows-2 grid-rows-6  grid-flow-col lg:gap-8 gap-1">                
                <div>
                    <label className="block font-semibold font-xl text-gray-700" htmlFor="dropplace"><FontAwesomeIcon style={{fontSize:"25px", color:"#655DBB"}} icon={faMapLocation}></FontAwesomeIcon> Drop-of place</label>
                    <select  className="mt-1 block w-full rounded-md border-gray-400 border-2 h-10 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="cars" id="cars">
                        <option value="Izmir">İzmir</option>
                        <option value="Istanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Antalya">Antalya</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold font-xl text-gray-700" htmlFor="pickup"><FontAwesomeIcon style={{fontSize:"25px", color:"#655DBB"}} icon={faMapLocation}></FontAwesomeIcon> Pick-up place</label>
                    <select  className="mt-1 block w-full rounded-md border-gray-400 border-2 h-10 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="cars" id="cars">
                        <option value="Izmir">İzmir</option>
                        <option value="Istanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Antalya">Antalya</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold font-xl text-gray-700" htmlFor="pickupdate"><FontAwesomeIcon style={{fontSize:"25px", color:"#655DBB"}} icon={faCalendar}></FontAwesomeIcon> Pick-up date</label>
                    <Input name="pickupdate"  type="date" />
                </div>
                <div>
                    <label className=" w-full font-semibold block font-xl text-gray-700" htmlFor="dropdate"><FontAwesomeIcon style={{fontSize:"25px", color:"#655DBB"}} icon={faCalendar}></FontAwesomeIcon> Drop-up date</label>
                    <Input name="dropdate"  type="date" />
                </div>
                <div>
                    <label className="block font-xl font-semibold" htmlFor="type"><FontAwesomeIcon style={{fontSize:"25px", color:"#655DBB"}} icon={faCar}></FontAwesomeIcon> Choose a car type</label>
                    <select  className="mt-1 block w-full rounded-md border-gray-400 border-2 h-10 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="cars" id="cars">
                        <option value="SUV">SUV</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Minivan">Minivan</option>
                    </select>
                </div>


                <div class="flex justify-center mt-8">
                    <button className=" text-slate-50 w-full bg-[#655DBB] rounded h-9.5 ">BOOK</button>
                </div>
            
            </div>

        </div>
        
    )
}