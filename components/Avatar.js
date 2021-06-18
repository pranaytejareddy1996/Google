function Avatar({url , className }) {
    return <img loading='lazy'  
    className={`h-10 rounded-full cursor-pointer transition duration-1000
    transform hover:scale-125 ${className}` }
    src={url} alt='profile pic'/>        
}

export default Avatar

