import {
	TabsRoot,
	Flex,
	TabsList,
	TabsTrigger,
	Avatar,
	Box,
} from '@radix-ui/themes';
import {
	BellIcon,
	CardStackIcon,
	EnvelopeClosedIcon,
	GearIcon,
	HomeIcon,
	MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen flex flex-col">
			<Box width={'100%'} className="border-b">
				<Flex direction={'row'} justify={'between'} p={'4'} className="ba">
					<Avatar
						src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
						fallback="A"
					/>
					<GearIcon className="w-6 h-6" />
				</Flex>
				<TabsRoot
					defaultValue="forYou"
					className="flex justify-evenly items-center"
				>
					<TabsList>
						<TabsTrigger value="forYou">Para ti</TabsTrigger>
						<TabsTrigger value="global">Global</TabsTrigger>
					</TabsList>
				</TabsRoot>
			</Box>
			<main className="flex-1 overflow-y-auto">{children}</main>
			<Box className="h-20  border-t flex justify-evenly items-center">
				<HomeIcon className="w-6 h-6" />
				<MagnifyingGlassIcon className="w-6 h-6" />
				<CardStackIcon className="w-6 h-6" />
				<BellIcon className="w-6 h-6" />
				<EnvelopeClosedIcon className="w-6 h-6" />
			</Box>
		</div>
	);
}
