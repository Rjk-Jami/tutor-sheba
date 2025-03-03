"use client";
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const SocialMediaShare = ({ id }) => {
    const url = `https://example.com/tuition-list/${id}`;

    return (
        <div className='text-lg font-semibold flex flex-col gap-1 items-center'>
            <div className="">
                <p>sheared this Post:</p>
            </div>
           <div className=" flex gap-2">
           <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                
            >
                <FaFacebook className='text-3xl text-blue-600'></FaFacebook>
            </Link>
        
            <Link
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`}
                target="_blank"
              
            >
                <FaWhatsapp className='text-3xl text-green-600 '></FaWhatsapp>
            </Link>
            
            <Link
                href={`https://t.me/share/url?url=${encodeURIComponent(url)}`}
                target="_blank"
              
            >
               <FaTelegram className='text-3xl text-blue-500'></FaTelegram>
            </Link>
           </div>
        </div>
    );
};

export default SocialMediaShare;