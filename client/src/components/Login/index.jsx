import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import FormInputField from '../Shared/FormInputField';
import { loginFormState } from '../../utils/state';
import { useState, useCallback } from 'react';

const Login = () => {
  const [form, setForm] = useState(loginFormState);

  const updateField = useCallback(
    (name, value, attribute) => {
      setForm((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], [attribute]: value },
      }));
    },
    [setForm]
  );

  const clearErrors = () => {
    for (const key of Object.keys(form)) {
      updateField(key, '', 'error');
    }
  };

  const validateForm = () => {
    let errors = false;
    for (const key of Object.keys(form)) {
      if (form[key].value.trim().length === 0 || form[key].error.length) {
        errors = true;
      }
    }
    return !errors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (!validateForm()) {
      return;
    }

    console.log('SUBMIT FORM');
  };

  return (
    <Flex justify="center" mt="10rem">
      <Box
        onSubmit={handleOnSubmit}
        borderRadius={8}
        boxShadow="sm"
        as="form"
        border="1px solid"
        borderColor="gray.300"
        minH="500px"
        w={['100%', '450px', '450px']}
        mb="1rem"
      >
        <Box mb="4rem" p="0.5rem" textAlign="center">
          <Heading color="gray.600">Login</Heading>
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
        <Flex p="0.5rem" justify="center">
          <Button type="submit" width="90%" colorScheme="teal">
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
