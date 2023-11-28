import { Heading } from "@chakra-ui/react";

export default function ProfileSettings() {
  return (
    <>
    <div>
        <Heading mt={5} textAlign="center">Settings</Heading>
    </div>
    </>
  );
}

// import { useState } from "react";
// import { Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useToast } from "@chakra-ui/react";
// import { useAuth } from "../../Authentication/AuthProvider"; // Update the path
// import api from "../../Api/config";
// import { UserGetDto } from "../../Data/Types/UserTypes";

// export default function ProfileSettings() {
//   const { clearToken } = useAuth();
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
//   const toast = useToast();

//   const handleDeleteAccount = async () => {
//     // Make API call to delete user account
//     try {
//       // Replace the following line with your actual API endpoint for deleting the user account
//       const response = await api.delete<UserGetDto>(`/api/users/`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         // Delete successful
//         clearToken?.(); // Clear the token
//         setDeleteModalOpen(false); // Close the modal
//         toast({
//           title: "Account Deleted",
//           status: "success",
//           duration: 3000,
//           isClosable: true,
//         });
//         // Redirect the user to the home page or log-in page
//         // You can use react-router-dom or Next.js's useRouter for navigation
//       } else {
//         // Delete failed
//         toast({
//           title: "Error Deleting Account",
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//       }
//     } catch (error) {
//       console.error("Error deleting account:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Heading mt={5} textAlign="center">
//           Settings
//         </Heading>
//         <Button colorScheme="red" textAlign='center' mt={4} onClick={() => setDeleteModalOpen(true)}>
//           Delete Account
//         </Button>
//       </div>

//       <Modal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Confirm Account Deletion</ModalHeader>
//           <ModalBody>Are you sure you want to delete your account? This action cannot be undone.</ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={handleDeleteAccount}>
//               Yes, Delete
//             </Button>
//             <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
