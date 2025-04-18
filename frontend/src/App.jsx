// import { Box } from "@chakra-ui/react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Users from "./pages/Users";
// import Products from "./pages/Products";
// import Orders from "./pages/Orders";
// import NavBar from "./components/NavBar";

// function App()
// {
//   return (
//     <Box minH="100vh" bg="gray.100">
//       <NavBar />
//       <Box maxW="1140px" mx="auto" p={4}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/orders" element={<Orders />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// }

// export default App;

import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";

function App()
{
  return (
    <Box minH="100vh" bg="gray.100">
      <NavBar />
      <Box p={6}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;