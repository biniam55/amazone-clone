import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div>
        <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61tE7IcuLmL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC, PS4, PS5, Switch - 3.5mm Audio Jack - Black"
            price={175.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SteelSeries Apex Pro HyperMagnetic Gaming Keyboard — World's Fastest Keyboard — Adjustable Actuation — OLED Screen — RGB – USB Passthrough​"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71HmUNj01VL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
           <Product
            id="90829332"
            title="HANDA HK3 Pro Smart Watch for Men Women, Fitness Tracker Smartwatch with Heart Rate Blood Pressure Sleep Monitor Pedometer Bluetooth Call IP68 Waterproof Activity Tracker (Silver Steel)"
            price={46}
            rating={4}
            image="https://m.media-amazon.com/images/I/71N7ryrADwL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
           <Product
            id="90829332"
            title="Powkiddy X55 Handheld Game Console Built-in 30000 Games, 5.5-Inch IPS RGB, RK3566 CPU, Retro Arcade Handheld Game Console, Portable Video Gaming Console for Kids Adults (256G Green)"
            price={168.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/51s5QwmivFL._AC_SX425_.jpg"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        
        <div className="home__row">
          <Product
            id="90829332"
            title="adidas - Women's 3-Stripes Double Knit Full-Zip - A483"
            price={46.84}
            rating={4}
            image="https://m.media-amazon.com/images/I/61MCj3k73qL._AC_SY445_.jpg"
          />
          
        </div>
      </div>
    </div>
  )
}

export default Home