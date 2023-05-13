
export default function Cards(){
    return(
        <div  className=" mt-[15vh] md:flex md:justify-center">

            <div className="m-10">
                <div className="">
                    <img className="w-[40vh] h-[40vh] rounded-full object-contain border-2" src="/front-car.jpg" alt="" />
                </div>
                <div className=" w-[40vh] p-3">
                    <h2 className="font-bold text-2xl flex  justify-center pb-3">Choose your car</h2>
                    <p className="text-xl text-center ">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
            </div>
            <div className="m-10">
                <div className="">
                    <img className="w-[40vh] h-[40vh] rounded-full object-contain border-2" src="/call-center.jpg" alt="" />
                </div>
                <div className=" w-[40vh] p-3">
                    <h2 className="font-bold text-2xl flex  justify-center  pb-3">Contact Salesman</h2>
                    <p className="text-xl text-center ">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
            </div>
            <div className="m-10">
                <div className="">
                    <img className="w-[40vh] h-[40vh] rounded-full object-contain border-2" src="/driving.jpg" alt="" />
                </div>
                <div className="w-[40vh] p-3">
                    <h2 className="font-bold text-2xl flex  justify-center  pb-3">Enjoy your drive</h2>
                    <p className="text-xl text-center ">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
 
        </div>
    )
}