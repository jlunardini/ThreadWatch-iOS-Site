import Image from 'next/image';
import Link from 'next/link';

export default function Support() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row gap-12 items-center md:justify-center md:p-24 bg-[#0E0E0E] overflow-y-hidden relative">
			<div className="flex flex-col pt-24 px-4 lg:px-24 md:p-0 flex-shrink lg:max-w-5xl w-full">
				<h1 className="text-primaryOrange text-5xl font-DankMono">Changelog</h1>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryGray mb-4">Pending</p>
					<ul className="list-outside list-disc text-primaryGray text-lg font-sans pl-6 flex flex-col gap-2">
						<li>Added new tab “Dashboard”.  This screen currently shows your week at a glance, and will be expanded to include much more data.</li>
						<li>Added new “Total” graph to Worn/Washed Views</li>
						<li>Resolved issue where photo picker / camera may fail to appear</li>
					</ul>
				</div>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryOrange mb-4">December 22nd, 2023</p>
					<ul className="list-outside list-disc text-primaryGray text-lg font-sans pl-6 flex flex-col gap-2">
						<li>Resolved bug that kicked you out of worn/washed view when adding or deleting.</li>
						<li>Resolved bug where image did not fill full card height when editing a thread.</li>
						<li>Re-did Thread detail layout</li>
						<li>Added &quot;Times Worn this Week&quot; to statistics.</li>
						<li>Added new section &quot;Size & Measurements&quot;. In this section you will find a spot to track how a given pair fits you, and right below you can add specific measurement values.</li>
					</ul>
				</div>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryOrange mb-4">Dec 19th, 2023</p>
					<ul className="list-outside list-disc text-primaryGray text-lg font-sans pl-6 flex flex-col gap-2">
						<li>Added delete confirmation when attempting to delete thread</li>
						<li>Added ability to show/hide fit and fade pics per thread</li>
						<li>Added ability to save a pic by long pressing from expanded view</li>
						<li>You can now edit a worn or washed entry by long-pressing</li>
						<li>Pictures taken in-app will now automatically be saved in the camera roll. This can be disabled from settings</li>
					</ul>
				</div>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryOrange mb-4">Dec 14th, 2023</p>
					<ul className="list-outside list-disc text-primaryGray text-lg font-sans pl-6 flex flex-col gap-2">
						<li>Resolved issue where app may initialize with system font</li>
						<li>Resolved issue where certain strings were unaffected by font settings</li>
						<li>Resolved issue with iCloud sync</li>
						<li>Fixed washed chart text</li>
						<li>Added empty view when no wears or washes present</li>
					</ul>
				</div>
				<div className="rounded-md bg-[#1C1C1E] p-4 mt-8">
					<p className="font-DankMono text-2xl text-primaryOrange mb-4">Dec 13th, 2023</p>
					<ul className="list-outside list-disc text-primaryGray text-lg font-sans pl-6 flex flex-col gap-2">
						<li>Initial release!</li>
					</ul>
				</div>
			</div>
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
