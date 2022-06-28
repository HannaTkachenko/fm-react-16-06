import React from "react";
import Chao from "./components/ChaoSection/Chao/index";
import FlexContainer from "./components/FlexContainer/index";

const App = () => {
  return (
    <>
      <FlexContainer
      fd={'row-reverse'}
        title="@@"
        style={{ backgroundColor: "pink", border: "5px solid red" }}
      >
        <Chao />
        <Chao />
        <Chao />
        <Chao />
      </FlexContainer>
      <FlexContainer
        fd="column"
        fw="wrap"
        jc="space-between"
        ai="start"
        title="@@"
        style={{ backgroundColor: "pink", border: "5px solid red" }}
      >
        <Chao />
        <Chao />
        <Chao />
        <Chao />
      </FlexContainer>
    </>
  );
};
export default App;
