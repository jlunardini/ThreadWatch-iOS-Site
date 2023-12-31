import Image from 'next/image';
import Link from 'next/link';

export default function Support() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row gap-12 items-center md:justify-center md:p-24 bg-[#0E0E0E] overflow-y-hidden relative">
			<div className="flex flex-col pt-24 px-24 md:p-0 flex-shrink lg:max-w-md">
				<h1 className="text-primaryOrange text-5xl font-DankMono">Support</h1>
				<p className="text-primaryGray mt-4">
					For any and all issues email{' '}
					<a className="underline text-primaryOrange decoration-primaryOrange" href="mailto:jlunardini@hey.com">
						the developer
					</a>
				</p>
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
