import {
  useDisclosure,
  Drawer,
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
import { IoColorPaletteOutline } from 'react-icons/io5';

const DrawerMenu = () => {
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

          <DrawerBody>styles go here</DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
