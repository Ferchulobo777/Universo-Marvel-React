import {useState} from "react";
import {
  Box,
  Text,
  Image,
  Input,
  Button,
  Link,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Home = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Box
      w="100%"
      h="100vh"
      bg="rgba(0, 0, 0, 0.6)"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" alignItems="center" justifyContent="center" mb={10}>
        <Image
          src="/images/Marvel.jpg"
          objectFit="cover"
          position="absolute"
          zIndex={0}
          w="100%"
          h="100vh"
          top="0em"
          mixBlendMode="overlay"
        />
        <Image
          src="/images/marvel-logo.png"
          alt="marvel-logo"
          boxSize="25%"
          top="0"
          objectFit="cover"
          borderRadius="md"
          position="absolute"
          zIndex={1}
          minW="250px"
        />
      </Box>
      <Box
        w="40%"
        h="60%"
        bg="rgba(255,255,255,0.38)"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        px={6}
        textAlign="center"
        zIndex={1}
        minW="250px"
        minH="350px"
        mt="4em"
      >
        <Text
          mb={2}
          textAlign="center"
          py={6}
          fontSize={{ base: "sm", md: "lg", lg: "3xl" }}
          fontWeight="600"
          fontFamily="Avengers"
        >
          Inicio de Sesion
        </Text>
        <form>
          <InputGroup mb={4} size={{ base: "sm", md: "md", lg: "lg" }}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser color="black" />}
            />
            <Input
              placeholder="Nombre de Usuario"
              mb={4}
              px={4}
              focusBorderColor="red.500" 
              _placeholder={{ color: "gray.800" }} 
            />
          </InputGroup>
          <InputGroup
            mb={4}
            size={{ base: "sm", md: "md", lg: "lg" }}
            fontSize={{ base: "md", md: "md", lg: "lg" }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<FaLock color="black" />}
            />
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Contraseña"
              mb={4}
              px={4}
              focusBorderColor="red.500"
              _placeholder={{ color: "gray.800" }}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="2rem"
                size="sm"
                onClick={handleClick}
                icon={show ? <FaEye /> : <FaEyeSlash />}
              />
            </InputRightElement>
          </InputGroup>
          <Button
            type="submit"
            mb={4}
            colorScheme="red" 
            variant="solid" 
            _hover={{
              bg: "red.600", 
            }}
            _focus={{
              outline: "none", 
              boxShadow: "none",
            }}
          >
            Iniciar Sesión
          </Button>
        </form>
        <Text textAlign="center" fontSize={{ base: "sm", md: "sm", lg: "lg" }} fontWeight='600'>
      ¿No tienes una cuenta?{" "}
      <Link href="/sign-up" _hover={{ color: "red.500" }}>
        Regístrate
      </Link>
    </Text>
      </Box>
    </Box>
  );
};

export default Home;
