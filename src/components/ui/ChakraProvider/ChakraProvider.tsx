import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const CustomChakraProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default CustomChakraProvider;
