import React from 'react';
import Link from 'next/link';


export default function Cuttoff({Review}) {
    return (
      <div id="cuttoff">
        <h3 className="mt-4">Cuttoff </h3>
        <hr />
        <h4 className="title">
          <Link href={`cuttoff/${Review.slug}?year=2020`}>
            <a target="_blank" className="cuttOff">Cutt off - 2020 
            <i class="bi bi-arrow-right"></i></a>
          </Link>
        </h4>

        <h4 className="title">
          <Link href={`cuttoff/${Review.slug}?year=2019`}>
            <a target="_blank" className="cuttOff">Cutt off - 2019 
            <i class="bi bi-arrow-right"></i></a>
          </Link>
        </h4>
      </div>
    );
}
