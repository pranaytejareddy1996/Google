import Image from "next/image"

function Avatar({url , className }) {
    return <Image loading='lazy'  
    className={`h-10 rounded-full cursor-pointer transition duration-1000
    transform hover:scale-125 ${className}` }
    src={url} alt='profile pic'
    width={35} height={35}/>        
}

export default Avatar

