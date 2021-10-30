import React from "react";
import './phones.css'


const Mobile = ({mobiles}) => {
  return (
      <div>
          <h1>List of available phones:</h1>
          {mobiles.slice(0,1).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/>  
                      <div class="name1"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price1"><h2>price: {x.price}$</h2></div>
                      <button class="button1">info</button>
                  </div>
          ))}
          {mobiles.slice(1,2).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/>   
                      <div class="name2"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price2"><h2>price: {x.price}$</h2></div>
                      <button class="button2">info</button>
                  </div>
          ))}
          {mobiles.slice(2,3).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name3"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price3"><h2>price: {x.price}$</h2></div>
                      <button class="button3">info</button>
                  </div>
          ))}
          {mobiles.slice(3,4).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name4"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price4"><h2>price: {x.price}$</h2></div>
                      <button class="button4">info</button>
                  </div>
          ))}
          {mobiles.slice(4,5).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name5"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price5"><h2>price: {x.price}$</h2></div>
                      <button class="button5">info</button>
                  </div>
          ))}
          {mobiles.slice(5,6).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name6"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price6"><h2>price: {x.price}$</h2></div>
                      <button class="button6">info</button>
                  </div>
          ))}
           {mobiles.slice(6,7).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name7"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price7"><h2>price: {x.price}$</h2></div>
                      <button class="button7">info</button>
                  </div>
          ))}
          {mobiles.slice(7,8).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name8"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price8"><h2>price: {x.price}$</h2></div>
                      <button class="button8">info</button>
                  </div>
          ))}
          {mobiles.slice(8,9).map((x) => (
                  <div key={x.id}>
                      <img src={x.imageFile} alt={x.name} width="200" height ="133"/> 
                      <div class="name9"><h2>{x.name} - {x.manufacturer}</h2></div>
                      <div class="price9"><h2>price: {x.price}$</h2></div>
                      <button class="button9">info</button>
                  </div>
          ))}
      </div>
      
  )
 
};

export default Mobile