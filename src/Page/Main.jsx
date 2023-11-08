import React, { useState } from 'react'

import Product from './Product';

export default function Main() {
    const [food,SetFood]=useState([
        {
            name:"Bánh đa cua",
            text : "Đặc sản Hải phòng",
            img :"https://cdn.tgdd.vn/Files/2021/05/27/1355157/nang-dau-chia-se-cach-nau-banh-da-cua-chuan-vi-hai-phong-202105271438197828.jpg"
        },
        {
            name:"Bún Cá",
            text : "Đặc sản Hải phòng",
            img :"https://statics.vinpearl.com/bun-ca-ha-noi-1_1686916725.png"
        },
        {
            name:"Bánh canh cá lóc",
            text : "Đặc sản Quảng bình",
            img :"https://daynauan.info.vn/wp-content/uploads/2019/05/banh-canh-ca-loc-vua-ngon-vua-dam-da.jpg"
        },
        {
            name:"hủ tiếu nam vang",
            text : "Đặc sản Hải phòng",
            img :"https://cdn.tgdd.vn/Files/2017/03/21/963404/cach-nau-hu-tieu-nam-vang-ngon-dung-dieu-tai-nha-202208251951367231.jpg"
        },
    ])
  return (
    <div className="d-flex justify-content-around">
        {food.map((item,index) => <div key={index} > <Product product={item}></Product>  </div>)}  
   
    </div>
  )
}
