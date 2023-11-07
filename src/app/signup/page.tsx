import {
	Button,
	Card,
	Flex,
	Separator,
	Text,
	TextFieldInput,
} from '@radix-ui/themes';
import {
	GitHubLogoIcon,
	EyeClosedIcon,
	EyeOpenIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { PasswordTextField } from '../../../components/passwordTextField/PasswordTextField';
export default function Page() {
	return (
		<div className="w-full h-screen border bg-[url('/background.jpg')] bg-cover  flex flex-col justify-center items-center">
			<div className="relative">
				<Card variant="surface" style={{ width: 300 }} className="p-5 z-40">
					<Flex align={'center'} direction={'row'} gap={'4'}>
						<Text color="bronze" size={'8'} align={'left'} mt={'4'}>
							Welcome!
						</Text>
					</Flex>
					<Flex direction={'column'}>
						<Text color="bronze" size={'4'} align={'left'} mt={'4'}>
							Sign up to get started
						</Text>
					</Flex>
					<Separator orientation="horizontal" size={'4'} mt={'4'} />
					<Flex direction={'column'} gap={'4'}>
						<Button
							className="w-full bg-[#333333] text-white hover:bg-[#444444] hover:cursor-pointer"
							size={'3'}
							mt={'4'}
						>
							<GitHubLogoIcon width={'18'} />
							<Text>Sign up with GitHub</Text>
						</Button>
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
