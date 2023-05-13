
export default function Car(props){

    return(
        <div className="flex justify-center items-center ">
            <div>
                <img className="w-[20vh] h-[20vh] lg:w-[90vh]  lg:h-[60vh]" src={props.image} alt="ford car" />
            </div>
            <div className="hidden lg:flex">
            <table className="ml-[5vh] w-[400px] border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-[#655DBB]">
                    <th className="text-center text-xl border border-gray-500 px-4 py-2 text-[#ffffff]" colSpan="2">{props.price+" /per day"}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Model</td>
                    <td className="border border-gray-400 px-4 py-2">{props.model}</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Mark</td>
                    <td className="border border-gray-400 px-4 py-2">{props.mark}</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Year</td>
                    <td className="border border-gray-400 px-4 py-2">{props.year}</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Doors</td>
                    <td className="border border-gray-400 px-4 py-2">{props.doors}</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Transmission</td>
                    <td className="border border-gray-400 px-4 py-2">{props.transmission}</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                    <td className="font-semibold border border-gray-400 px-4 py-2">Fuel</td>
                    <td className="border border-gray-400 px-4 py-2">{props.fuel}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}