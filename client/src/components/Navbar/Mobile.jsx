import { AiOutlineClose } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, List, ListItem } from '@chakra-ui/react';
import { useEffect } from 'react';

const Mobile = ({ links, handleSetMobile }) => {
  const MOBILE_SIZE = 768;

  const handleResize = (e) => {
    if (e.target.innerWidth > MOBILE_SIZE) {
      handleSetMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box position="relative" bg="teal.500" minH="50px">
      <Box
        zIndex={10}
        p="0.5rem"
        bg="teal.700"
        borderRadius={8}
        position="absolute"
        w="220px"
        minH={['350px', '400px', '400px']}
        top="35px"
        right="0"
      >
        <Flex
          onClick={() => handleSetMobile(false)}
          justify="flex-end"
          cursor="pointer"
          p="0.25rem"
          color="#fff"
          fontSize="1.75rem"
        >
          <AiOutlineClose />
        </Flex>
        <List>
          {links.map((link, index) => {
            return (
              <ListItem
                onClick={() => handleSetMobile(false)}
                p="0.25rem"
                _hover={{ background: 'teal.900' }}
                my="0.5rem"
                mx="0.25rem"
                color="white"
                key={index}
              >
                <RouterLink to={link.path}>{link.text}</RouterLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Mobile;
