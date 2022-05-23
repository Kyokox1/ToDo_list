import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./components/App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider>
			<ColorModeScript initialColorMode="light" />
			<App />
		</ChakraProvider>
	</StrictMode>
);
