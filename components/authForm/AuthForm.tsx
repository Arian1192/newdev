'use client';
import { Flex, Text, TextFieldInput, Button } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { GithubSignIn } from '../githubSignIn/GithubSignIn';
import { PasswordTextField } from '../passwordTextField/PasswordTextField';
import Link from 'next/link';
import { setDataToLocalStorage } from '@/app/_utils/setDataToLocalStorage';

export const AuthForm = () => {
	const pathName = usePathname();
	const router = useRouter();
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const response = await fetch('/api/sign-up', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ data }),
		});
		const token = await response.json();
		setDataToLocalStorage({ key: 'token', value: token });
		router.push('/main');
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
					{pathName === '/auth/signup' && (
						<Text color="bronze" size={'2'} align={'left'}>
							Already have an account?{' '}
							<span className="font-bold">
								<Link href="/auth/signin">Sign in</Link>
							</span>
						</Text>
					)}
					{pathName !== '/auth/signup' && (
						<Text color="bronze" size={'2'} align={'left'}>
							Don`t have an account ?{' '}
							<span className="font-bold">
								<Link href="/auth/signup">Sign up</Link>
							</span>
						</Text>
					)}
				</Flex>
			</form>
		</Flex>
	);
};

//TODO: REFACTOR TO MAKE A CONDITIONAL FORM TO USE ONLY THE FINNEST
