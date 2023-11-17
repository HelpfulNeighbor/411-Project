import React, { useState } from "react";
import {
  ModalBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../Api/config";
import { useAuth } from "../../Authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react"
import FullPageLoadingSpinner from "../FullPageLoadingSpinner/FullPageLoadingSpinner";

type LoginFormProps = {
  onClose: () => void;
};

type FormValues = {
  userName: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { setToken } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/api/authentication/login", data)
      setToken?.(response.data);
          console.log("Token Set:", response.data);
          toast({
            title: 'Login succcessful.',
            description: 'Welcome back!',
            status: 'success',
            position: 'bottom-right',
            variant: 'subtle',
            duration: 5000,
            isClosable: true,
          })
          navigate("/app/profile");

    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <FormControl isInvalid={!!errors.userName} mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            {...register("userName", {
              required: "Username is required",
            })}
            type="text"
          />
          {errors.userName && (
            <Text color="red.500">{errors.userName.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
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
          Login
        </Button>
      </Flex>
    </form>
    {isLoading && <FullPageLoadingSpinner />}
    </>
  );
};

export default LoginForm;
