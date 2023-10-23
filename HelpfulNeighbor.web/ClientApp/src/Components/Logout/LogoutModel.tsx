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
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../Authentication/AuthProvider";
import api from "../../Api/config";

export default function LogoutModel() {
  const BlurredOverlay = () => (
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setoverlay] = React.useState(<BlurredOverlay />);

  const { isLoggedIn } = useAuth();
  const { clearToken } = useAuth();

  const logout = async () => {
    await api
    .post<{token: string}>('/api/authentication/logout');
    clearToken?.()
    onClose();
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
            <Button onClick={logout} colorScheme="gray">
              Yes
            </Button>
            <Button onClick={onClose} colorScheme="red">
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
