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
} from '@chakra-ui/react';
import { useRef } from 'react';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Button
        position="absolute"
        left="-26px"
        transform="rotate(90deg)"
        size="lg"
        m="0"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
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
