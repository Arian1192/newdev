import { Button, Card, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export default function Page() {
	return (
		<div className="w-full h-screen border bg-[url('/background.jpg')] bg-cover flex flex-col justify-center items-center">
			<Heading className="text-7xl md:text-9xl" color="bronze" mb={'7'}>
				New<span className="font-extralight">Dev</span>
			</Heading>
			<Text size={'7'} color="bronze" mb={'7'}>
				Coming Soon!
			</Text>
			<div className="flex flex-col md:flex-row max-w-md gap-8 md:gap-4 justify-center items-center">
				<Card variant="ghost">
					<div className="w-full h-full flex flex-col justify-center items-center gap-3">
						<Text color="bronze">
							Have an account? <span className="font-bold">Sign in</span>
						</Text>
						<Button className="bg-[#A18072] hover:bg-[#AE8C7E] cursor-pointer">
							<Link href="/singin">Go to Sign in page</Link>
						</Button>
					</div>
				</Card>
				<Card variant="ghost">
					<div className="w-full h-full flex flex-col justify-center items-center gap-3">
						<Text color="bronze">
							Have an account? <span className="font-bold">Sign in</span>
						</Text>
						<Button className="bg-[#A18072] hover:bg-[#AE8C7E] cursor-pointer">
							<Link href="/signup">Go to Sign up page</Link>
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
}
