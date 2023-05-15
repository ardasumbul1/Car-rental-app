import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone, faEnvelope, faLocation, faStarOfLife } from "@fortawesome/free-solid-svg-icons"; 

export default function Footer(){
    return(
        <div className="lg:flex lg:justify-center bg-[#655DBB] lg:text-center text-[#ffffff] p-[3vh] lg:mt-[10vh]">
            <div className="lg:p-[2vh] lg:w-[25%]">
                <p className="text-2xl mt-2 mb-2 font-bold">CARLAA - Car rental</p>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <p className="m-[2vh]  text-xl font-semibold"><FontAwesomeIcon icon={faPhone} size="xl"  style={{color: "#ffffff",}} />  +90 545 123 67 89</p>
                <p className="m-[2vh] text-xl font-semibold"><FontAwesomeIcon icon={faEnvelope} size="xl"  style={{color: "#ffffff",}} /> carlaa@carlaa.com.tr</p>
                <p className="m-[2vh] text-xl font-semibold"><FontAwesomeIcon icon={faLocation} size="xl"  style={{color: "#ffffff",}} />  Izmir, Turkey</p>
            </div>
            <div className="lg:p-[2vh] text-xl lg:w-[25%]">
                <p className="lg:text-2xl mt-2 mb-2 font-bold">COMPANY</p>
                <p className="pt-[1vh] ">Career</p>
                <p className="pt-[1vh] ">Mobile</p>
                <p className="pt-[1vh] ">Blog</p>
                <p className="pt-[1vh] ">Social</p>
            </div>
            <div className="lg:p-[2vh] text-xl lg:w-[25%]">
                <p className="lg:text-2xl mt-2 mb-2 font-bold">WORKING HOURS</p>
                <p className="pt-[1vh] ">Mon - Fri: 9:00AM - 9:00PM</p>
                <p className="pt-[1vh] ">Sat: 9:00AM - 19:00PM</p>
                <p className="pt-[1vh] ">Sun: Closed</p>
            </div>
            <div className="lg:p-[2vh] text-xl lg:w-[25%]">
                <p className="lg:text-2xl mt-2 mb-2 font-bold">SUBSCRIPTION</p>
                <p className="pt-[1vh] mb-4">Subscribe your Email address for latest news & updates.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <form className="flex-grow md:flex-initial">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <input type="email" name="mail" className="appearance-none bg-transparent border-none w-full text-[#ffffff] mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Enter your email address" />
                        <button type="submit" className="bg-purple-400 hover:bg-purple-700 text-white font-medium rounded-md px-4 py-2 transition duration-300 ease-in-out">SUBSCRIBE</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}