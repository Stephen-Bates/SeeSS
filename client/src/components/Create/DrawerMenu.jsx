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
  Text,
  Flex,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useQuery } from '@apollo/client';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { QUERY_MY_STYLES } from '../../utils/queries';
import Auth from '../../utils/auth';

const DrawerMenu = ({ handleSetMyStyleId, populateCode, handleSetTags, handleSetTitle }) => {
  const { loading, data } = useQuery(QUERY_MY_STYLES);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  const addIdToTag = (myStyle) => {
    return myStyle.tag.map((tag) => ({ id: nanoid(), tag }));
  };

  const handleOnClick = (myStyle) => {
    handleSetMyStyleId(myStyle._id);
    populateCode(myStyle.style_Text);
    handleSetTags(addIdToTag(myStyle));
    handleSetTitle(myStyle.title);
    onClose();
  };

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
          <DrawerHeader>
            <Box>
              <Text>Styles</Text>
              <Text fontSize="0.85rem">{Auth.getProfile().data.username}</Text>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            {loading && (
              <Flex justify="center" my="5rem">
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.500" size="xl" />
              </Flex>
            )}
            {data &&
              data.myStyles &&
              data.myStyles.map((myStyle) => {
                return (
                  <Box
                    onClick={() => handleOnClick(myStyle)}
                    key={myStyle._id}
                    cursor="pointer"
                    my="2rem"
                    p="0.5rem"
                    borderRadius={8}
                    border="1px solid"
                    borderColor="gray.300"
                  >
                    <Box color="gray.500">
                      <Text>{myStyle.title}</Text>
                    </Box>
                    <Flex flexWrap="wrap">
                      {myStyle.tag.map((tag, index) => {
                        return (
                          <Box m="0.75rem" p="0.25rem" borderRadius={12} bg="blue.500" key={index}>
                            <Text color="#fff">{tag}</Text>
                          </Box>
                        );
                      })}
                    </Flex>
                  </Box>
                );
              })}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
