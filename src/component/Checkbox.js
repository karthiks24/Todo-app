import React, { useState } from "react";
import "../scss/checkbox.scss";

const Checkbox = (props) => {
  let { data, handler } = props;
  const [design, setDesign] = useState();

  const focusHandler = () => {
    setDesign(true);
  };
  const blurHandler = () => {
    setDesign(false);
  };
  return (
    <div className='bg'>
      <div
        className={`checkbox-container ${design ? "focus" : ""}`}
        key={data?.id}
        onClick={() => handler(data)}>
        <input
          type='checkbox'
          className='check'
          defaultChecked={!data?.isActive}
          disabled={data.isDisabled}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      <div
        className={`form-check-label ${data?.isActive ? "" : "text-strike"}`}>
        {data?.content}
      </div>
    </div>
  );
};

export default Checkbox;
