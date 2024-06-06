import {
  useDisclosure,
  Drawer,
  Spinner,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useQuery } from '@apollo/client';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { QUERY_MY_STYLES } from '../../utils/queries';

const DrawerMenu = () => {
  const { loading, error, data } = useQuery(QUERY_MY_STYLES);
  console.log(data, loading, error);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Button
        position="absolute"
        left="-40px"
        transform="rotate(90deg)"
        size="lg"
        m="0"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        <Box fontSize="1.2rem" mr="0.25rem">
          <IoColorPaletteOutline />
        </Box>
        Styles
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Styles</DrawerHeader>

          <DrawerBody>
            {loading && <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.500" size="xl" />}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
