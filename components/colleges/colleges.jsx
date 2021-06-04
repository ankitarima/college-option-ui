import React from 'react';
import db from '../../firebase/firebase'
import Cards from './components/Cards';
import Filter from './components/Filter';

const cities = [
    'Araria',
    'Arwal',
    'Aurangabad',
    'Banka',
    'Begusarai',
    'Bhagalpur',
    'Bhojpur',
    'Buxar',
    'Darbhanga',
    'East Champaran',
    'Gaya',
    'Gopalganj',
    'Jamui',
    'Jehanabad',
    'Kaimur',
    'Katihar',
    'Khagaria',
    'Kishanganj',
    'Lakhisarai',
    'Madhepura',
    'Madhubani',
    'Munger',
    'Muzaffarpur',
    'Nalanda',
    'Nawada',
    'Patna',
    'Purnia',
    'Rohtas',
    'Saharsa',
    'Samastipur',
    'Saran',
    'Sheikhpura',
    'Sheohar',
    'Sitamarhi',
    'Siwan',
    'Supaul',
    'Vaishali',
    'West Champaran',
    'Chandigarh',
];
const states = [ "Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"];

const type = ['Govt', 'PPP', 'Private'];

export default function Colleges({Reviews}) {
  console.log(Reviews);
    return (
      <section id="colleges" className="section-bg">

        <header className="section-header pt-4 pb-3">
          <h3 className="section-title">Colleges</h3>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-3 filter-cointainer">
              <Filter title="State" list={states} />
              <Filter title="City" list={cities} />
              <Filter title="Type" list={type} />
            </div>

            <div className="col-9 filter-container-effect">
              <div className="row">
                 {
                     Reviews.map((review)=>(
                        <Cards review={review}/>
                     ))
                 }
              </div>
            </div>
          </div>
        </div>
        
      </section>
    );
}


// export async function getServerSideProps(context) {
//   const querySnap = await  db.collection('college_review').get()
  
//   const Reviews =  querySnap.docs.map(docSnap=>{
//     return {
//       ...docSnap.data(),
//       id:docSnap.id
//     }
//   })
//   console.log(Reviews);

//   return {
//     props: {Reviews},
//   }
// }
