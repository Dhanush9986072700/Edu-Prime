import React from 'react';
import {
  LuTrendingUp,
  LuGlobe,
  LuUsers,
  LuShieldCheck,
  LuSparkles,
  LuHandshake
} from 'react-icons/lu';

import '../../sass/components/InvestmentBenefit.scss';

const benefits = [
  {
    icon: <LuTrendingUp />,
    title: "High ROI Opportunities",
    description: "Investing internationally can offer significant returns in emerging and established markets."
  },
  {
    icon: <LuGlobe />,
    title: "Global Expansion",
    description: "Gain access to global markets and diversify your investment portfolio effectively."
  },
  {
    icon: <LuUsers />,
    title: "Networking Benefits",
    description: "Connect with business leaders and professionals across industries worldwide."
  },
  {
    icon: <LuShieldCheck />,
    title: "Secure Investment",
    description: "Robust legal frameworks ensure your investments remain safe and compliant."
  },
  {
    icon: <LuSparkles />,
    title: "Innovative Ventures",
    description: "Be part of cutting-edge industries and innovative business opportunities."
  },
  {
    icon: <LuHandshake />,
    title: "Partnership Potential",
    description: "Explore joint ventures and collaborations to boost your business interests."
  }
];

const InvestmentBenefits = () => {
  return (
    <section className="investment-benefits">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Investor Visa</span>
          <h2>Investment Benefits</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefits-grid__dividers"></div>
          {benefits.map((item, idx) => (
            <div className="benefit-cell" key={idx}>
              <div className="icon-box">
                {item.icon}
              </div>
              <div className="text-box">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;

