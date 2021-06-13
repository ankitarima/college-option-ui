import React from "react";
import BasicInfo from "./Details/BasicInfo";
import Connectivity from "./Details/Connectivity";
import Ranking from "./Details/Ranking";
import EligibilityCriteria from "./Details/EligibilityCriteria";
import AdmissionProcess from "./Details/AdmissionProcess";
import CoursesOffered from "./Details/CoursesOffered";
import SeatMatrix from "./Details/SeatMatrix";
import Cuttoff from "./Details/Cuttoff";
import Alumni from "./Details/Alumni";
import Fees from "./Details/Fees";
import FeeWaiver from "./Details/FeeWaiver";
import Placements from './Details/Placements';
import Facilities from "./Details/Facilities";
import Pros from "./Details/Pros";
import Cons from "./Details/Cons";
import ReviewVideo from "./Details/ReviewVideo";
import Faq from "./Details/Faq";
import Contacts from "./Details/Contacts";

export default function Details({Review}) {
  console.log(Review)
  return (
    <>
      <BasicInfo BasicInfo={Review} />

      <Connectivity Review={Review}/>

      <Ranking Review={Review}/>

      <EligibilityCriteria Review={Review}/>

      <AdmissionProcess Review={Review}/>

      <CoursesOffered Review={Review}/>

      <SeatMatrix Review={Review}/>

      <Cuttoff Review={Review}/>

      <Alumni Review={Review}/>

      <Fees Review={Review}/>

      <FeeWaiver Review={Review}/>

      <Placements Review={Review}/>

      <Facilities Review={Review}/>

      <Pros Review={Review}/>

      <Cons Review={Review}/>

      <ReviewVideo Review={Review}/>

      <Faq Review={Review}/>

      <Contacts Review={Review}/>
      
    </>
  );
}
