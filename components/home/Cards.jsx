import React from 'react';
import { useRouter } from 'next/router';

export default function Cards() {
  const router = useRouter()
    return (
        <section id="services" className="services section-bg">
        <div className="container">
  
          <div className="row">
  
            <div className="col-md-6 col-lg-4 wow bounceInUp"
            onClick={() => router.push({
              pathname: `colleges`,
              query: { topColleges:true }
              })} 
            >
              <div className="box">
                <div className="icon"><i className="bi bi-briefcase"></i></div>
                <h4 className="title"><a href="javascript:void(0)">Top Colleges</a></h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4"
            onClick={() => router.push({
              pathname: `exams`,
              })} 
            >
              <div className="box">
                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                <h4 className="title"><a href="javascript:void(0)">Explore Entrance Exams</a></h4>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-4"
            onClick={() => router.push({
              pathname: `colleges`
              })} 
            >
              <div className="box">
                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                <h4 className="title"><a href="javascript:void(0)">College Reviews</a></h4>
              </div>
            </div>

            {/* <div className="col-md-6 col-lg-4 wow">
              <div className="box">
                <div className="icon"><i className="bi bi-binoculars"></i></div>
                <h4 className="title"><a href="">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-4">
              <div className=" box">
                  <div className="icon"><i className="bi bi-brightness-high"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
            </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <div className="icon"><i className="bi bi-calendar4-week"></i></div>
              <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> */}
  
        </div>
  
        </div>
      </section>
    )
}
