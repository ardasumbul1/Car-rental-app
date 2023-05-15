import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; 

export default function Testimonials(){
    return(
        <div className="lg:mb-[20px] sm:mb-[100vh] mb-[150vh]">
            <div>
                <div className=''>
                <p className="text-5xl font-bold text-center">Client's Testimonials</p>
                <p className="font-semibold text-center lg:pr-[30%] lg:pl-[30%] mt-4">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
            </div>
            <div className="lg:flex lg:justify-center m-[4vh]  h-[400px] items-center">
                
                <div className="shadow-2xl shadow-blue p-6 m-5">
                    <div>
                        <p className="text-xl mr-3 ml-3"><FontAwesomeIcon icon={faQuoteLeft} size="2xl"  style={{color: "#655dbb",}} />    We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.    <FontAwesomeIcon icon={faQuoteRight} size="2xl" style={{color: "#655dbb",}} /></p>
                    </div>
                    <div className="flex justif-center items-center">
                        <img className="w-[120px] h-[120px] rounded-full m-[2vh] mr-[3vh]"src="/gandalf.jpg" alt="" />
                        <div>
                            <p  className="text-2xl font-semibold">Gandalf</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl shadow-blue p-6 m-5">
                    <div>
                    <p className="text-xl mr-3 ml-3"><FontAwesomeIcon icon={faQuoteLeft} size="2xl"  style={{color: "#655dbb",}} />    We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.    <FontAwesomeIcon icon={faQuoteRight} size="2xl" style={{color: "#655dbb",}} /></p>
                    </div>
                    <div className="flex justif-center items-center">
                        <img className="w-[120px] h-[120px] rounded-full m-[2vh] mr-[3vh]"src="/aragorn.jpg" alt="" />
                        <div>
                            <p className="text-2xl font-semibold">Aragorn</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl shadow-blue p-6 m-5">
                    <div>
                    <p className="text-xl mr-3 ml-3"><FontAwesomeIcon icon={faQuoteLeft} size="2xl"  style={{color: "#655dbb",}} />    We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.   <FontAwesomeIcon icon={faQuoteRight} size="2xl" style={{color: "#655dbb",}} /></p>
                    </div>
                    <div className="flex justif-center items-center">
                        <img className="w-[120px] h-[120px] rounded-full m-[2vh] mr-[3vh]"src="/legolas.jpg" alt="" />
                        <div>
                            <p  className="text-2xl font-semibold">Legolas</p>
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}