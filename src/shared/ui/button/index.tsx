import { Button } from '@chakra-ui/react'

interface ZButtonProps {
	fullWidth?: boolean
	text: string
}

const ZButton = (props: ZButtonProps) => {
	return (
		<Button colorScheme='blue' variant='solid' {...props}>
			{props.text}
		</Button>
	)
}

export default ZButton
