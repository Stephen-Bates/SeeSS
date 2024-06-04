import { Box, ScaleFade, Flex, Input, Text, Tooltip, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { CiShoppingTag } from 'react-icons/ci';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tags = ({ addTag, removeTag, tags }) => {
  const [tag, setTag] = useState('');

  const handleOnChange = (e) => {
    setTag(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    const canAddNewTag = tag.trim().length > 0 && tags.length < 10;
    if (e.key.toLowerCase() === 'enter' && canAddNewTag) {
      addTag(tag);
      setTag('');
    }
  };

  return (
    <Box>
      <Flex align="center">
        <Text color="gray.500" mb="0.25rem">
          Add tags
        </Text>
        <Box fontSize="1.2rem" ml="0.25rem">
          <CiShoppingTag />
        </Box>
      </Flex>
      <Input
        value={tag}
        disabled={tags.length === 10}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        w={['100%', '50%', '50%']}
        borderColor="gray.300"
      />
      {tags.length > 0 && (
        <Box my="4rem" bg="gray.200" borderRadius={8} p="2rem">
            <Text fontWeight="bold" color="gray.500">
              {tags.length} out of 10 tags
            </Text>
          <UnorderedList m="0" display="flex" flexWrap="wrap">
            {tags.map(({ tag, id }) => {
              return (
                <ScaleFade key={id} initialScale={0.5} in={true}>
                  <Box
                    position="relative"
                    bg="blue.500"
                    py="0.5rem"
                    px="0.5rem"
                    boxShadow="md"
                    borderRadius={12}
                    m="1rem"
                  >
                    <Text color="#fff">#{tag}</Text>
                    <Tooltip bg="gray.500" label="Remove">
                      <Box
                        onClick={() => removeTag(id)}
                        pos="absolute"
                        right="0"
                        top="-1px"
                        color="#fff"
                        cursor="pointer"
                      >
                        <AiOutlineCloseCircle />
                      </Box>
                    </Tooltip>
                  </Box>
                </ScaleFade>
              );
            })}
          </UnorderedList>
        </Box>
      )}
    </Box>
  );
};

export default Tags;
