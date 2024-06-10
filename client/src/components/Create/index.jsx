import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { useMutation } from '@apollo/client';
import { nanoid } from 'nanoid';
import { BsPencil } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import CodeEditor from './CodeEditor';
import Tags from './Tags';
import TitleInput from './TitleInput';
import { initialCodeState } from '../../utils/state';
import { QUERY_MY_STYLES } from '../../utils/queries';
import { ADD_STYLE, UPDATE_STYLE } from '../../utils/mutations';

const Create = () => {
  const [addStyle] = useMutation(ADD_STYLE, {
    refetchQueries: [{ query: QUERY_MY_STYLES }],
  });
    const [updateStyle] = useMutation(UPDATE_STYLE, {
        refetchQueries: [{query: QUERY_MY_STYLES}]
    });
  const toast = useToast();
  const navigate = useNavigate();
  const [view, setView] = useState('edit');
  const [code, setCode] = useState(initialCodeState);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [myStyleId, setMyStyleId] = useState('');

  const parser = new HtmlToReactParser();
  const reactElements = parser.parse(code);

  const goToEdit = () => {
    setView('edit');
  };

  const goToPreview = () => {
    setView('preview');
  };

  const goToNew = () => {
    setView('edit');
    setMyStyleId('');
    setTitle('');
    setTags([]);
    populateCode(initialCodeState);
  };

  const handleSetCode = (editor, data, value) => {
    setCode(value);
  };

  const populateCode = (existingCode) => {
    setCode(existingCode);
  };

  const handleToast = () => {
    toast({
      title: 'Style saved',
      description: 'Your style has been successfully saved.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      onCloseComplete: () => navigate('/profile'),
    });
  };

  const resetState = () => {
    setTitle('');
    setCode(initialCodeState);
    setTags([]);
    handleToast();
    setMyStyleId('');
  };

  const updateCode = async () => {
    try {
      if (tags.length && code.length && title.trim().length > 0) {
        const tagsData = tags.map(({ tag }) => tag);

        await updateStyle({
          variables: {
            styleId: myStyleId,
            title,
            style_Text: code,
            tag: tagsData,
          },
        });

        resetState();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveCode = async () => {
    try {
      if (tags.length && code.length && title.trim().length > 0) {
        const tagsData = tags.map(({ tag }) => tag);

        await addStyle({
          variables: {
            title,
            style_Text: code,
            tag: tagsData,
          },
        });

        resetState();
      }
    } catch (err) {
      console.log(err);
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

  const handleSetTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handleSetTags = (tags) => {
    setTags(tags);
  };

  const handleSetMyStyleId = (id) => {
    setMyStyleId(id);
  };

  return (
    <Box minH="100vh">
      <Flex mb="1rem" flexDir={['column', 'column', 'row']} mt="10rem" position="relative">
        <Box flexGrow={1} w={['100%', '300px', '300px']}>
          <DrawerMenu
            handleSetMyStyleId={handleSetMyStyleId}
            populateCode={populateCode}
            handleSetTitle={handleSetTitle}
            handleSetTags={handleSetTags}
          />
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
            <Button onClick={goToNew} mx="0.5rem" colorScheme="teal">
              <Box mx="0.25rem">
                <AiOutlinePlus />
              </Box>
              New
            </Button>
            <Button onClick={goToEdit} mx="0.5rem" bg="gray.300">
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
                <TitleInput title={title} handleSetTitle={handleSetTitle} />
                <Tags addTag={addTag} removeTag={removeTag} tags={tags} />
              </Box>
              <Flex justify="center" my="5rem">
                {myStyleId.length > 0 && (
                  <Button onClick={updateCode} colorScheme="teal" size="lg">
                    Update code
                  </Button>
                )}
                {myStyleId.length === 0 && (
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
