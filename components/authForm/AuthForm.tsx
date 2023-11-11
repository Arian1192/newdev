'use client';
import { Flex, Text, TextFieldInput, Button } from '@radix-ui/themes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { GithubSignIn } from '../githubSignIn/GithubSignIn';
import { PasswordTextField } from '../passwordTextField/PasswordTextField';
import Link from 'next/link';

export const AuthForm = () => {
	const pathName = usePathname();

	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const response = await fetch('/api/sign-up', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ data }),
		});
		const user = await response.json();
		
	};

	return (
		<Flex direction={'column'} gap={'4'}>
			<GithubSignIn />
			<Flex align={'center'} justify={'center'}>
				<Text size={'4'} align={'center'} color="bronze">
					or
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				{pathName === '/auth/signup' ? (
					<TextFieldInput
						placeholder={'Name'}
						mt={'3'}
						color="bronze"
						{...register('name', { required: true })}
					/>
				) : null}
				<TextFieldInput
					placeholder={'Email'}
					mt={'3'}
					color="bronze"
					{...register('email', { required: true })}
				/>
				<PasswordTextField register={register} />
				<Flex direction={'column'}>
					<Button size={'3'} mt={'4'} color="bronze">
						<Text>Sign {pathName === '/auth/signup' ? 'Up' : 'In'}</Text>
					</Button>
					<Text color="bronze" size={'2'} align={'left'}>
						Already have an account?{' '}
						<span className="font-bold">
							<Link href="/signin">Sign in</Link>
						</span>
					</Text>
				</Flex>
			</form>
		</Flex>
	);
};

//TODO: REFACTOR TO MAKE A CONDITIONAL FORM TO USE ONLY THE FINNEST
