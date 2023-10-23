import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { MdLogin } from "react-icons/md";
import LoginForm from './LoginForm';
import { useAuth } from "../../Authentication/AuthProvider";

export default function LoginModel() {
  const BlurredOverlay = () => (
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setoverlay] = React.useState(<BlurredOverlay />);

  const {isLoggedIn} = useAuth();

  return (
    <>
    {!isLoggedIn?.() && (
      <Button onClick={() => {
        setoverlay(<BlurredOverlay />)
        onOpen()
      }}
        rightIcon={<MdLogin />}
        colorScheme="purple" p="20px">
        Login
      </Button>
      )}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <LoginForm onClose={onClose}/>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
