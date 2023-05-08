import Nav from "./components/nav";
import Hero from "./components/hero";
import Dashinfo from "./components/dash_info";
import Mandate from "./components/mandate";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box backgroundColor="black">
      <Nav />
      <Hero />
      <Dashinfo />
      <Mandate />
    </Box>
  );
}

export default App;
