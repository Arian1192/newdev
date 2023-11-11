import { Button, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';

export const credentialsSingUp = () => {
	return (
		<Button
			size={'3'}
			mt={'4'}
			color="bronze"
			onClick={() => signIn('credentials', { callbackUrl: '/' })}
		>
			<Text>Sign up</Text>
		</Button>
	);
};
