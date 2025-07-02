/**
 * @copyright 2024 codewithsadee 
 * @license Apache-2.0
 * 
 */

"use-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { BsArrowDownRight } from 'react-icons/bs'
import PropTypes from 'prop-types';
import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";


const rating = 3;

const ReviewCard = ({
    content,
    imgSrc,
    name,
    company,
    words,
    href,
}) => {

    return (
        <div className="relative bg-zinc-800  p-5 rounded-xl flex flex-col lg:min-w-[420px] mb-5">  
        {href && (<Link 
                            href={href} 
                            className="absolute top-2 right-2 text-white text-2xl w-[50px] h-[50px] rounded-full bg-white 
                             transition-all duration-500 flex justify-center items-center hover:-rotate-45 m-6" target="_blank"
                          >
                            <BsArrowDownRight className="text-primary text-3xl " />
                          </Link>)}

            <div className="flex items-center gap-2 mt-0 mb-0">
                
                <figure className="img-box rounded-lg ">
                    <img
                        src={imgSrc}
                        alt={name}
                        width={100}
                        height={100}
                        loading='lazy'
                        className="img-cover rounded-full mr-1.5"
                        
                    />
                </figure>
                
                <div>
                    
                    <div className="flex items-center gap-2 mb-3">
                    
                    {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FBBF24' }} />
                    ))}
                    
                </div>
                    <p>{name}</p>

                    <p className=" text-xs text-zinc-400 tracking-wider">
                        {company}
                    </p>
                    
                    
                </div>
                
            </div>
            
            

            <p className="text-zinc-400 mb-1">
                {content}
            </p>
            <p className=" text-xs text-accent tracking-wider">{words}</p>
        </div>
    )
}

ReviewCard.PropTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}

export default ReviewCard