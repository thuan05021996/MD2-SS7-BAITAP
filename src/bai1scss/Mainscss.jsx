import React, { useState } from 'react'
import './Mainscss.scss'
import Listproduct from './Listproduct'
import Product from '../Page/Product'

export default function Mainscss() {
    const [superman,setSuperman]=useState([
        {
            name:"Siêu nhân Cuồng Phong",
            img : "https://xkld.thanhgiang.com.vn/wp-content/uploads/2021/03/gaorangers-cover.jpg",
        },
        {
            name:"Siêu nhân Gao",
            img : "https://genk.mediacdn.vn/2017/unnamed-file-1503649109771.jpg",
        },
        {
            name:"Siêu nhân Điện Quang",
            img : "https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/meo%20vat/phim-sieu-nhan-7.jpg",
        },
        {
            name:"Siêu nhân Khủng Long",
            img : "https://tokuvn.com/wp-content/uploads/2016/08/Power-Rangers-Dino-Thunder-thanh-vien.png",
        },
        {
            name:"Kamenraider",
            img : "https://i.ytimg.com/vi/Kbqy2itP6aA/maxresdefault.jpg",
        },
    ])
  return (
    <div className='aaa'>
    {superman.map((e,i)=><div  className='body' key={i}><Listproduct man={e}></Listproduct></div>)}
        {/* <div className='main'>
            <div className='product'>
                <img></img>
                <div className='content'>
                <h2>Tiêu đề</h2>
                <p>Nội dung</p>
                <button>Click để mua</button>
                </div>
            </div>
        </div> */}
    </div>
  )
}
