import { ChakraProvider } from '@chakra-ui/react'
import '../../shared/main.css'
import theme from '../../shared/tokens/theme'
import { BrowserRouter } from './RouterProvider'

export function Providers() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter />
		</ChakraProvider>
	)
}
