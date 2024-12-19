import { FC, InputHTMLAttributes } from 'react';
import { Flex } from './Flex';
import { KeypadButton } from './KeypadButtons.styled';

export interface IKeypadInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const KeypadButtons: FC<IKeypadInputProps> = (props) => {
	return (
		<Flex flexDirection="column" gap="4px" width="100%">
			<Flex gap="4px" width="100%">
				<KeypadButton value="7" />
				<KeypadButton value="8" />
				<KeypadButton value="9" />
			</Flex>
			<Flex gap="4px" width="100%">
				<KeypadButton value="4" />
				<KeypadButton value="5" />
				<KeypadButton value="6" />
			</Flex>
			<Flex gap="4px" width="100%">
				<KeypadButton value="1" />
				<KeypadButton value="2" />
				<KeypadButton value="3" />
			</Flex>
			<Flex gap="4px" width="100%">
				<KeypadButton value="0" />
				<KeypadButton value="00" />
				<KeypadButton value="C" />
			</Flex>
		</Flex>
	);
};
