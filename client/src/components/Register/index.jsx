import { useCallback, useState } from 'react';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { formState } from '../../utils/state';
import FormInputField from '../Shared/FormInputField';

const Register = () => {
  const [form, setForm] = useState(formState);

  const updateField = useCallback(
    (name, value, attribute) => {
      setForm((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], [attribute]: value },
      }));
    },
    [setForm]
  );

  return (
    <Flex justify="center" mt="10rem">
      <Box
        borderRadius={8}
        boxShadow="sm"
        as="form"
        border="1px solid"
        borderColor="gray.300"
        minH="600px"
        w={['100%', '500px', '500px']}
      >
        <Box mb="4rem" p="0.5rem" textAlign="center">
          <Heading color="gray.600">Create Account</Heading>
        </Box>
        <Box my="2rem">
          <FormInputField
            name={form.firstName.name}
            value={form.firstName.value}
            id={form.firstName.name}
            error={form.firstName.error}
            type={form.firstName.type}
            label="First Name"
            errorField="First name"
            width="90%"
            updateField={updateField}
          />
        </Box>
        <Box my="2rem">
          <FormInputField
            name={form.lastName.name}
            value={form.lastName.value}
            id={form.lastName.name}
            error={form.lastName.error}
            type={form.lastName.type}
            label="Last Name"
            errorField="Last name"
            width="90%"
            updateField={updateField}
          />
        </Box>
        <Box my="2rem">
          <FormInputField
            name={form.email.name}
            value={form.email.value}
            id={form.email.name}
            error={form.email.error}
            type={form.email.type}
            label="Email"
            errorField="Email"
            width="90%"
            updateField={updateField}
          />
        </Box>
        <Box my="2rem">
          <FormInputField
            name={form.password.name}
            value={form.password.value}
            id={form.password.name}
            error={form.password.error}
            type={form.password.type}
            label="Password"
            errorField="Password"
            width="90%"
            updateField={updateField}
          />
        </Box>
        <Flex justify="center">
          <Button width="90%" colorScheme="teal">
            Create account
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Register;
