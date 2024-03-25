import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, UserButton } from '@clerk/nextjs';
import ToggleDarkMode from './common/ToggleDarkMode';

const Header = () => {
	const { userId } = auth();

	return (
		<header>
			<div className="flex items-center justify-between px-8 2xl:px-24 h-20 border-b mb-6 sticky">
				<Link href="/" className="flex items-center gap-2 ">
					<Image
						src="/assets/logo_translate4me.png"
						alt="logo"
						width={60}
						height={60}
						className="object-contain"
					/>
					<h1 className="text-lg md:text-3xl font-bold bg-gradient-to-l from-pink-700 via-emerald-400 to-zinc-700 inline-block text-transparent bg-clip-text drop-shadow-1xl">
						Translate4Me
					</h1>
				</Link>
				<div className="flex px-2 gap-x-4">
					<ToggleDarkMode />
					{userId ? (
						<UserButton className="w-16 h-16" />
					) : (
						<SignInButton
							aftersigninUrl="/translate"
							mode="modal"
							className="font-bold text-primary"
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
