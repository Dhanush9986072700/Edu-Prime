import studyVisaData from './studyvisadata';
import touristVisaData from './pakageData';
import investmentPrograms from './investmentPrograms';
import { jobSeekerCountries } from './JobseakerData';
import serviceData from './service';
import packageData from './pakageData';

// ✅ Flatten investmentPrograms with region info attached to each item
const flatInvestmentPrograms = investmentPrograms.flatMap(region =>
  region.programs.map(program => ({
    ...program,
    region: region.region,       // used for searching region name
    category: 'Investor Visa',   // used for filtering
  }))
);

// ✅ Flatten studyVisaData, touristVisaData, etc. and attach categories
export const allVisaData = [
  ...studyVisaData.map(item => ({ ...item, category: 'Study Visa' })),
  ...touristVisaData.map(item => ({ ...item, category: 'Tourist Visa' })),
  ...flatInvestmentPrograms,
  ...jobSeekerCountries.map(item => ({ ...item, category: 'Job Seeker Visa' })),
  ...packageData.map(item => ({ ...item, category: 'Tourist Visa' })),
  ...serviceData.map(item => ({ ...item, category: 'Service' })),
];

// ✅ Export raw data as fallback
export {
  studyVisaData,
  touristVisaData,
  investmentPrograms,
  jobSeekerCountries,
  serviceData,
  packageData,
};
