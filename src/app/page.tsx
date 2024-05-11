import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<div className="mb-3 text-2xl font-semibold">
					RETO DIEGO
					<Link
						href="/dashboard/"
						className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
					>
						ir al reto
					</Link>
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
					</span>
				</div>
			</div>
		</main>
	);
}
