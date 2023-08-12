import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row gap-12 items-center justify-center p-24 bg-[#0E0E0E] overflow-y-hidden">
      <div className="flex flex-col">
        <h1 className="text-primaryOrange text-5xl font-DankMono">
          ThreadWatch
        </h1>
        {/* {<h2 className="text-[#9D9D9D] text-3xl mt-3">Sweet fades brah.</h2>} */}
        <ul className="list-inside list-disc text-primaryGray mt-4 text-lg font-sans">
          <li>Catalogue all your raw denim</li>
          <li>Track wears and washes</li>
          <li>Add fade pics to see progress over time</li>
        </ul>
        <div className="mt-6 self-start font-DankMono text-primaryOrange px-4 py-1 rounded-full border border-primaryOrange">
          Coming September 2023
        </div>
      </div>
      <div className="relative w-[400px] max-h-[600px] lg:max-h-[800px]">
        <img
          priority
          alt="Screenshot of ThreadWatch iOS App"
          layout="fill"
          objectFit={"contain"}
          src="/threadwatch-ios-screencap-1.png"
        />
      </div>
    </main>
  );
}
