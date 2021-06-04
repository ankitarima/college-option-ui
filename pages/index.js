import Head from "next/head";
import $ from 'jquery';
import Cards from "../components/home/Cards";
import SearchSection from "../components/home/SearchSection";

export default function Home() {

  return (
    <>
      <SearchSection/>
      <Cards />
    </>
  );
}


