import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and Out</Heading>
        <Button onClick={() => alert("check in")}>Click In</Button>
        <Button onClick={() => alert("check out")}>Click Out</Button>
        <Heading as="button">Form</Heading>
        <Input type="text" placeholder="Enter your name" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
