import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as RouterLink } from 'react-router-dom';

const Desktop = ({ links, handleSetMobile }) => {
  return (
    <Box bg="teal.500" minH="50px">
      <Flex display={['none', 'none', 'flex']} align="center" justify="space-between" p="0.25rem">
        <Heading color="white">SeeSS</Heading>

        <List display="flex">
          {links.map((link, index) => {
            return (
              <ListItem _hover={{ color: 'gray.200' }} mx="0.25rem" color="white" key={index}>
                <RouterLink to={link.path}>{link.text}</RouterLink>
              </ListItem>
            );
          })}
        </List>
      </Flex>
      <Flex
        onClick={() => handleSetMobile(true)}
        justify="flex-end"
        ml="auto"
        p="0.25rem"
        fontSize="1.75rem"
        cursor="pointer"
        color="#fff"
        display={['flex', 'flex', 'none']}
      >
        <GiHamburgerMenu />
      </Flex>
    </Box>
  );
};

export default Desktop;
