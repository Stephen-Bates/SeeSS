import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { useState } from 'react';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import {
  Text,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_STYLE } from '../../utils/queries';
import { Parser as HtmlToReactParser } from 'html-to-react';

const SingleStyle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [view, setView] = useState('read');
  const params = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLE, {
    variables: { styleId: params.styleId },
  });

  const trimStyle = (text) => {
    const styles = text.split('').slice(0, 50).join('') + '...';
    return `
${styles} \n
</style>
`;
  };

  const parser = new HtmlToReactParser();
  const reactElements = parser.parse(data ? data.style.style_Text : '');

  const handleClose = () => {
    setView('read');
    onClose();
  };

  return (
    <>
      {data && (
        <Flex justify="center" mt="10rem">
          <Card width={['100%', '500px', '500px']}>
            <CardHeader cursor="pointer" fontSize="1.2rem" fontWeight="bold" color="gray.100" bg="teal.500">
              {data.style.title}
            </CardHeader>
            <CardBody color="green.500">{trimStyle(data.style.style_Text)}</CardBody>
            <CardFooter flexDir="column">
              <Flex flexWrap="wrap">
                {data.style.tag.map((tag, index) => {
                  return (
                    <Box m="0.75rem" p="0.25rem" borderRadius={12} bg="blue.500" key={index}>
                      <Text color="#fff">#{tag}</Text>
                    </Box>
                  );
                })}
              </Flex>
              <Box my="1rem">
                <Text color="gray.500" fontSize="0.9rem">
                  Posted by{' '}
                  <Box as="span" fontWeight="bold">
                    {data.style.username}
                  </Box>
                </Text>
              </Box>
              <Box>
                <Button onClick={onOpen}>View Code</Button>
              </Box>
            </CardFooter>
          </Card>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={['100%', '500px', '750px']}>
              <ModalHeader color="gray.500">{data.style.title}</ModalHeader>
              <ModalCloseButton onClick={handleClose} />
              <ModalBody>
                <Box>
                  {view === 'preview' ? (
                    reactElements
                  ) : (
                    <CodeMirror
                      readOnly
                      value={data.style.style_Text}
                      options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true,
                      }}
                    />
                  )}
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={() => setView('preview')} variant="ghost">
                  Preview
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      )}
    </>
  );
};

export default SingleStyle;
