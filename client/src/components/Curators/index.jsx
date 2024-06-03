import { Box, Flex } from '@chakra-ui/react';
import DrawerMenu from './DrawerMenu';

const Curators = () => {
  return (
    <Box minH="100vh">
      <Flex mb="1rem" flexDir={['column', 'column', 'row']} mt="10rem" position="relative">
        <Box flexGrow={1} w={['100%', '300px', '300px']}>
          <DrawerMenu />
        </Box>
        <Box p="2rem" border="1px solid" borderColor="gray.300" borderRadius={8} w="100%" minH="100vh" flexGrow={2}>
          asdas
        </Box>
      </Flex>
    </Box>
  );
};

export default Curators;
