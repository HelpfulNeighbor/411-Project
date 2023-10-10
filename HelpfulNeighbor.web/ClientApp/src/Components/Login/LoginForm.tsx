import React from 'react';
import {
  ModalBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormProps = {
  onClose: () => void;
};

type FormValues = {
  username: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission here (e.g., send data to the server)
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <FormControl isInvalid={!!errors.username} mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            {...register('username', {
              required: 'Username is required',
            })}
            type="text"
          />
          {errors.username && <Text color="red.500">{errors.username.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register('password', {
              required: 'Password is required',
            })}
            type="password"
          />
          {errors.password && <Text color="red.500">{errors.password.message}</Text>}
        </FormControl>
      </ModalBody>

      <Flex justify="center" align="center">
          <Button type="submit" colorScheme="purple">
            Login
          </Button>
        </Flex>
    </form>
  );
};

export default LoginForm;
