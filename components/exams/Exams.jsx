import React from "react";
import Card from "./components/Card";

export default function Exams() {
  return (
    <>
      <section id="exams" className="section-bg">
        <header className="section-header">
          <h3>Exams</h3>
          <p>
            Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
            partiendo abhorreant vituperatoribus.
          </p>
        </header>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
