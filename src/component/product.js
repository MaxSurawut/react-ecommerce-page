// eslint-disable-next-line
import React, { useEffect } from 'react'
import { ReactComponent as CartLogo} from '../asset/images/icon-cart.svg'
import './product.css'
import { datas } from './data.js'
import { ReactComponent as CloseBtn} from '../asset/images/icon-close.svg'
import { ReactComponent as NextBtn} from '../asset/images/icon-next.svg'
import { ReactComponent as PrevBtn} from '../asset/images/icon-previous.svg'

export default function Product() {
    let [amount, SetAmout] = React.useState(1)
    let [products] = React.useState(datas) 
    let [idx, SetIdx] = React.useState(0)
    let [isActive, SetActive] = React.useState(false)
    let price = 125

    let {mainImage} = products[idx]

    const increaseAmount = () =>{
        SetAmout(amount +1)  
    }
    const decreaseAmount = () =>{
        if(amount> 0){
            SetAmout(amount -1)
        }else{
            alert('You can not go below 0')
        }
    }

    const showPopup = () =>{
        SetActive(!isActive)
    }
   
    const selectedImage = document.querySelectorAll('.thumbnail')
    selectedImage.forEach((item)=>{
        item.addEventListener('click',()=>{
            selectedImage.forEach((item2)=>{
                item2.addEventListener('click',()=>{
                    if(item !== item2){
                        item.classList.remove('active')
                    }
                })
            })
            item.classList.add('active')
        })
    })
    
    const nextBtn = ()=>{
        if(idx < products.length-1){
            SetIdx(idx+1)
        }else{
            SetIdx(0)
        }
    }
    const prevBtn = ()=>{
        if(idx < 1){
            SetIdx(products.length - 1)
        }else{
            SetIdx(idx - 1)
        }  
    }
   
    

  return (
    <div className='productSection'>
        <div className={`productPopupOverlay ${isActive ? 'show': ''}`}>
            <div className='contentInsidePopup'>
            <CloseBtn fill='hsl(26, 100%, 55%)'  className='closePopup' onClick={()=> SetActive(false)} />
            <div className='productProfilePopup'>
                <img src={mainImage} alt='main'/>
                <span className='nextBtn' onClick={nextBtn}>
                    <NextBtn />
                </span>
                <span className='prevBtn' onClick={prevBtn}>
                    <PrevBtn />
                </span>
            </div>
            <div className='productThumbnail'>
                {
                    products.map((item, i)=>(
                        <span className='thumbnail' onClick={()=> SetIdx(i)} key={item.id}>
                            <img src={item.thumbnaillImage} key={item.id} alt='thumbnail'/> 
                            <span className='overlay'></span>
                        </span>
                    ))
                }
                 
            </div>
            </div>
        </div>
        <div className='productImage'>
            <div className='productProfile' onClick={showPopup}>
                <img src={mainImage}  alt='main'/>
                <span className='nextBtn desktop' onClick={nextBtn}>
                    <NextBtn />
                </span>
                <span className='prevBtn desktop' onClick={prevBtn}>
                    <PrevBtn />
                </span>
            </div>
            <div className='productThumbnail'>
                {
                    products.map((item, i)=>(
                        <span className='thumbnail' onClick={()=> SetIdx(i)} key={item.id}>
                            <img src={item.thumbnaillImage} key={item.id} alt='thumbnail'/> 
                            <span className='overlay'></span>
                        </span>
                    ))
                }
                 
            </div>
        </div>
        <article className='productDes'>
            <p className='companyText'>SNEAKER COMPANY</p>
            <h1 className='productName'>Fall Limited Edition Sneakers</h1>
            <p className='productDetail'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='priceSection'>
                <p className='productPrice'>${price} <span className='productDiscount'>50%</span></p>
                <p className='productNormalPrice'>$250.00</p>
            </div>
            <div className='productAddtoCart'>
                <div className='addtocartNumber'>
                    <span className='minus' onClick={decreaseAmount}>-</span>
                    <span className='number'>{amount}</span>
                    <span className='plus' onClick={increaseAmount}>+</span>
                </div>
                <button className='addtocartBtn'><CartLogo fill='white' className='cartLogo'/>Add to cart</button>
            </div>
        </article>
    </div>
  )
}
