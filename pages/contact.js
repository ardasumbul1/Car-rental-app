import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone, faEnvelope, faLocation, faStarOfLife } from "@fortawesome/free-solid-svg-icons"; 
import Footer from "../components/Footer"

export default function Contact(){
    return(
        <div>
            <div className="bg-[#655DBB] text-[#FFFFFF]  opacity-40 h-[200px] w-full lg:flex lg:justify-center lg:items-center mt-10 ">
                <h1 className="font-bold text-5xl mt-[5vh] text-center">Contact with us!</h1>
            </div>

            <div className="lg:flex lg:justify-center">
                <div className="lg:w-[50%] p-[3vh]">
                    <h1 className="m-[4vh] text-4xl font-bold">Need more information ?</h1>
                    <p className="m-[4vh] text-xl font-semibold">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 12 years of experience.</p>
                    <p className="m-[4vh] text-xl font-semibold"><FontAwesomeIcon icon={faPhone} size="2xl"  style={{color: "#655dbb",}} />  +90 545 123 67 89</p>
                    <p className="m-[4vh] text-xl font-semibold"><FontAwesomeIcon icon={faEnvelope} size="2xl"  style={{color: "#655dbb",}} /> carlaa@carlaa.com.tr</p>
                    <p className="m-[4vh] text-xl font-semibold"><FontAwesomeIcon icon={faLocation} size="2xl"  style={{color: "#655dbb",}} />  Izmir, Turkey</p>
                </div>
                <div className="lg:w-[50%] p-[5vh] text-xl">
                    <form className="contact-form p-6 bg-gray-100 rounded-lg">
                        <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Full Name <FontAwesomeIcon icon={faStarOfLife} size="xs" className="text-purple-600" /></label>
                        <input type="text" name="name" className="w-full rounded-md border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-600 focus:ring-opacity-50 px-3 py-2 text-gray-600 font-medium" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className=" block mb-1">Email<FontAwesomeIcon icon={faStarOfLife} size="xs" className="text-purple-600" /></label>
                        <input type="email" name="email" className="w-full rounded-md border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-600 focus:ring-opacity-50 px-3 py-2 text-gray-600 font-medium" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="message" className=" block mb-1">Your Message<FontAwesomeIcon icon={faStarOfLife} size="xs" className="text-purple-600" /></label>
                        <textarea name="message" className="w-full rounded-md border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-600 focus:ring-opacity-50 px-3 py-2 text-gray-600 font-medium"></textarea>
                        </div>
                        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md px-4 py-2 transition duration-300 ease-in-out">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}