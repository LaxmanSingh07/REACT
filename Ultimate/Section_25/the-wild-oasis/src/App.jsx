import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  background-color: yellowgreen;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* it doesn't accept any children */}
      <GlobalStyles />;
      <StyledApp>
        <H1>Styled Components</H1>
        <Button onClick={() => alert("check in")}>Click Me</Button>
        <Input type="text" placeholder="Enter your name" />
      </StyledApp>
    </>
  );
}

export default App;
