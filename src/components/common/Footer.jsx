import React from 'react'
import { FOOTER_LIST } from '../../utils/Helper'

const Footer = () => {
    return (
        <div className='d-flex gap-4'>
            {FOOTER_LIST.map((obj, index) => (
                <div key={index} className='border p-4 d-flex flex-column justify-content-center align-items-center'>
                    <img src={obj.img} alt="" width={56} />
                    <h3>{obj.heading}</h3>
                    <p>{obj.para}</p>
                   
                </div>
            ))}
        </div>
    )
}

export default Footer