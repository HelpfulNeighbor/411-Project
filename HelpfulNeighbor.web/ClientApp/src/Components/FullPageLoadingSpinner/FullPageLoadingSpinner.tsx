import { Spinner, Flex } from "@chakra-ui/react"; // Adjust based on your UI library

const FullPageLoadingSpinner = () => {
  return (
    <Flex
      align="center"
      justify="center"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      backgroundColor="rgba(255, 255, 255, 0.8)" // Semi-transparent white background
      zIndex={9999}
    >
      <Spinner size="xl" color="purple.500" />
    </Flex>
  );
};

export default FullPageLoadingSpinner;
