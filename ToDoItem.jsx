import React from 'react';

function TDItem({ toDoitem, toDodate , onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h6>{toDoitem}</h6>
        </div>
        <div className="col-4">
          <p>{toDodate}</p>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>onDeleteClick (toDoitem)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TDItem;
