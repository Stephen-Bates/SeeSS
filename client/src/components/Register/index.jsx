import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { formState } from '../../utils/state';
import FormInputField from '../Shared/FormInputField';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Register = () => {
  const [form, setForm] = useState(formState);
  const [addUser] = useMutation(ADD_USER);

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    clearErrors();
    if (!validateForm()) {
      return;
    }

    const response = await addUser({
      variables: {
        username: `${form.firstName.value} ${form.lastName.value}`,
        email: form.email.value,
        password: form.password.value,
      },
    });

    const token = response.data.addUser.token;
    Auth.login(token);
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
        minH="600px"
        w={['100%', '500px', '500px']}
        mb="1rem"
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
        <Flex p="0.5rem" justify="center">
          <Button type="submit" width="90%" colorScheme="teal">
            Create account
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Register;
