import React, { useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Sidebar, { Filters } from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import productsData from "./data/products.json";
import theme from "./theme/theme";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    name: "",
    inStock: false,
    category: "",
  });

  const handleMenuToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const nameMatch = filters.name
        ? new RegExp(filters.name, "i").test(product.name)
        : true;

      const stockMatch = filters.inStock ? product.quantity > 0 : true;

      const categoryMatch = filters.category
        ? product.category === filters.category
        : true;

      return nameMatch && stockMatch && categoryMatch;
    });
  }, [filters]);

  const categories = useMemo(() => {
    const cats = productsData.map((product) => product.category);
    return Array.from(new Set(cats));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onMenuToggle={handleMenuToggle} />
      <Box display="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={handleMenuToggle}
          categories={categories}
          onApplyFilters={handleApplyFilters}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <ProductList products={filteredProducts} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
