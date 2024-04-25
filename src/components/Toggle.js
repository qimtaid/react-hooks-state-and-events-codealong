import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    //updating state directly is a no=no!
    setIsOn((isOn) = !isOn;);
  }
  
  //...the rest of Toggle component
  return (<button onClick={handleClick} style={{background: "red"}}>
      {isOn ? "ON"  : "OFF"}
  </button>
  );
}

export default Toggle;
