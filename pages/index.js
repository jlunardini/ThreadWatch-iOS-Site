import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row gap-12 items-center md:justify-center md:p-24 bg-[#0E0E0E] overflow-y-hidden relative">
			<div className="flex flex-col pt-24 px-24 md:p-0 flex-shrink">
				<h1 className="text-primaryOrange text-5xl font-DankMono">ThreadWatch</h1>
				{/* {<h2 className="text-[#9D9D9D] text-3xl mt-3">Sweet fades brah.</h2>} */}
				<ul className="list-inside list-disc text-primaryGray mt-4 text-lg font-sans">
					<li>Catalogue all your raw denim</li>
					<li>Track wears and washes</li>
					<li>Add fade pics to see progress over time</li>
				</ul>
				<a href="https://apps.apple.com/us/app/threadwatch/id6469029455" className="mt-6 self-start font-DankMono text-primaryOrange px-4 py-1 rounded-full border border-primaryOrange hover:text-black hover:bg-primaryOrange transition">
					Available now for iOS!
				</a>
			</div>
			<img alt="Screenshot of ThreadWatch iOS App" className="max-h-[600px] md:flex-shrink-0 md:h-[700px] px-8 mb-24 md:mb-0" src="/threadwatch-ios-screencap-1.png" />
			<div className="relative lg:absolute bottom-4 left-0 right-0 w-full flex flex-col md:flex-row justify-center gap-8 text-center lg:text-left mb-8 lg:mb-0">
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
