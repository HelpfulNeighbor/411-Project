import React from "react";
import {
  ModalBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../Api/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthProvider";

type SignUpFormProps = {
  onClose: () => void;
};

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const { setToken } = useAuth();
  const toast = useToast();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await api.post("/api/authentication/register", data);
      console.log("Registration Response:", response);
  
      if (response.status === 200) {
        const loginResponse = await api.post("/api/authentication/login", {
          userName: data.userName,
          password: data.password,
        });
  
        if (loginResponse.status === 200) {
          setToken?.(loginResponse.data);
          console.log("Token Set:", loginResponse.data);

          toast({
            title: "Account created and logged in.",
            description: "Your account has been registered and you are now logged in!",
            status: "success",
            position: "bottom-right",
            variant: "subtle",
            duration: 5000,
            isClosable: true,
          });
  
          navigate("/app/profile");
        } else {
          toast({
            title: "Login failed after registration.",
            description: "There was an error logging in. Please try again.",
            status: "error",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Something went wrong during registration.",
          description: "There was an error creating your account. Please try again.",
          status: "error",
          position: "bottom-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      onClose();
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <FormControl isInvalid={!!errors.firstName} mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
            })}
            type="text"
          />
          {errors.firstName && (
            <Text color="red.500">{errors.firstName.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.lastName} mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            id="lastName"
            {...register("lastName", {
              required: "Last name is required",
            })}
            type="text"
          />
          {errors.lastName && (
            <Text color="red.500">{errors.lastName.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.userName} mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            id="userName"
            {...register("userName", {
              required: "Username is required",
            })}
            type="text"
          />
          {errors.userName && (
            <Text color="red.500">{errors.userName.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            type="text"
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
          />
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
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
