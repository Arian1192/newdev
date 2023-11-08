'use client';
import { TextFieldInput, TextFieldSlot, TextFieldRoot } from '@radix-ui/themes';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

export const PasswordTextField = () => {
	const [showPassword, setShowPassword] = useState(false);
	useEffect(() => {
		console.log(showPassword);
	}, [showPassword]);
	return (
		<TextFieldRoot color="bronze" mt={'2'}>
			<TextFieldInput
				placeholder="Password"
				type={showPassword ? undefined : 'password'}
			/>
			<TextFieldSlot onClick={() => setShowPassword(!showPassword)}>
				{showPassword && <EyeOpenIcon />}
				{!showPassword && <EyeClosedIcon />}
			</TextFieldSlot>
		</TextFieldRoot>
	);
};
