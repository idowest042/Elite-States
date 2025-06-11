import React from 'react'
import { Link } from 'react-router-dom';

const Realestate = () => {
        const imageUrl = props.images?.[0] || props.image || '/placeholder.jpg';
  return (
    <Link>
    <div>
      <div className="overflow-hidden h-64" data-aos="fade-down" >
                <img 
                    src={imageUrl} 
                    alt={props.name} 
                    className="hover:scale-110 transition ease-in-out" 
                />
            </div>
            <p className="pt-3 pb-1 text-sm" data-aos="fade-down" data-aos-delay="100">{props.name}</p>
            <p className="text-sm font-medium" data-aos="fade-down" data-aos-delay="200">${props.price}</p>
            
    </div>
    </Link>
    
  )
}

export default Realestate
