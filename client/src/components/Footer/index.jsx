import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <Box bg="teal.500" minH="50px" p="0.5rem" className="footer" as="footer">
      <Text textAlign="center" color="gray.200">
        SeeSS &copy; {fullYear}
      </Text>
    </Box>
  );
};

export default Footer;
