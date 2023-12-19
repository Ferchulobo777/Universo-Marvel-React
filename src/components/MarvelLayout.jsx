import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Text,
  Switch,
  Stack,
  Grid,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import theme from "../styles/theme";
import { useDarkMode } from "../context/DarkModeContext";
import "../App.css";

const MarvelLayout = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const bgColor = darkMode ? theme.colors.dark.bg : theme.colors.light.bg;
  const color = darkMode ? theme.colors.dark.color : theme.colors.light.color;

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Grid templateRows="auto 1fr auto" height="100vh" gap={10}>
      <Box
        w="100%"
        h="8em"
        background={bgColor}
        color={color}
        fontFamily="heading"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
      >
        <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
          Universo Marvel
        </Text>
        <Stack direction="row">
          <Switch
            colorScheme="gray"
            size={{ base: "sm", md: "md", lg: "lg" }}
            isChecked={darkMode}
            onChange={handleToggleDarkMode}
          />
        </Stack>
      </Box>
      <Outlet />
      <Box
        w="100%"
        h="16em"
        background={bgColor}
        color={color}
        fontFamily="body"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={"2em"}
        px={4}
      >
        <Text fontWeight={"500"}>
          Fernando Rodriguez || Design Ferchulobo777
        </Text>
        <Text>© {new Date().getFullYear()} Todos los derechos reservados</Text>
        <Stack direction="row" spacing={4}>
          <Link
            href="https://www.linkedin.com/in/ferchulobo777/"
            target="_blank"
            isExternal
          >
            <Button
              leftIcon={<Icon as={FaLinkedin} />}
              colorScheme="gray"
              bg="rgba(0, 119, 181, 1)" // Color de fondo sin transparencia
              color="#f9f9f9"
              _hover={{
                bg: "rgba(0, 119, 181, 0.8)", // Color de fondo con transparencia al hacer hover
              }}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/Ferchulobo777"
            target="_blank"
            isExternal
          >
            <Button
              leftIcon={<Icon as={FaGithub} />}
              colorScheme="gray"
              bg="rgba(0, 0, 0, 1)"
              color="#f9f9f9"
              _hover={{
                bg: "rgba(0, 0, 0, 0.8)",
              }}
            >
              GitHub
            </Button>
          </Link>

          <Link
            href="https://fernandorodriguezportfolio.netlify.app/"
            target="_blank"
            isExternal
          >
            <Button
              leftIcon={<Icon as={FaUser} />}
              colorScheme="gray"
              bg="rgba(0, 0, 0, 1)"
              color="#f9f9f9"
              _hover={{
                bg: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Mi Portfolio
            </Button>
          </Link>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MarvelLayout;
