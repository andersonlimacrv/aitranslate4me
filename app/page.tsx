import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			hello world
			<Link
				href="/translate"
				className="text-3xl font-bold text-primary"
			>
				Translate now
			</Link>
		</main>
	);
}
