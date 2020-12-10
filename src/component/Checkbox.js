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
        key={data?.id}>
        <input
          type='checkbox'
          className='check'
          defaultChecked={!data?.isActive}
          disabled={data.isDisabled}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onClick={() => handler(data)}
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
