// Second way of using useState
import { useState } from "react";

const Demo = () => {
  const [about, setAbout] = useState({
    name: "Shubham Nayak",
    domain: "React",
  });

  const Update = () => {
    setAbout({ name: "Welcome to my profile", domain: "React Hooks" });
  };

  return (
    <>
      <h5>Hi {about.name} </h5>
      <h4>I'am Learning {about.domain}!!</h4>
      <button onClick={Update}>Hello</button>
    </>
  );
};

export default Demo;
