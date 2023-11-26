import Image from 'next/image';
import Link from 'next/link';

export default function Support() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row gap-12 items-center md:justify-center md:p-24 bg-[#0E0E0E] overflow-y-hidden relative">
			<div className="flex flex-col pt-24 px-24 md:p-0 flex-shrink lg:max-w-md">
				<h1 className="text-primaryOrange text-5xl font-DankMono">Changelog</h1>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryGray mb-4">1.05 - Nov 26th, 2023</p>
					<ul className="list-inside list-disc text-primaryGray text-lg font-sans">
						<li>Threads view now has ascending/ descending sort order</li>
						<li>added sort by "Style" to threads view</li>
						<li>added options to file feedback, rate, and change font</li>
						<li>added ability to show/hide fit and fade pics from each thread</li>
					</ul>
				</div>
			</div>
			<div className="absolute bottom-4 left-0 right-0 w-full flex justify-center gap-8">
				<Link className="text-primaryGray font-sans" href="/">
					Home
				</Link>
				<Link className="text-primaryGray font-sans" href="/privacy">
					Privacy
				</Link>
				<Link className="text-primaryGray font-sans" href="/support">
					Support
				</Link>
				<Link className="text-primaryGray font-sans" href="/changelog">
					Changelog
				</Link>
			</div>
		</main>
	);
}
