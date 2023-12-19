import React from 'react';
import { Box, Text, Input, Button, Select } from '@chakra-ui/react';

const SignUp = () => {
  console.log("SignUp");
  return (
    <Box w='100%' h='100vh' position='relative' display='flex' flexDir='column'>
      <Text fontSize='2xl' mb='4' color='red'>
        Sign-Up
      </Text>
      
      <Box maxW='400px' mx='auto'>
        <Input mb='3' placeholder='Nombre' />
        <Input mb='3' placeholder='Apellido' />
        <Input mb='3' type='date' placeholder='Fecha de Nacimiento' />
        <Input mb='3' type='email' placeholder='Email' />
        <Input mb='3' type='password' placeholder='Contraseña' />
        <Input mb='3' type='password' placeholder='Confirmar Contraseña' />
        <Select mb='3' placeholder='Género'>
          <option value='masculino'>Masculino</option>
          <option value='femenino'>Femenino</option>
          <option value='otro'>Otro</option>
        </Select>
        <Input mb='3' type='file' accept='image/*' />
        <Button colorScheme='teal' size='md' mt='4'>
          Crear Cuenta
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;