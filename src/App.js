import Nav from "./components/nav";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box backgroundColor="black">
      <Nav />
      <Box minHeight="100vh" paddingTop="100px"></Box>
    </Box>
  );
}

export default App;
