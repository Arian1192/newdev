import {
	Button,
	Card,
	Flex,
	Separator,
	Text,
	TextFieldInput,
} from '@radix-ui/themes';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { PasswordTextField } from '../../../components/passwordTextField/PasswordTextField';
import { signIn } from 'next-auth/react';
import { GithubSignIn } from '../../../components/githubSignIn/GithubSignIn';
export default function Page() {
	return (
		<div className="w-full h-screen border bg-[url('/background.jpg')] bg-cover  flex flex-col justify-center items-center">
			{/* COLOCAR UN LAYOUT CON LA MARCA EN LA PARTE DE ARRIBA Y UN FOOTER DECENTE */}
			<div className="relative">
				<Card variant="surface" style={{ width: 300 }} className="p-3 z-40">
					<Flex align={'end'} direction={'row'} gap={'4'}>
						<Text color="bronze" size={'8'} mt={'2'}>
							Welcome!
						</Text>
					</Flex>
					<Flex direction={'column'}>
						{/* <Text color="bronze" size={'4'} align={'left'} mt={'4'}>
							Sign up to get started
						</Text> */}
						<Text color="bronze" size={'2'} align={'left'} mt={'1'}>
							Sign up and become a part of our NewDev community and find the job
							you want!
						</Text>
					</Flex>
					<Separator orientation="horizontal" size={'4'} mt={'4'} />
					<Flex direction={'column'} gap={'4'}>
						<GithubSignIn />
						<Flex align={'center'} justify={'center'}>
							<Text size={'4'} align={'center'} color="bronze">
								or
							</Text>
						</Flex>
						<TextFieldInput placeholder={'Name'} mt={'2'} color="bronze" />
						<TextFieldInput placeholder={'Email'} mt={'2'} color="bronze" />
						<PasswordTextField />
						<Text color="bronze" size={'2'} align={'left'}>
							Already have an account?{' '}
							<span className="font-bold">
								<Link href="/signin">Sign in</Link>
							</span>
						</Text>
					</Flex>
				</Card>
			</div>
		</div>
	);
}
