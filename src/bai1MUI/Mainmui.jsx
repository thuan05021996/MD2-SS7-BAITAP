import React, { useState } from 'react'
import Productmui from './Productmui'
import Maincart from './Maincart'


export default function Mainmui() {
    const [animals,setAnimals]=useState([
        {
        name :"vẹt Agola",
        img :"https://cdn.pixabay.com/photo/2017/12/08/18/45/parrot-3006466_960_720.jpg",
        id : 1

        },
         {
        name :"Cá voi",
        img :"https://cdnmedia.baotintuc.vn/Upload/XmrgEWAN1PzjhSWqVO54A/files/2023/09/2709/1.jpg",
        id : 2

        },
        {
            name :"Báo đen",
            img :"https://kenh14cdn.com/2018/2/20/at-least-150-panthers-are-on-the-loose-in-britain-619160-1519066636314514620602.jpg",
            id : 3
    
        },
    ])
    const [carts,setCarts]=useState([]);
    const buysproduct = (id) => {
        let result = animals.find((e)=>{
            return e.id == id
        })
        let arr =carts.indexOf(index)
        if( arr == -1){
            setCarts([...carts,index])
        }else {
            alert("Đã có sản phẩm này trong giỏ hàng rồi")
        }
    }

  return (
    <div>
        <div style={{display:'flex',justifyContent : 'space-around',marginTop:'20px'}}>
        {animals.map((item,index) => <div key={index}> <Productmui animals={item}  buysanimals={buysproduct}></Productmui></div>)}
       
        </div>
        <Maincart cart={carts} ></Maincart>
    </div>
    
  )
}
