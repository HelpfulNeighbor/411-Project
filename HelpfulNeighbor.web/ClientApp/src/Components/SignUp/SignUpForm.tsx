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
import { useForm} from 'react-hook-form';
import { CreateUserDto } from '../../Constants/types';

type SignUpFormProps = {
  onClose: (
    formData?: CreateUserDto
  ) => void;
};

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// };

function SignUpForm({ onClose }: SignUpFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUserDto>({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (formData: CreateUserDto)=> {
    // Handle form submission here (e.g., send data to the server)
    onClose(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>

      <FormControl isInvalid={!!errors.firstName} mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            {...register('firstName', {
              required: 'First name is required',
            })}
            type="text"
          />
          {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.lastName} mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            {...register('lastName', {
              required: 'Last name is required',
            })}
            type="text"
          />
          {errors.lastName && <Text color="red.500">{errors.lastName.message}</Text>}
        </FormControl>

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

        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            {...register('email', {
              required: 'Email is required',
            })}
            type="text"
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
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
            Submit
          </Button>
        </Flex>
    </form>
  );
};

export default SignUpForm;
