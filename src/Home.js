// import React,{ useState } from 'react'
// import Button from 'reactstrap';
// import styled from "styled-components";
// function Home() {
//      const theme = {
//        blue: {
//          default: "#3f51b5",
//          hover: "#283593"
//        },
//        pink: {
//          default: "#e91e63",
//          hover: "#ad1457"
//        }
//      };
     
//      const Button = styled.button`
//        background-color: ${(props) => theme[props.theme].default};
//        color: white;
//        padding: 5px 15px;
//        border-radius: 5px;
//        outline: 0;
//        text-transform: uppercase;
//        margin: 10px 0px;
//        cursor: pointer;
//        box-shadow: 0px 2px 2px lightgray;
//        transition: ease background-color 250ms;
//        &:hover {
//          background-color: ${(props) => theme[props.theme].hover};
//        }
//        &:disabled {
//          cursor: default;
//          opacity: 0.7;
//        }
//      `;
     
//      Button.defaultProps = {
//        theme: "blue"
//      };
     
//      function clickMe() {
//        alert("You clicked me!");
//      }
     
//      const ButtonToggle = styled(Button)`
//        opacity: 0.7;
//        ${({ active }) =>
//          active &&
//          `
//          opacity: 1; 
//        `}
//      `;
     
//      const Tab = styled.button`
//        padding: 10px 30px;
//        cursor: pointer;
//        opacity: 0.6;
//        background: white;
//        border: 0;
//        outline: 0;
//        border-bottom: 2px solid transparent;
//        transition: ease border-bottom 250ms;
//        ${({ active }) =>
//          active &&
//          `
//          border-bottom: 2px solid black;
//          opacity: 1;
//        `}
//      `;
     
//      function TabGroup() {
//        const [active, setActive] = useState(types[0]);
//        return (
//          <>
//            <div>
//              {types.map((type) => (
//                <Tab
//                  key={type}
//                  active={active === type}
//                  onClick={() => setActive(type)}
//                >
//                  {type}
//                </Tab>
//              ))}
//            </div>
//            <p />
//            <p> Your payment selection: {active} </p>
//          </>
//        );
//      }
     
//      const types = ["Cash", "Credit Card", "Bitcoin"];
     
//      function ToggleGroup() {
//        const [active, setActive] = useState(types[0]);
//        return (
//          <div>
//            {types.map((type) => (
//              <ButtonToggle active={active === type} onClick={() => setActive(type)}>
//                {type}
//              </ButtonToggle>
//            ))}
//          </div>
//        );
//      }
     
     
//        return (
//          <>
//            <div>
//              <Button onClick={clickMe}>Button</Button>
//            </div>
//            <div>
//              <Button theme="pink" onClick={clickMe}>
//                Pink theme
//              </Button>
//            </div>
//            <div>
//              <Button disabled onClick={clickMe}>
//                Disabled
//              </Button>
//            </div>
           
//            <ToggleGroup />
//            <TabGroup />
//          </>
//        );
//      }
     


// export default Home

import React from 'react'
import Nav from 'react-bootstrap/Nav';
function Home() {
  return (
    <div>
     <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Home