import { useState } from "react";
import Icon from "../../Icon";

function MyPopupContent({ content, toHeader }) {

  const { details, id,...rest } = content;
  const newContent = { ...rest, ...details };

  return (
    <div className="content">
      {Object.entries(newContent).map(([key, value],i) =>{
        return (
        <div key={i}>
          <label>
            {toHeader(key)}
            <span>{typeof value === 'boolean' ? <Icon label={value ? 'check' : 'close'}/> : value}</span>
          </label>
        </div>
      )})}
    </div>
  );
}

export default MyPopupContent;
