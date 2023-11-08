import React, { useState } from 'react'
import './Mainbai2.scss'
import Button from '@mui/material/Button';
export default function Mainbai2() {
    const [product,setProduct]=useState([
        {
            name :"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price : 500,
            quanlity :0,
            id:1
        },
        {
            name :"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8fDA%3D",
            price : 1700,
            quanlity :0,
            id :2
        },
        {
            name :"https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2V8ZW58MHx8MHx8fDA%3D",
            price : 800,
            quanlity :0,
            id : 3
        },
        {
            name :"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5pa2V8ZW58MHx8MHx8fDA%3D",
            price : 1900,
            quanlity :0,
            id : 4
        },
    ])
    const [cart,setCart]=useState([])
    const clickbuy = (id) => {
        /* let arr = product.in */
        console.log(id);
        let arr = product.find((a)=>{
            return a.id == id
        })
       /*  console.log(arr); */
       let result = cart.indexOf(arr)
       if(result == -1){
        setCart([...cart,arr])
       }/* else{
        alert("bạn đã mua rồi") */
       }
    console.log(cart);
   /*  const hadlevalue = (e) => {
        setCart(cart.price = e.target.value)
    } */
  return (
    <>
        <div>
            <div>
                <h2>Product list</h2>
            </div>
            <div>
                <div className='products'>
                    {product.map((item,index) => {
                        return <div key={index} className='product__item'>
                        <img src={item.name}></img>
                    <div className='produc__title'>
                        
                        <p> $$ {item.price} </p>
                        <Button variant="contained" onClick={()=>clickbuy(item.id)}>Mua sản phẩm</Button>
                    </div>
                        </div>
                    } )}

                </div>
            </div>
    </div>
    <div>
        <h2>Cart</h2>
        <div>
            <table>
                <tr>
                    <th >Product</th>
                    <th>Quanlity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                
                    {cart.map((item,index)=>{
                        return<tr>
                                <td><img src={item.name} className='imgcartproduct'></img></td>
                                <td><input type='text' ></input></td>
                                <td><p>$$ : {item.price}</p></td>
                                <td>$$</td>

                        </tr>
                    })}
                
                <tr>
                    <td></td>
                    <td></td>
                    <td>Sumtotal</td>
                    <td>$$</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Tax</td>
                    <td>$$</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>$$</td>
                </tr>
                
            </table>
        </div>
    </div>
    </>
  )
}

