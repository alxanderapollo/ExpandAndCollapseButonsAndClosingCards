import React from 'react';

function Card({name, id, description, isExpanded, onExpand}) {
  return <div className="card">
     Name: {name}
     <div>
        <button className="btn btn-primary" style={{paddingLeft:'10px'}} onClick={()=>onExpand(id)}>click</button>
            <br/>
        {isExpanded && (`description: ${description}`)}
     </div>
  </div>;
}

export default Card;
