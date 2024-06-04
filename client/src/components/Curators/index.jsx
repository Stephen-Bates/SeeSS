import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import CodeEditor from './CodeEditor';
//import { HtmlToReactParser } from 'html-to-react';

const Curators = () => {
  const [code, setCode] = useState(`
    <style>
      h1 {
        color: red;
      }
    </style>
    <h1>Hello, World!</h1>
  `);

  //const parser = new HtmlToReactParser();
  // const reactElements = parser.parse(code);

  const handleSetCode = (editor, data, value) => {
    setCode(value);
  };

  return (
    <Box minH="100vh">
      <Flex mb="1rem" flexDir={['column', 'column', 'row']} mt="10rem" position="relative">
        <Box flexGrow={1} w={['100%', '300px', '300px']}>
          <DrawerMenu />
        </Box>
        <Box p="2rem" borderRadius={8} bg="gray.100" w="100%" minH="100vh" flexGrow={2}>
          <CodeEditor code={code} handleSetCode={handleSetCode} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Curators;
