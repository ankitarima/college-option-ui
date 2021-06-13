import React from "react";

export default function BasicInfo({BasicInfo}) {
  const spanStyle={
    fontWeight: 500,
    fontSize: '18px',
    paddingLeft: '8px',
    paddingRight: '5px'
  }
  return (
    <div id="basic-info">
      <h3 className="mt-4">Basic Information </h3>
      <hr />
      <div className="row">
        <div className="col-12">
          <p><i class="bi bi-clipboard"></i><span style={spanStyle}>College name:</span> {BasicInfo.college_name}</p>
          <p><i class="bi bi-align-center"></i><span style={spanStyle}>Also known as:</span> {BasicInfo.more_name}</p>
          <p><i class="bi bi-sticky"></i><span style={spanStyle}>College type:</span> {BasicInfo.college_type}</p>
          <p><i class="bi bi-building"></i><span style={spanStyle}>Foundation year:</span> {BasicInfo.foundation_year}</p>
          <p><i class="bi bi-app"></i><span style={spanStyle}>Campus area:</span> {BasicInfo.campus_area}</p>
          <p><i class="bi bi-geo"></i><span style={spanStyle}>Location:</span> 
          {BasicInfo.college_city}, {BasicInfo.college_state}</p>
        </div>
      </div>
    </div>
  );
}
