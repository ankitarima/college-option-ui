import React from 'react'
import db from '../../../firebase/firebase'

export default function college({Cuttoff}) {
  // console.log(Cuttoff);
  // const cuttoffdata = [];
  // var result = Object.keys(Cuttoff).map((key) => [Cuttoff[key]]);
  // result.forEach((val)=>{
  //   cuttoffdata.push(val[0])
  // })
    const data = Cuttoff[0];

    const newData = data.map(item => {
      const container = {};
  
      container['Branch'] = item.Branch;
      container['Quota'] = item.Quota;
      container['SeatType'] = item.SeatType;
      container['Gender'] = item.Gender;
      container['OpeningRank'] = item.OpeningRank;
      container['ClosingRank'] = item.ClosingRank;
      container['Round'] = item.Round;
  
      return container;
  })
  
    const [state, setState] = React.useState(newData);

    const search = async event => {
        event.preventDefault()
        // console.log(event.target);
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

      const sbtn = {
        width: '100%'
      };

    return (
      <div className="container">

        <div className="row  my-5 justify-content-center">

          <div className="col-12 my-4 text-center">

          <form className="row align-items-center" onSubmit={search} >

            <div className="col-md-5 my-1">
                <div className="input-group">
                    <div className="input-group-text">Gender</div>
                    <select className="form-select" name="Gender">
                        <option  value=""selected>All</option>
                        <option  value="Gender-Neutral">Gender Neutral</option>
                        <option value="Female-only (including Supernumerary)">Female</option>
                    </select>
                </div>
            </div>

            <div className="col-md-5 my-1">
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
            
            <div className="col-md-2 my-1">
                <button type="submit" className="btn btn-primary" style={sbtn}> Submit</button>
            </div>
        </form>

          </div>

          <div className="col-12 text-center">

          <div className="table-responsive">
          
          <table className="table table-bordered">
            <thead>
              <tr scope="col" key={"header"}>
                {state.length > 0 ? Object.keys(state[0]).map((key) =>
                  key == "OpeningRank" ? (
                    <th>Opening Rank</th>
                  ) : <th>{key}</th> && key == "ClosingRank" ? (
                    <th>Closing Rank</th>
                  ) : <th>{key}</th> && key == "SeatType" ? (
                    <th>Seat Type</th>
                  ) : (
                    <th>{key}</th>
                  )
                ): <th colSpan="6" className="text-center">No data</th>}
              </tr>
            </thead>
            <tbody>
              {state.length > 0? state.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              )): null}
            </tbody>
          </table>
        </div> 

          </div>

        </div>
      
      </div>
    );
}

export async function getServerSideProps({params:{slug},query}){
    // console.log(slug);
    const Review = await db.collection('cutt_off').where('college_slug', '==', slug).where('year','==', query.year).get();
    const cuttoff = []
    Review.forEach((val)=>{
      cuttoff.push(val.data().cuttoff)
    })
    // console.log(typeof(cuttoff[0]))
    return{
        props: {
          Cuttoff:{
            ... cuttoff
          }
        },
    }
}
