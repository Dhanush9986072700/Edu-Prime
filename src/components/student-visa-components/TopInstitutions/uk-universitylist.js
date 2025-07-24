import React from "react";

// University logos
import oxford from "../../../images/University list/university-of-oxford.png";
import cardiff from "../../../images/University list/cardiff-university.png";
import imperial from "../../../images/University list/Imperial-college-london.png";
import kings from "../../../images/University list/Kings-College-London.png";
import loughborough from "../../../images/University list/Loughboroughu-niversity.png";
import birmingham from "../../../images/University list/University-of-Birmingham.png";
import bristol from "../../../images/University list/University-of-Bristol.png";
import cambridge from "../../../images/University list/University-of-Cambridge.png";
import exeter from "../../../images/University list/University-of-Exeter.png";
import glasgow from "../../../images/University list/University-of-Glasgow.png";
import liverpool from "../../../images/University list/University-of-Liverpool.png";
import manchester from "../../../images/University list/University-of-Manchester.png";
import nottingham from "../../../images/University list/University-of-Nottingham.png";
import sheffield from "../../../images/University list/University-of-Sheffield.png";
import southampton from "../../../images/University list/University-of-Southampton.png";
import stAndrews from "../../../images/University list/University-of-St-Andrews.png";
import warwick from "../../../images/University list/University-of-Warwick.png";
import york from "../../../images/University list/University-of-York.png";
import durham from "../../../images/University list/durham-university.png";
import lse from "../../../images/University list/london-School-of-Economics.png";
import newcastle from "../../../images/University list/newcastle-university.png";
import aberdeen from "../../../images/University list/niversity-of-aberdeen.png";
import queenMary from "../../../images/University list/queen-Mary-university-of-London.png";
import ucl from "../../../images/University list/university-college-london.png";
import edinburgh from "../../../images/University list/university-of-edinburgh.png";
import leeds from "../../../images/University list/university-of-leeds.png";
import reading from "../../../images/University list/university-of-reading.png";
import surrey from "../../../images/University list/university-of-surrey.png";
import sussex from "../../../images/University list/university-of-sussex.png";
import leicester from "../../../images/University list/university-of-leicester.png";

// University details
const partners = [
  { name: "University of Oxford", pImg: oxford, alt: "Edu Prime recommends the University of Oxford – UK's #1 university", title: "University of Oxford – UK's #1 university recommended by Edu Prime" },
  { name: "Cardiff University", pImg: cardiff, alt: "Top-rated Welsh university – Cardiff University recommended by Edu Prime", title: "Cardiff University – top in Wales, trusted by Edu Prime" },
  { name: "Imperial College London", pImg: imperial, alt: "Imperial College London – UK’s top STEM university by Edu Prime", title: "Imperial College London – science and tech leader, recommended by Edu Prime" },
  { name: "King's College London", pImg: kings, alt: "Prestigious London university – King's College London by Edu Prime", title: "King's College London – leading London university, Edu Prime recommended" },
  { name: "Loughborough University", pImg: loughborough, alt: "Top student satisfaction – Loughborough University with Edu Prime", title: "Loughborough University – great student experience, by Edu Prime" },
  { name: "University of Birmingham", pImg: birmingham, alt: "Russell Group member – University of Birmingham by Edu Prime", title: "University of Birmingham – top-ranked UK university, Edu Prime partner" },
  { name: "University of Bristol", pImg: bristol, alt: "University of Bristol – academic excellence in the UK via Edu Prime", title: "Bristol University – prestigious institution, Edu Prime suggestion" },
  { name: "University of Cambridge", pImg: cambridge, alt: "World-famous Cambridge University – preferred by Edu Prime", title: "University of Cambridge – elite institution, Edu Prime trust" },
  { name: "University of Exeter", pImg: exeter, alt: "Top research UK university – Exeter via Edu Prime", title: "University of Exeter – strong academics, Edu Prime listed" },
  { name: "University of Glasgow", pImg: glasgow, alt: "Top-ranked Scottish university – Glasgow via Edu Prime", title: "University of Glasgow – historic excellence, Edu Prime choice" },
  { name: "University of Liverpool", pImg: liverpool, alt: "Reputed UK university – Liverpool via Edu Prime", title: "University of Liverpool – global academic recognition, Edu Prime listed" },
  { name: "University of Manchester", pImg: manchester, alt: "Innovative research leader – Manchester University by Edu Prime", title: "University of Manchester – UK’s innovation hub, by Edu Prime" },
  { name: "University of Nottingham", pImg: nottingham, alt: "Top UK university for employability – Nottingham via Edu Prime", title: "University of Nottingham – employability-focused, Edu Prime listed" },
  { name: "University of Sheffield", pImg: sheffield, alt: "Russell Group UK university – Sheffield via Edu Prime", title: "University of Sheffield – research powerhouse, Edu Prime trusted" },
  { name: "University of Southampton", pImg: southampton, alt: "Top for Engineering – University of Southampton by Edu Prime", title: "University of Southampton – STEM focus, Edu Prime partnership" },
  { name: "University of St Andrews", pImg: stAndrews, alt: "Top Scottish university – St Andrews via Edu Prime", title: "University of St Andrews – oldest in Scotland, Edu Prime listed" },
  { name: "University of Warwick", pImg: warwick, alt: "Top 10 UK university – Warwick University by Edu Prime", title: "University of Warwick – high ranking institution, Edu Prime trusted" },
  { name: "University of York", pImg: york, alt: "UK research leader – York University with Edu Prime", title: "University of York – top UK research university, Edu Prime option" },
  { name: "Durham University", pImg: durham, alt: "Elite UK university – Durham recommended by Edu Prime", title: "Durham University – Russell Group excellence, Edu Prime listed" },
  { name: "London School of Economics", pImg: lse, alt: "Top global social science university – LSE by Edu Prime", title: "LSE – London School of Economics, Edu Prime trusted" },
  { name: "Newcastle University", pImg: newcastle, alt: "Top UK research institute – Newcastle via Edu Prime", title: "Newcastle University – strong global presence, Edu Prime partner" },
  { name: "University of Aberdeen", pImg: aberdeen, alt: "Scottish excellence – University of Aberdeen by Edu Prime", title: "University of Aberdeen – historic UK university, Edu Prime listed" },
  { name: "Queen Mary University of London", pImg: queenMary, alt: "Queen Mary – a top London university by Edu Prime", title: "Queen Mary University – London’s academic gem, Edu Prime partner" },
  { name: "University College London", pImg: ucl, alt: "UCL – top 10 global university recommended by Edu Prime", title: "University College London – UCL prestige, Edu Prime listed" },
  { name: "University of Edinburgh", pImg: edinburgh, alt: "Top university in Scotland – Edinburgh by Edu Prime", title: "University of Edinburgh – Scottish global leader, Edu Prime suggestion" },
  { name: "University of Leeds", pImg: leeds, alt: "UK academic excellence – Leeds University by Edu Prime", title: "University of Leeds – research strength, Edu Prime trusted" },
  { name: "University of Reading", pImg: reading, alt: "UK education hub – University of Reading via Edu Prime", title: "University of Reading – modern and global, Edu Prime listed" },
  { name: "University of Surrey", pImg: surrey, alt: "Career-focused education – Surrey University by Edu Prime", title: "University of Surrey – employability leader, Edu Prime listed" },
  { name: "University of Sussex", pImg: sussex, alt: "Top-ranked UK research university – Sussex via Edu Prime", title: "University of Sussex – modern academics, Edu Prime partner" },
  { name: "University of Leicester", pImg: leicester, alt: "Leicester – respected UK university by Edu Prime", title: "University of Leicester – academic excellence, Edu Prime listed" },
];

const Studentvisauniversity = () => {
  return (
    <section className="brand gray-bg-2 pos-rel pt-60 pb-60" aria-labelledby="uk-university-heading">
      <div className="container">
        <div className="sec-title style-2 text-center mb-60">
          <span className="section-sub-headline" id="uk-university-heading">
            United Kingdom Top University List
          </span>
        </div>

        <div className="xb-brand xb-brand1 ul_li">
          {partners.map((partner, index) => (
            <div className="xb-item--item" key={index}>
              <div className="xb-item--inner">
                <img
                  src={partner.pImg}
                  alt={partner.alt}
                  title={partner.title}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studentvisauniversity;
