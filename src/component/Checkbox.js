import React from "react";
import "../scss/checkbox.scss";

const Checkbox = (props) => {
  let { data, handler } = props;
  return (
    <div className='bg'>
      <div
        class='checkbox-container'
        key={data?.id}
        onClick={() => handler(data)}>
        <input type='checkbox' id='cb3' checked={!data?.isActive} />
        <label
          className={`form-check-label ${data?.isActive ? "" : "text-strike"}`}>
          {data?.content}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
