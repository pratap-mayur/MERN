import React from 'react';
import MobileList from './MobileList';

const book = [{
     image : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70',
 title : 'iPhone',
 price : '105000'
}

,{
     image : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/8/p/-original-imah4jykf9e4a244.jpeg?q=70',
 title : 'iPhone2',
 price : '105555'
}]

export default function Mobile() {
  return (
    <div>{
        book.map((ele)=>{
      return <MobileList  image={ele.image} title={ele.title} price={ele.price}/>
        })}
    </div>
  );
}
