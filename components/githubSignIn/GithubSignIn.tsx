'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import React from 'react';

export const GithubSignIn = () => {
	return (
		<Button
			onClick={() => signIn('github', { callbackUrl: '/' })}
			className="w-full bg-[#333333] text-white hover:bg-[#444444] hover:cursor-pointer"
			size={'3'}
			mt={'4'}
		>
			<GitHubLogoIcon width={'18'} />
			<Text>Sign up with GitHub</Text>
		</Button>
	);
};
