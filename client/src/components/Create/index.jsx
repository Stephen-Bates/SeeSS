import { Box, Button, Flex } from '@chakra-ui/react';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { nanoid } from 'nanoid';
import { BsPencil } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import CodeEditor from './CodeEditor';
import Tags from './Tags';

const initialCodeState = `
<style>
.welcome {
    color: #fff;
    padding: 1rem;
    background-color: #38B2AC;
  }
.lead-text {
 color: #A0AEC0;
}
</style>
<h1 class="welcome">Welcome to SeeSS</h1>
<p class="lead-text">Go ahead and start writing styles to create something amazing!</p>
`;

const Create = () => {
  const [view, setView] = useState('edit');
  const [code, setCode] = useState(initialCodeState);
  const [tags, setTags] = useState([]);

  const parser = new HtmlToReactParser();
  const reactElements = parser.parse(code);

  const goToEdit = () => {
    setView('edit');
  };

  const goToPreview = () => {
    setView('preview');
  };

  const handleSetCode = (editor, data, value) => {
    console.log(editor, data);
    setCode(value);
  };

  const saveCode = () => {
    if (tags.length && code.length) {
      const tagsData = tags.map(({ tag }) => tag);
      console.log('saving code', code, tagsData);
    }
  };

  const addTag = (tag) => {
    const exists = tags.findIndex((t) => t.tag === tag);
    if (exists === -1) {
      setTags((prevState) => [...prevState, { id: nanoid(), tag }]);
    }
  };

  const removeTag = (id) => {
    setTags((prevState) => [...prevState].filter((tag) => tag.id !== id));
  };

  return (
    <Box minH="100vh">
      <Flex mb="1rem" flexDir={['column', 'column', 'row']} mt="10rem" position="relative">
        <Box flexGrow={1} w={['100%', '300px', '300px']}>
          <DrawerMenu />
        </Box>
        <Box
          p="2rem"
          borderRadius={8}
          bg={`${view === 'edit' ? 'gray.100' : 'inherit'}`}
          w="100%"
          minH="100vh"
          flexGrow={2}
        >
          <Flex justify="flex-end" my="3rem">
            <Button onClick={goToEdit} mx="0.5rem" colorScheme="teal">
              <Box mx="0.25rem">
                <BsPencil />
              </Box>
              Edit
            </Button>
            <Button onClick={goToPreview} mx="0.5rem" colorScheme="blue">
              <Box mx="0.25rem">
                <FaRegEye />
              </Box>
              Preview
            </Button>
          </Flex>
          {view === 'edit' && (
            <>
              <CodeEditor code={code} handleSetCode={handleSetCode} />
              <Box my="10">
                <Tags addTag={addTag} removeTag={removeTag} tags={tags} />
              </Box>
              <Flex justify="center" my="5rem">
                {tags.length > 0 && (
                  <Button onClick={saveCode} colorScheme="teal" size="lg">
                    Save code
                  </Button>
                )}
              </Flex>
            </>
          )}
          {view === 'preview' && <Box w="100%">{reactElements}</Box>}
        </Box>
      </Flex>
    </Box>
  );
};

export default Create;
