import React from "react";
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    api
      .post("/api/authentication/login", data)
      .then((response) => {
        if (response.status === 200) {
          setToken?.(response.data);
          navigate("/app/profile");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
    onClose();
  };

  return (
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
  );
};

export default LoginForm;
