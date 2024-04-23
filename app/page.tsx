import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<h1 className="text-4xl font-bold mb-8">
				Welcome to Translate4Me
			</h1>
			<Link href="/translate">
				<h1 className="text-3xl font-bold text-primary">
					Translate now
				</h1>
			</Link>
			<p className="text-lg mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nulla nec turpis eu lorem vestibulum consectetur.
				Vivamus blandit risus ac scelerisque vulputate. Morbi ut
				vestibulum libero. Fusce ut sapien metus. Aenean
				condimentum massa id mi ullamcorper tempor. Nullam id
				ligula nulla. Duis in sapien non metus dictum rhoncus
				vel sit amet felis.
			</p>
		</main>
	);
}
