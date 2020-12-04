import React, { useState } from "react";

import Context from "./context";

const Provider = (props) => {
  const [myData, setMyData] = useState(true);

  return (
    <Context.Provider
      value={{
        data: myData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Provider;
