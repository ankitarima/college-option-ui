import React from 'react';
import { useRouter } from 'next/router';
import Header from './components/Header';
import Details from './components/Details';
import Sidebar from './components/Sidebar';

export default function College({Review,Reviews}) {
    const router = useRouter()
    // console.log(router.query);
    return (
        <>
        <Header/>
        
        <main id="collegeHeader" >
            <img src={Review.featured_image} alt={Review.college_name} />
            <div className="container">
                <div className="basicInfoWrapper">
                        <div className="row justify-content-center">
                        <div className="col-md-2 text-center logoWrapper">
                            <img src={Review.logo} alt="" className="logo" />
                        </div>
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <h3 className="title">{Review.college_name}</h3>
                                </div>
                                <div className="col-12 text-center">
                                    <div dangerouslySetInnerHTML={{ __html: Review.basic_info }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <main id="college" className="section-bg">
        <div className="row">
            <div className="col-lg-8">
                <Details Review={Review}/>
            </div>
            <div className="col-lg-4">
                <Sidebar Tags={Review.tags} Reviews={Reviews}/>
            </div>
        </div>
        </main>
        </>
    )
}
