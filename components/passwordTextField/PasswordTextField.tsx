'use client';
import { TextFieldInput, TextFieldSlot, TextFieldRoot } from '@radix-ui/themes';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export const PasswordTextField = ({
	register,
}: {
	register: UseFormRegister<FieldValues>;
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<TextFieldRoot color="bronze" mt={'3'}>
			<TextFieldInput
				placeholder="Password"
				type={showPassword ? undefined : 'password'}
				{...register('password', { required: true })}
			/>
			<TextFieldSlot onClick={() => setShowPassword(!showPassword)}>
				{showPassword && <EyeOpenIcon />}
				{!showPassword && <EyeClosedIcon />}
			</TextFieldSlot>
		</TextFieldRoot>
	);
};
