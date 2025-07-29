// src/data/investmentPrograms.js

// Import flag assets
import FlagFrance from "../images/flags/france.png";
import FlagGreece from "../images/flags/Greece.png";
import FlagPortugal from "../images/flags/Portugal.png";
import FlagUSA from "../images/flags/USA.png";
import FlagCanada from "../images/flags//canada.png";
import FlagSingapore from "../images/flags/Singapore.png";
import FlagUAE from "../images/flags/UAE.png";
import FlagAustralia from "../images/flags/Australia.png";
import FlagNewZealand from "../images/flags/New-zeland.png";
import FlagMalta from "../images/flags/Malta.png";
import FlagSpain from "../images/flags/Sweden.png";
import FlagTurkey from "../images/flags/turkey.png";
import FlagIreland from "../images/flags/Ireland.png"
import FlagCyprus from "../images/flags/cyprust.png";
import FlagItaly from "../images/flags/Italy.png";
import FlagGrenada from "../images/flags/grenada.png";
import FlagAntigua from "../images/flags/Antigua-barbuda.png";
import FlagDominica from "../images/flags/Dominica.png";
import FlagStKitts from "../images/flags/st-kitts-nevis.png";
import FlagPanama from "../images/flags/Panama.png";
import FlagMexico from "../images/flags/Malta.png";
import FlagThailand from "../images/flags/thailand.png";
import FlagMalaysia from "../images/flags/malaysia.png";
import FlagSouthAfrica from "../images/flags/southkorea.png";
import FlagMauritius from "../images/flags/Maurtius.png";
import FlagQatar from "../images/flags/UAE.png";
import FlagBahrain from "../images/flags/uk.png";
import FlagSaintLucia from "../images/flags/st-lucia.png";
import FlagIndia from "../images/flags/Ireland.png";

const allPrograms = [
  {
    region: "European Residency by Investment Programs",
    programs: [
      {
        country: "France",
        shortCode: "fr_talent_business",
        icon: FlagFrance,
        title: "France Talent Passport – Business Creation",
        investment: "EUR 30,000",
        investmentValue: 30000,
        processing: "4-6 months",
        processingValue: 5,
        benefit: "• 4-year renewable residence permit • Establish business in France • Family inclusion • Citizenship after 5 years",
      },
      {
        country: "Greece",
        shortCode: "gr_golden_visa",
        icon: FlagGreece,
        title: "Greece Golden Visa",
        investment: "EUR 250,000",
        investmentValue: 250000,
        processing: "6-9 months",
        processingValue: 7.5,
        benefit: "• Visa-free Schengen Area access • Indefinite residence in Greece • 5-year renewable visa • Citizenship after 7 years",
      },
      {
        country: "Portugal",
        shortCode: "pt_golden_visa",
        icon: FlagPortugal,
        title: "Portugal Golden Visa",
        investment: "EUR 280,000",
        investmentValue: 280000,
        processing: "6-8 months",
        processingValue: 7,
        benefit: "• Schengen access • Residency for family • Citizenship in 5 years • Multiple investment options",
      },
      {
        country: "Spain",
        shortCode: "es_golden_visa",
        icon: FlagSpain,
        title: "Spain Golden Visa",
        investment: "EUR 500,000",
        investmentValue: 500000,
        processing: "3-6 months",
        processingValue: 4.5,
        benefit: "• Family residency • Path to citizenship in 10 years • Schengen travel • Real estate investment",
      },
      {
        country: "Malta",
        shortCode: "mt_residency",
        icon: FlagMalta,
        title: "Malta Permanent Residency Program (MPRP)",
        investment: "EUR 150,000",
        investmentValue: 150000,
        processing: "6-8 months",
        processingValue: 7,
        benefit: "• Permanent residency in EU • Schengen travel • Family eligibility • No language test",
      }
    ]
  },
  {
    region: "North America Residency by Investment Programs",
    programs: [
      {
        country: "USA",
        shortCode: "us_eb5",
        icon: FlagUSA,
        title: "USA EB-5 Immigrant Investor Program",
        investment: "USD 800,000",
        investmentValue: 800000,
        processing: "18-24 months",
        processingValue: 21,
        benefit: "• US Green Card • Path to citizenship • Work/live/study anywhere • Spouse & children included",
      },
      {
        country: "Canada",
        shortCode: "ca_startup",
        icon: FlagCanada,
        title: "Canada Start-Up Visa Program",
        investment: "CAD 200,000",
        investmentValue: 200000,
        processing: "12-16 months",
        processingValue: 14,
        benefit: "• Permanent residency • Innovative business support • Family inclusion • Citizenship in 3 years",
      }
    ]
  },
  {
    region: "Middle East Residency by Investment Programs",
    programs: [
      {
        country: "United Arab Emirates",
        shortCode: "ae_golden_visa",
        icon: FlagUAE,
        title: "UAE Golden Visa",
        investment: "AED 2,000,000",
        investmentValue: 2000000,
        processing: "2-4 months",
        processingValue: 3,
        benefit: "• 10-year visa • No sponsor required • Real estate investment • Family residency",
      },
      {
        country: "Qatar",
        shortCode: "qa_residency",
        icon: FlagQatar,
        title: "Qatar Investment Residency",
        investment: "QAR 1,000,000",
        investmentValue: 1000000,
        processing: "3-5 months",
        processingValue: 4,
        benefit: "• Residency with investment • Real estate/business options • Family inclusion",
      }
    ]
  },
  {
    region: "Asia Residency by Investment Programs",
    programs: [
      {
        country: "India",
        shortCode: "in_business",
        icon: FlagIndia,
        title: "India Business Visa (For Foreigners)",
        investment: "INR 10,000,000",
        investmentValue: 10000000,
        processing: "1-2 months",
        processingValue: 1.5,
        benefit: "• Business setup visa • Renewable permit • Multiple entry • Valid for 5 years",
      },
      {
        country: "Thailand",
        shortCode: "th_elite",
        icon: FlagThailand,
        title: "Thailand Elite Residence Program",
        investment: "THB 1,000,000",
        investmentValue: 1000000,
        processing: "1-3 months",
        processingValue: 2,
        benefit: "• Long-term residency • VIP services • Multiple membership packages",
      }
    ]
  },
  {
    region: "Africa Residency by Investment Programs",
    programs: [
      {
        country: "South Africa",
        shortCode: "za_business",
        icon: FlagSouthAfrica,
        title: "South Africa Business Visa",
        investment: "ZAR 5,000,000",
        investmentValue: 5000000,
        processing: "4-6 months",
        processingValue: 5,
        benefit: "• Temporary residency • Renewable visa • Business investment required",
      },
      {
        country: "Mauritius",
        shortCode: "mu_investment",
        icon: FlagMauritius,
        title: "Mauritius Residency by Investment",
        investment: "USD 375,000",
        investmentValue: 375000,
        processing: "2-3 months",
        processingValue: 2.5,
        benefit: "• Permanent residency • Property investment • Tax benefits • Family inclusion",
      }
    ]
  },
  {
    region: "Oceania Residency by Investment Programs",
    programs: [
      {
        country: "Australia",
        shortCode: "au_business",
        icon: FlagAustralia,
        title: "Australia Business Innovation & Investment",
        investment: "AUD 1,500,000",
        investmentValue: 1500000,
        processing: "12-16 months",
        processingValue: 14,
        benefit: "• Path to PR and citizenship • Business innovation stream • State sponsorship available",
      },
    ]
  },
  {
    region: "Central America & Caribbean Residency by Investment Programs",
    programs: [
      {
        country: "Dominica",
        shortCode: "dm_citizenship",
        icon: FlagDominica,
        title: "Dominica Citizenship by Investment",
        investment: "USD 100,000",
        investmentValue: 100000,
        processing: "3-4 months",
        processingValue: 3.5,
        benefit: "• Fast-track citizenship • No residency required • Family inclusion • Visa-free travel",
      },
      {
        country: "Grenada",
        shortCode: "gd_citizenship",
        icon: FlagGrenada,
        title: "Grenada Citizenship by Investment",
        investment: "USD 150,000",
        investmentValue: 150000,
        processing: "4-6 months",
        processingValue: 5,
        benefit: "• E-2 visa treaty with USA • Family inclusion • Fast processing • Visa-free travel",
      },
      {
        country: "Saint Lucia",
        shortCode: "lc_citizenship",
        icon: FlagSaintLucia,
        title: "Saint Lucia Citizenship by Investment",
        investment: "USD 100,000",
        investmentValue: 100000,
        processing: "3-5 months",
        processingValue: 4,
        benefit: "• Visa-free access to 140+ countries • No residency required • Citizenship in 3-4 months",
      },
      
      
    ]
  }
];

export default allPrograms;
