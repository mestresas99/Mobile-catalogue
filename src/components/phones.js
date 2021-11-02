import React from "react";
import './phones.css'
import a from './images/450_1000.jpeg';
import b from './images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg';
import c from './images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg';
import d from './images/gris1.jpg';
import e from './images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg';
import f from './images/iphone-12-white-select-2020.jpeg';
import g from './images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg';
import h from './images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg';
import i from './images/Samsung-Galaxy-Note-20-verde.jpg.webp';


const Mobile = ({mobiles}) => {


  return (
      <div>
        <h4>Available Models:</h4>
        <div class="models">
          {mobiles.map((x) => (
                  <div key={x.id}>
                        <ul>      
                        <li>{x.name}</li>
                       </ul>
                     </div>             
            ))}
        </div>  
        <h4>Top brands:</h4>
        <div class="brands">
        {mobiles.map((x) => (
                  <div key={x.id}>
                        <ul>
                        <li>{x.manufacturer}</li>
                       </ul>
                     </div>             
            ))}           
        </div> 
        <h4>Web pages:</h4>
        <div class="links">
                        <ul>
                        <li><a href="https://www.apple.com">Apple page</a></li>
                        <li><a href="https://www.samsung.com/es/">Samsung page</a></li>
                        <li><a href="https://consumer.huawei.com/es/">Huawei page</a></li>
                       </ul>           
        </div>   
        <div class="list">
        <h3>Complete catalogue:</h3>       
          {mobiles.slice(0,1).map((x) => (
                  <div key={x.id}>
                    <div class="mobile1">
                    <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                                
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button1" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}> display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(1,2).map((x) => (
                  <div key={x.id}> 
                  <div class="mobile2"> 
                  <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button2" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(2,3).map((x) => (
                  <div key={x.id}>
                      <div class="mobile3">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button3" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(3,4).map((x) => (
                  <div key={x.id}>
                       <div class="mobile4">
                       <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>     
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button4" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(4,5).map((x) => (
                  <div key={x.id}>
                      <div class="mobile5">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                    
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button5" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(5,6).map((x) => (
                  <div key={x.id}>
                      <div class="mobile6">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button6" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
           {mobiles.slice(6,7).map((x) => (
                  <div key={x.id}>
                      <div class="mobile7">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button7" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(7,8).map((x) => (
                  <div key={x.id}>
                      <div class="mobile8">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button8" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                  </div>
          ))}
          {mobiles.slice(8,9).map((x) => (
                  <div key={x.id}>
                      <div class="mobile9">
                      <p>{(() => {switch (x.imageFile) {
                                case "./images/450_1000.jpeg": return <img src={a} alt={x.name} width="200" height ="170"/>;
                                case "./images/235548_ed97333e-0c9d-44bc-8076-3e98c00b59ac.jpg": return <img src={b} alt={x.name} width="200" height ="170"/>;
                                case "./images/a4012e4f-8fae-45a5-88b0-2ecec9b2d2e3_1.18a6f3642dab5336c94ebae20262d64b.jpeg": return <img src={c} alt={x.name} width="200" height ="170"/>;
                                case "./images/gris1.jpg": return <img src={d} alt={x.name} width="200" height ="170"/>;
                                case "./images/Huawei-Smartphone-Nova-8i-Starry-Black-(HMS)-9.jpg": return <img src={e} alt={x.name} width="200" height ="170"/>;
                                case "./images/iphone-12-white-select-2020.jpeg": return <img src={f} alt={x.name} width="200" height ="170"/>;
                                case "./images/iPhone-X-64GB-Silver-1-1-1-1.png.jpeg": return <img src={g} alt={x.name} width="200" height ="170"/>;
                                case "./images/picsart_09-04-02-35-341-b3c1ca0e5aaccbf09415998581258380-640-0.jpg": return <img src={h} alt={x.name} width="200" height ="170"/>;
                                case "./images/Samsung-Galaxy-Note-20-verde.jpg.webp": return <img src={i} alt={x.name} width="200" height ="170"/>;
                                default: return <img src={x.imageFile} alt={x.name} width="200" height ="170"/>;
                            }
                    })()}
                    </p>
                      <h2>{x.name} - {x.manufacturer}</h2>
                      <h2>price: {x.price}$</h2>
                      <button class="button9" onClick={()=>window.alert("Name: "+x.name+"\nManufacturer: "+x.manufacturer+"\nDescription: "+x.description + "\nColor: " +x.color + "\nScreen: "+x.screen +"\nProcessor: "+x.processor +"\nRam: "+x.ram)}>display information</button>
                     </div> 
                </div>
          ))}
      </div>
      </div>
      
  )
 
};

export default Mobile