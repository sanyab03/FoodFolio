import React from 'react';
import Wastemoney from "../assets/wasted-money.jpg";
import Hunger from "../assets/hunger.jpg";
import Resources from "../assets/resources.jpg";
import underline1 from "../assets/underline-heading.png";
import Arrow1 from "../assets/arrow1.png";
import Sun from "../assets/Highlight_05.png";

const Problems = () => {
  return (
    <div id="problems">
      <div class="the-problems">
        <div class="problems-section1">
            <div class="heading-highlights">
                <img id="highlight-heading" src={Sun} alt="Sun Photo"/><h1 id="heading-problems">Why Was FoodFolio <span className="created"> Created ? <img id="underline1" src ={underline1} alt = "underline"/></span></h1><img id="arrow1" src={Arrow1} alt="arrow"/>
                </div>          
            <div class="cards">
                <div class="card1">
                    <img id="WasteMoney" src={Wastemoney} alt ="Waste of Money photo"/>
                    <h1>Wasted Money</h1>
                    <p>Food waste leads to financial losses.</p>
                    <span id="para-highlights">Globally, we waste ₹92,000 crores annually.</span> 
                    <p>
                    Reduce waste to save money and support businesses.</p></div>
                <div class="card2">
                <img id="hunger" src={Hunger} alt="Poor hungry children photo"/>
                    <h1>Fighting Hunger</h1><p>While we throw away food, many face hunger. </p>
                        <p>Reduce food waste to ensure a food-secure community.</p></div>
                <div class="card3">
                <img id="resources" src={Resources} alt="Farming photo"/>
                    <h1>Efficient Resource Use</h1>
                    <p>Wasting food wastes resources like water, energy, and land.</p>
                    <p>Minimize waste to use resources efficiently and create a sustainable neighborhood.</p>
                    </div>   
            </div>
        </div>
    </div>
    </div>
  );
};

export default Problems;
