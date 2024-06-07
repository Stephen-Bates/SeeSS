import { Box, Flex, Heading, List, ListItem, Button } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const Desktop = ({ links, handleSetMobile }) => {
  const navigate = useNavigate();
  return (
    <Box bg="teal.500" minH="50px">
      <Flex display={['none', 'none', 'flex']} align="center" justify="space-between" p="0.25rem">
        <Heading cursor="pointer" onClick={() => navigate('/')} color="white">
          SeeSS
        </Heading>

        <List display="flex" alignItems="center">
          {links.map((link, index) => {
            return (
              <ListItem _hover={{ color: 'gray.200' }} mx="0.25rem" color="white" key={index}>
                <RouterLink to={link.path}>{link.text}</RouterLink>
              </ListItem>
            );
          })}
          {Auth.loggedIn() && (
            <ListItem p="0.25rem" mx="0.25rem">
              <Button onClick={() => Auth.logout()} p="0" fontWeight="normal" colorScheme="transparent">
                Logout
              </Button>
            </ListItem>
          )}
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
