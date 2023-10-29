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
  useToast,
  ButtonGroup,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../Authentication/AuthProvider";
import api from "../../Api/config";
import { useNavigate } from "react-router-dom";

export default function LogoutModel() {
  const BlurredOverlay = () => (
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setoverlay] = React.useState(<BlurredOverlay />);

  const { isLoggedIn } = useAuth();
  const { clearToken } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const logout = async () => {
    await api
    .post<{token: string}>('/api/authentication/logout');
    clearToken?.()
    onClose();
    toast({
      title: 'See you later!',
      description: 'You have been logged out.',
      status: 'success',
      position: 'bottom-right',
      variant: 'subtle',
      duration: 5000,
      isClosable: true,
    })
    navigate("/");
  }

  return (
    <>
      {isLoggedIn?.() && (
        <Button
          onClick={() => {
            setoverlay(<BlurredOverlay />);
            onOpen();
          }}
          rightIcon={<MdLogout />}
          colorScheme="purple"
          p="20px"
        >
          Logout
        </Button>
      )}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Are you sure you want to logout?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <ButtonGroup>
            <Button onClick={logout} colorScheme="gray">
              Yes
            </Button>
            <Button onClick={onClose} colorScheme="red">
              No
            </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
