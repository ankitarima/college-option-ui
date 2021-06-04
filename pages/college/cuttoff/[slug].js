import React from 'react'
import db from '../../../firebase/firebase'

export default function college({Cuttoff}) {
    console.log(Cuttoff);
    const data = Cuttoff[0][2020];

    const newData = data.map(item => {
      const container = {};
  
      container['Branch'] = item.Branch;
      container['Quota'] = item.Quota;
      container['SeatType'] = item.SeatType;
      container['Gender'] = item.Gender;
      container['OpeningRank'] = item.OpeningRank;
      container['ClosingRank'] = item.ClosingRank;
  
      return container;
  })
  
    const [state, setState] = React.useState(newData);

    const registerUser = async event => {
        event.preventDefault()
        console.log(event.target.Gender.value);
        if(event.target.Gender.value !='' || event.target.SeatType.value !=''){
            setState(
                newData.filter((val) => {
                  if (event.target.Gender.value !='' && event.target.SeatType.value =='') {
                    if(val.Gender == event.target.Gender.value){
                        return val
                    }
                  }else if (event.target.Gender.value =='' && event.target.SeatType.value !='') {
                    if(val.SeatType == event.target.SeatType.value){
                        return val
                    }
                  }else if (event.target.Gender.value !='' && event.target.SeatType.value !='') {
                    if(val.Gender == event.target.Gender.value && val.SeatType == event.target.SeatType.value){
                        return val
                    }
                  }
                })
              );
        }else{
            setState(newData)
        }
      }

    return (
      <div className="container my-5">

        <form className="row row-cols-lg-auto g-3 my-5 align-items-center" onSubmit={registerUser}>
            <div className="col-4">
                <div className="input-group">
                    <div className="input-group-text">Gender</div>
                    <select className="form-select" name="Gender">
                        <option  value=""selected>All</option>
                        <option  value="Gender-Neutral">Gender Neutral</option>
                        <option value="Female-only (including Supernumerary)">Female</option>
                    </select>
                </div>
            </div>

            <div className="col-4">
            <div className="input-group">
                    <div className="input-group-text">Seat Type</div>
                    <select className="form-select" name="SeatType">
                        <option  value=""selected>All</option>
                        <option  value="OPEN">OPEN</option>
                        <option value="OPEN (PwD)">OPEN (PwD)</option>
                        <option value="EWS">EWS</option>
                        <option value="EWS (PwD)">EWS (PwD)</option>
                        <option value="OBC-NCL">OBC-NCL</option>
                        <option value="OBC-NCL (PwD)">OBC-NCL (PwD)</option>
                        <option value="SC">SC</option>
                        <option value="SC (PwD)">SC (PwD)</option>
                        <option value="ST">ST</option>
                        <option value="ST (PwD)">ST (PwD)</option>
                    </select>
                </div>
            </div>

            <div className="col-4">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>





        <div className="table-responsive my-5">
          <table className="table table-bordered">
            <thead>
              <tr scope="col" key={"header"}>
                {Object.keys(state[0]).map((key) =>
                  key == "OpeningRank" ? (
                    <th>Opening Rank</th>
                  ) : <th>{key}</th> && key == "ClosingRank" ? (
                    <th>Closing Rank</th>
                  ) : <th>{key}</th> && key == "SeatType" ? (
                    <th>Seat Type</th>
                  ) : (
                    <th>{key}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {state.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export async function getServerSideProps({params:{slug}}){
    const Review = await db.collection('college_review').where('slug', '==', slug).get();
    const cuttoff = Review.docs.data()
    console.log(cuttoff)
    return{
        props: {
            Cuttoff:{
                ...cuttoff
            }
        },
    }
}
