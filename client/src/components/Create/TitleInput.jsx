import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const TitleInput = ({ title, handleSetTitle }) => {
  return (
    <FormControl my="2rem">
      <FormLabel color="gray.500">Title</FormLabel>
      <Input
        value={title}
        onChange={(e) => handleSetTitle(e.target.value)}
        w={['100%', '50%', '50%']}
        borderColor="gray.300"
      />
    </FormControl>
  );
};

export default TitleInput;
