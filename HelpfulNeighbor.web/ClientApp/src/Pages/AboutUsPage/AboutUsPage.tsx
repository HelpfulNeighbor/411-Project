import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdAttachMoney, MdPhone } from "react-icons/md";
import NavBar from "../../Components/NavBar/NavBar";

export default function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <Flex>
        <Box
          display="flex"
          bg="#E9D8FD"
          w="100%"
          h="350px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="b" fontSize="75px">
            ABOUT US
          </Heading>
        </Box>
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        ml="50px"
        boxShadow="2xl"
        borderRadius='30px'
        w="40%"
        p="25px"
        bgColor="white"
        position="relative"
        top="-26px"
        left='60px'
      >
        <Heading color="purple" mb="10px">
          WHO WE ARE
        </Heading>
        <Text mb="30px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero
          iusto eos rerum neque corporis fuga quae blanditiis, autem sequi,
          fugit error exercitationem nulla accusantium. Illum illo culpa in
          dignissimos dicta accusantium consequuntur beatae officiis amet qui.
          Earum facilis ratione ipsum, pariatur soluta officiis cum voluptas
          exercitationem maiores illum aperiam eveniet at tempore fugiat nostrum
          sapiente ex omnis nulla consequuntur rem quo! Voluptatibus explicabo
          nemo vero sunt autem qui quae incidunt perspiciatis. Rem, quae aperiam
          velit maiores voluptatibus hic iste nulla accusamus? Labore voluptatum
          maiores, porro explicabo architecto libero consequuntur repellendus,
          veniam ullam veritatis rerum minus unde quas molestiae tempora!
        </Text>
      </Box>

      <Image
        boxSize="500px"
        objectFit="fill"
        src="/GroupPicture.jpg"
        top="524px"
        left="1028px"
        shadow="2xl"
        height="530px"
        width="730px"
        position="absolute"
        borderRadius='30px'
      />

      <Box
        display="flex"
        flexDirection="column"
        ml="50px"
        boxShadow="2xl"
        borderRadius='30px'
        w="40%"
        p="25px"
        bgColor="white"
        position="relative"
        top="28px"
        left='60px'
      >
        <Heading color="purple" mb="10px">
          WHY WE STARTED
        </Heading>
        <Text mb="24px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero
          iusto eos rerum neque corporis fuga quae blanditiis, autem sequi,
          fugit error exercitationem nulla accusantium. Illum illo culpa in
          dignissimos dicta accusantium consequuntur beatae officiis amet qui.
          Earum facilis ratione ipsum, pariatur soluta officiis cum voluptas
          exercitationem maiores illum aperiam eveniet at tempore fugiat nostrum
          sapiente ex omnis nulla consequuntur rem quo! Voluptatibus explicabo
          nemo vero sunt autem qui quae incidunt perspiciatis. Rem, quae aperiam
          velit maiores voluptatibus hic iste nulla accusamus? Labore voluptatum
          maiores, porro explicabo architecto libero consequuntur repellendus,
          veniam ullam veritatis rerum minus unde quas molestiae tempora!
        </Text>

        <ButtonGroup spacing="3" ml="30%">
          <Button rightIcon={<MdAttachMoney />} colorScheme="yellow" p="20px">
            Donate
          </Button>
          <Button rightIcon={<MdPhone />} colorScheme="purple" p="20px">
            Contact Us
          </Button>
        </ButtonGroup>
      </Box>

      <Box bg="#E9D8FD" w="100%" h="150px" />

    </div>
  );
}
