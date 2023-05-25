import Model from "../components/Model"
import Footer from "../components/Footer"

export default function Models(){
    return(
        <div>
            <div className="p-10 mt-20 ">
            <h1 className="text-5xl font-bold text-center">MODELS</h1>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                </div>
            </div>
            <Footer />
        </div>
    )
}