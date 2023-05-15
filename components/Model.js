
export default function Model(){
    return(
        <div className="rounded shadow-2xl shadow-blue  p-3 flex justify-center m-[3vh]">
            <div className="w-[35vh]">
                <img  src="/tesla.jpg" alt="car" />

            <div>
                <div className="pt-3 pb-3">
                    <p className="text-left text-3xl font-bold"> <span className=" text-[#41644A] ">45$ </span> /per day</p>
                </div>
                    <div className="border-2 border-[#DBDFEA] p-2 grid grid-cols-2">
                    <p><span className="text-xl font-semibold">Model:</span>Model X</p> 
                    <p><span className="text-xl font-semibold">Type: </span> Manual</p>
                    <p><span className="text-xl font-semibold">Fuel: </span> Diesel</p>
                    <p><span className="text-xl font-semibold">Door:</span> 4</p>
                </div>
                <div>
                    <button className="bg-[#655DBB] text-slate-50 font-bold pr-[3vh] pl-[3vh] pt-[2vh] pb-[2vh] rounded w-full mt-3" type="button">BOOK</button>
                </div>
            </div>

            </div>
        </div>
    )
}