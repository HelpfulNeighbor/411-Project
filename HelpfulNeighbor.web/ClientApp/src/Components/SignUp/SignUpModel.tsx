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

import SignUpForm from './SignUpForm';
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
        colorScheme="purple" p="20px">
        Sign Up
      </Button>
            )}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Create Your Account</ModalHeader>
          <ModalCloseButton />
          <SignUpForm onClose={onClose}/>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}