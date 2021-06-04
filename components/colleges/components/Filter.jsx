import React from "react";
import { useRouter } from 'next/router'



export default function Filter({title,list}) {

  const FilterQuery = ({value = 'all'})=>{
    const router = useRouter()
    router.push({
      pathname: 'colleges',
      query: { filter: value }
      });
  }
  return (
    <div>
      <h4 className="filter-title">{title}</h4>
      <ul className="filter">
          {list.map((value)=>(
            <li key={value}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={value}
                  id={value}
                  // onClick={FilterQuery(value)}
                />
                <label className="form-check-label" htmlFor={value}>
                  {value}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
