import React from 'react';
import { useRouter } from 'next/router';
import Header from './components/Header';
import Details from './components/Details';
import Sidebar from './components/Sidebar';

export default function College({Review}) {
    const router = useRouter()
    console.log(router.query);
    return (
        <>
        <Header/>
        <main className="single-college-container section-bg">
        <div className="row">
            <div className="col-lg-9">
                <Details Review={Review}/>
            </div>
            <div className="col-lg-3">
                <Sidebar/>
            </div>
        </div>
        </main>
        </>
    )
}
