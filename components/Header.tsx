import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, UserButton } from '@clerk/nextjs';
import ToggleDarkMode from './common/ToggleDarkMode';

const Header = () => {
	const { userId } = auth();

	return (
		<header className="fixed top-0 w-full z-50 bg-transparent bg-opacity-80 backdrop-blur-sm">
			<div className="flex items-center justify-between px-8 lg:px-16 2xl:px-36 h-20 border-b sticky">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/assets/logo2.png"
						alt="logo"
						width={60}
						height={50}
						className="object-contain drop-shadow-1xl"
					/>
					<h1 className="text-lg md:text-3xl font-bold text-one drop-shadow-1xl">
						Translate4Me
					</h1>
				</Link>
				<div className="flex  justify-center px-2 py-2 gap-x-4">
					<ToggleDarkMode />
					{userId ? (
						<div className="flex my-">
							<UserButton />
						</div>
					) : (
						<SignInButton
							afterSignInUrl="/translate"
							mode="modal"
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
