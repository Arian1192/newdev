'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button, Text } from '@radix-ui/themes';
import { slateDark } from '@radix-ui/colors';
import { signIn } from 'next-auth/react';
import React from 'react';
import { usePathname } from 'next/navigation';

export const GithubSignIn = () => {
	const pathName = usePathname();
	return (
		<Button
			onClick={() => signIn('github', { callbackUrl: '/' })}
			size={'3'}
			mt={'4'}
			style={{
				backgroundColor: slateDark.slate1,
				color: slateDark.slate12,
				cursor: 'pointer',
			}}
		>
			<GitHubLogoIcon width={'18'} />
			<Text>
				{pathName === '/auth/signup' ? 'Sing Up' : 'Sing In'} with GitHub
			</Text>
		</Button>
	);
};
