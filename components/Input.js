
export default function Input(props){
    return(
        <div>
            <input className="mt-1 block w-full rounded-md border-gray-400 border-2 h-10 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type={props.type} name={props.name} />
        </div>
    )
}