import timg1 from '../images/team/men-1.png'
import timg2 from '../images/team/men-2.png'
import timg3 from '../images/team/3.png'
import timg4 from '../images/team/4.png'
import timg5 from '../images/team/5.png'
import timg6 from '../images/team/6.png'


const Teams = [
   {
      Id: '1',
      tImg: timg1,
      name: 'Esther Howard',
      slug: 'Esther-Howard',
      title: 'Legal Advisor',
      experienceText: `Esther has over 18 years of experience navigating complex legal immigration policies...`,
      professionalSkills: [
         { label: 'Communication Skills', percent: 92 },
         { label: 'Legal Research', percent: 88 },
         { label: 'Case Strategy', percent: 90 },
         { label: 'Client Representation', percent: 95 }
      ],
      careerGuidelines: [
         "Earn a law degree specializing in immigration law.",
         "Work with clients on documentation and appeals.",
         "Stay updated on policy reforms regularly."
      ],
      skillList: [
         "Legal expertise",
         "Attention to detail",
         "Excellent negotiation skills",
         "Strong client handling"
      ]
   },
   {
      Id: '2',
      tImg: timg2,
      name: 'Annette Black',
      slug: 'Annette-Black',
      title: 'Education Counsellor',
   },
   {
      Id: '3',
      tImg: timg3,
      name: 'Andrew Riis',
      slug: 'Andrew-Riis',
      title: 'Visa Specialist',
   },
   {
      Id: '4',
      tImg: timg4,
      name: 'Kristin Watson',
      slug: 'Kristin-Watson',
      title: 'Visa Coordinator',
   },
   {
      Id: '5',
      tImg: timg5,
      name: 'Jerome Bell',
      slug: 'Jerome-Bell',
      title: 'General Manager',
   },
   {
      Id: '6',
      tImg: timg6,
      name: 'Jerome Bell',
      slug: 'Jerome-Bell',
      title: 'General Manager',
   },

   
]

export default Teams;