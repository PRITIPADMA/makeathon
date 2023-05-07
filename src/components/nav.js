import { Container, Flex, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { FaWallet } from "react-icons/fa";

function nav() {
  return (
    <Box
      as="nav"
      backgroundColor="transparent"
      position="fixed"
      width="100%"
      zIndex="1"
    >
      <Container maxW="container.xl" mt={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="30" fontWeight="bold" color="white">
            Makeathon
          </Text>
          <Flex alignItems="center" fontSize="16">
            <Box mx={4}>
              <Text color="white">Home</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">About</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Patient Data</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Transactions</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Compliance</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Contact Us</Text>
            </Box>
            <Box ml={20}>
              <Button
                size="sm"
                backgroundColor="black"
                color="white"
                border="1px solid white"
                leftIcon={<FaWallet color="#9E00FF" />}
              >
                Connect Wallet
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default nav;
