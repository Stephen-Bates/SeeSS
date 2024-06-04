import { Box, Flex, Heading } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleSetMobile = useCallback(
    (mobile) => {
      setIsMobile(mobile);
    },
    [setIsMobile]
  );

  const links = [
    { path: '/', text: 'Home', guest: false },
    { path: '/login', text: 'Login', guest: true },
    { path: '/register', text: 'Register', guest: true },
    { path: '/create', text: 'Create', guest: false },
    { path: '/profile', text: 'Profile', guest: false },
    { path: '/curators', text: 'Curators', guest: false },
  ];

  return (
    <>
      {isMobile ? (
        <Mobile handleSetMobile={handleSetMobile} links={links} />
      ) : (
        <Desktop handleSetMobile={handleSetMobile} isMobile={isMobile} links={links} />
      )}
    </>
  );
};

export default Navbar;
