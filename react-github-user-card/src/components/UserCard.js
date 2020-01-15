  
import React from "react";

function UserCard(data) {
  return (
    <div className="card">
      <img src={data.picture} alt="Profile" />
      <div className="card-info">
        <h3 className="name">{data.name}</h3>
        <p>
          Profile:
          <a href={data.profile}>{data.profile}</a>
        </p>
      </div>
    </div>
  );
}

export default UserCard;