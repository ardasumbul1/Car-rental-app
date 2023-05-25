import Footer from "../components/Footer"


export default function About(){
    return(
        <div>
            <h1 className="text-5xl font-bold text-center mt-10">ABOUT US</h1>
            <div className="lg:flex lg:justify-center lg:items-center p-[15vh]">
                <div className="flex justify-center">
                    <img className="" src="/team.jpg" alt="" />
                </div>
                <div className="ml-10">
                        <p className="text-3xl font-bold">Carlaa</p>
                        <p className="mt-5 font-semibold">Setting out with the motto ‘the new generation rent-a-car’ to introduce a new kind of understanding to the car rental sector, Carlaa aims to provide its customers with distinguished services that make the difference.</p>
                        <p className="mt-10 font-semibold">Founded with 100% of Turkish capital, Carlaa is the only Turkish rent-a-car brand with a global vision. The brand is designed to offer a corporate approach in line with the expectations of its customers who rent for business and for private use, yet the major feature that distinguishes Garenta from any other global and corporate rent-a-car company is its technological infrastructure, one that is developed specifically to ensure the comfort and satisfaction of its customers.</p>
                        <p className="mt-10 font-semibold">Carlaa provides confidence and support in every step of the rental process, ensures confidence and support at every step. In designing its products and services GARENTA thoroughly considers the expectations of customers and aims at exceeding these by exploiting the technology that customers need in renting a vehicle.</p>
                </div>
            </div> 
            <Footer />
        </div>

    )
}