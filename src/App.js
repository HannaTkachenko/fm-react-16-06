import React from "react";
import Col from "./components/Grid/Col";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import Chao from "./components/ChaoSection/Chao/index";

const List = (props) => {
  const { titleProp, children } = props;
  return (
    <div>
      <h2>List:</h2>
      <ul title={titleProp}>{children}</ul>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col colNum={6}>
            <List titleProp="qwe">
              <li>text 1</li>
              <li>text 2</li>
            </List>
          </Col>
          <Col colNum={3}>
            <List titleProp="789">
              <li>aaa</li>
              <li>bbb</li>
              <li>ccc</li>
            </List>
          </Col>
        </Row>
        <Row>
          <Col colNum={3}>
            <Chao />
          </Col>
          <Col colNum={6}>
            <Chao />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
