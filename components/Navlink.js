import Link from 'next/link';

export default function Navlink({name}){
    return (
        <Link href={"/"+(name==="Home"?"":name.toLowerCase())} className="font-semibold ml-[2vh] mr-[2vh] text-xl ">{name}</Link>
    )
}