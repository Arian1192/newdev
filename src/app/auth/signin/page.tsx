import { Card, Flex, Separator, Text } from '@radix-ui/themes';

import { AuthForm } from '../../../../components/authForm/AuthForm';
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
						<Text color="bronze" size={'1'} align={'left'} mt={'1'}>
							Sign up and become a part of our NewDev community and find the job
							you want!
						</Text>
					</Flex>
					<Separator orientation="horizontal" size={'4'} mt={'4'} />
					<AuthForm />
				</Card>
			</div>
		</div>
	);
}
