import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Translate4Me - Your Fast and Accurate Online Translator',
	description:
		'Translate4Me offers fast and accurate translations in multiple languages. Try our online translation service and streamline global communication.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${inter.className} transition-color duration-200`}
				>
					<Providers>
						<Header />
						<div className="max-w-6xl mx-auto pt-24">
							{children}
						</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
