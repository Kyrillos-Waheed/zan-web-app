// import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";

// const NavBar = () =>
// {
//     return (
//         <Box bg="orange.500" py={4} shadow="md">
//             <Container maxW="1140px">
//                 <HStack justifyContent="space-between" alignItems="center">
//                     <Text fontWeight="bold" fontSize="2xl" color="white">
//                         My App
//                     </Text>
//                     <HStack spacing={6}>
//                         <Link
//                             href="/"
//                             fontWeight="medium"
//                             color="white"
//                             _hover={{ color: "orange.100", textDecoration: "underline" }}
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             href="/users"
//                             fontWeight="medium"
//                             color="white"
//                             _hover={{ color: "orange.100", textDecoration: "underline" }}
//                         >
//                             Users
//                         </Link>
//                         <Link
//                             href="/products"
//                             fontWeight="medium"
//                             color="white"
//                             _hover={{ color: "orange.100", textDecoration: "underline" }}
//                         >
//                             Products
//                         </Link>
//                         <Link
//                             href="/orders"
//                             fontWeight="medium"
//                             color="white"
//                             _hover={{ color: "orange.100", textDecoration: "underline" }}
//                         >
//                             Orders
//                         </Link>
//                     </HStack>
//                 </HStack>
//             </Container>
//         </Box>
//     );
// };

// export default NavBar;


import { Container, Box, Flex, Heading, Link } from "@chakra-ui/react";

const NavBar = () =>
{
    return (
        <Box bg="orange.500" color="white" py={4}>
            <Container maxW="1140px">
                <Flex justify="space-between" align="center">
                    <Heading size="md">My App</Heading>
                    <Flex gap={6}>
                        <Link href="/" _hover={{ textDecoration: "underline" }} fontWeight="bold">
                            Home
                        </Link>
                        <Link href="/users" _hover={{ textDecoration: "underline" }} fontWeight="bold">
                            Users
                        </Link>
                        <Link href="/products" _hover={{ textDecoration: "underline" }} fontWeight="bold">
                            Products
                        </Link>
                        <Link href="/orders" _hover={{ textDecoration: "underline" }} fontWeight="bold">
                            Orders
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default NavBar;