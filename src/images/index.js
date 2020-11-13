import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <section className="posts">
      <h1 className="heading">Check out these EPIC Destinations!</h1>
      <div className="wrapper">
        <div className="col01">
          <CardItem
            url="/services"
            label="Adventure"
            src="images/img-home.jpg"
            alt="foto de uma praia"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
          />
          <CardItem
            url="/services"
            label="Luxury"
            src="images/img-2.jpg"
            alt="foto de uma praia"
            title="Travel through the Islands of Bali in a Private Cruise"
          />
        </div>
        <div className="col02">
          <CardItem
            url="/services"
            label="Mystery"
            src="images/img-3.jpg"
            alt="foto de uma praia"
            title="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          />
          <CardItem
            url="/products"
            label="Adventure"
            src="images/img-4.jpg"
            alt="foto de uma praia"
            title="Experience Football on Top of the Himilayan Mountains"
          />
          <CardItem
            url="/services"
            label="Adrenaline"
            src="images/img-8.jpg"
            alt="foto de uma praia"
            title="Ride through the Sahara Desert on a guided camel tour"
          />
        </div>
      </div>
    </section>
  )
}

export default Cards
