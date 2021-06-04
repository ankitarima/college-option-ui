import React from "react";
import BasicInfo from "./Details/BasicInfo";
import CollegeImages from "./Details/CollegeImages";
import CollegeName from "./Details/CollegeName";
import Link from 'next/link'

export default function Details({Review}) {
  console.log(Review)
  return (
    <>
      <CollegeName name={Review.college_name} />

      <CollegeImages/>

      <div dangerouslySetInnerHTML={{ __html: Review.review }}></div>

      <div className="exam-card">
          <div className="row">
            <div className="col-lg-10">
              <h4 className="title">
                <Link href={`cuttoff/${(Review.slug)}`}>
                  <a>Cutt off 2020</a>
                </Link>
              </h4>
              <h4 className="title">
                <a href="">Cutt off 2019</a>
              </h4>
            </div>
          </div>
        </div>
      
    </>
  );
}
