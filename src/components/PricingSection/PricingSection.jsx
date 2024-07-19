import React from 'react';
import './PricingSection.css';
const PricingCard = ({ title, price, features, popular }) => (
  <div className={`pricing-card ${popular ? 'popular' : ''} ${title === 'WEALTH' || title === 'MINDSET' ? 'custom-pricing-height' : 'custom-pricing-height2'}`}>
    {popular && <div className="popular-tag"><i class='bx bx-info-circle' ></i> Most Popular</div>}
    <p className='pricing-card-header'>{title}</p>
    <div className="price">${price}</div>
    <p className='BilledMonthly'><i class="fa-solid fa-credit-card"></i> Billed Monthly</p>
    <button className=''>Get started</button>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

function PricingSection() {
  const plans = [
    {
      title: "MINDSET",
      price: "19.97",
      features: [
        "Start your Mindset Journey",
        "Active Income Mindset",
        "Fitness & Nutrition",
        "High Ticket Awareness",
        "Masterful Editing",
        "Finance 101",
        "Personal Coach"
      ]
    },
    {
      title: "MONEY",
      price: "49.97",
      features: [
        "Everything in Mindset",
        "Crypto Literacy",
        "Shopify Dropshipping",
        "Intro to AI",
        "High Level Networking",
        "Personal Brand Mastery",
        "Amazon FBA",
        "YouTube Blueprint",
        "Real Estate Basics",
        "Stock & Option Day Trading",
        "Intro To DeFi (Decentralized Finance)"
      ],
      popular: true
    },
    {
      title: "WEALTH",
      price: "99.97",
      features: [
        "Everything in Mindset and Money",
        "Stock & Option Day Trading Advanced",
        "Advanced AI",
        "Crypto Mastery",
        "Real Estate Advanced",
        "Airbnb Arbitrage",
        "Advanced DeFi"
      ]
    }
  ];

  return (
    <div className="PricingSection ">
      <h1 className="custom-header-title">Choose Your <span className="information-container-header-span glow-text">Income Path</span></h1>
     <div className="pricing-container">
        {plans.map((plan, index) => (
             <div className="pricing-card-container">
          <PricingCard key={index} {...plan} />
          </div>
        ))}
     </div>
    </div>
  );
}

export default PricingSection;
