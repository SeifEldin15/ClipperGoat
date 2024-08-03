import React from 'react';
import './PricingSection.css';

const PricingCard = ({ title, price, description, features, soonToCome, popular }) => (
  <div className={`pricing-card ${popular ? 'popular' : ''} ${title === 'Enterprise'? 'custom-pricing-height2' : 'custom-pricing-height'}`}>
    {popular && <div className="popular-tag"><i className='bx bx-info-circle' ></i> Most Popular</div>}
    <p className={`pricing-card-header ${title === 'Enterprise'? 'custom-pricing-title' : ''}`}>{title}</p>
    <div className="price">${price}</div>
    <p className='BilledMonthly'><i className="fa-solid fa-credit-card"></i> Billed Monthly</p>
    <p className='description'>{description}</p>
    <button className='get-started-btn'>Get started</button>
    <ul className='features-list'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <ul className='soon-to-come-list'>
      <div><strong>Soon to Come:</strong></div>
      {soonToCome.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

function PricingSection() {
  const plans = [
    {
      title: "Clippreneur",
      price: "120",
      description: "Ideal for solo short-form editors managing 1-6 accounts.",
      features: [
        "300 Credits",
        "300 Video Cleans or 300 Downloads",
        "Meta Magic: (Metadata Removal + AI Video Editor)",
        "AI Advanced Photoshop Video Editor",
        "Updated to Bypass July 7th IG Patch on Content Detection",
        "15% Affiliate Commission",
      ],
      soonToCome: [
        "Video Game Splitter",
        "Auto-Poster",
        "Auto-DM’er",
        "Account Warmer",
      ]
    },
    {
      title: "Enterprise",
      price: "997",
      description: "Tailored for creators or agencies requiring a dedicated team to deliver customized solutions. This package ensures your content aligns with the latest trends and algorithms, facilitating significant business growth.",
      features: [
        "4000 Credits",
        "4000 Video Downloads",
        "Includes all Features in Clippreneur & Agency",
        "Custom Integrations and Automations",
        "Personalized Enhancements and Optimizations",
        "Dedicated Support and Maintenance",
      ],
      soonToCome: [
        "Account Management",
        "Advanced Analytics",
        "Full Suite of Automation Tools",
      ],
      popular: true
    },
    {
      title: "Agency",
      price: "300",
      description: "Designed for agency owners or creators operating 10+ accounts and posting multiple times a day.",
      features: [
        "1000 Credits",
        "Includes 1000 Short Video Downloads",
        "Includes all of the Features in Clippreneur",
        "Priority Support",
        "25% Affiliate Commission",
      ],
      soonToCome: [
        "Customer Relationship Managers",
        "Auto-Emailer",
        "Auto-Texter",
        "GUI Web Builder",
        "Custom Sites",
      ],
    },
   
  ];

  return (
    <div className="PricingSection">
      <h1 className="custom-header-title">Choose Your <span className="information-container-header-span glow-text-test">Perfect Plan</span></h1>
      <p className="custom-header-subtitle">Flexible pricing to suit your needs, whether you're a solo creator or a large agency.</p>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className="pricing-card-container" key={index}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
