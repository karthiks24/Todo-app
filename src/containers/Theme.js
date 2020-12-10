import React from "react";
import Checkbox from "../component/Checkbox";
import { Notifycheck } from "../component/notification";

/* to show the disabled property of the checkbox*/
const Theme = () => {
  const handleTaskChange = (value) => {
    Notifycheck();
  };

  let theme = {
    isActive: false,
    isDisabled: true,
    content: "TileView",
  };

  return (
    <div className='theme'>
      <Checkbox data={theme} handler={handleTaskChange} />
    </div>
  );
};

export default Theme;
