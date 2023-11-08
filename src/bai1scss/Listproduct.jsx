import React from 'react'
import './Listproducscss.scss'


export default function Listproduct({man}) {
    console.log(man);
  return (
    <>
        <div className='main'>
            <div className='product'>
                <img src={man.img}></img>
                <div className='content'>
                <h2>{man.name}</h2>
                <p>Nội dung</p>
                <button>Click để mua</button>
                </div>
            </div>
        </div>
    </>
  )
}
