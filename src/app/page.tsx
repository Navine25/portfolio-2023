"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* First Content */}
      <div>
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex animate-fade-down">
          <p className="fixed left-0 top-0 flex w-full justify-center dark:from-inherit lg:static lg:w-auto text-myGreen font-bold text-4xl font-mono">
            Bernard
          </p>
          {/* Todo: Use effect to check is active and modify it */}
          <div className="flex flex-row gap-x-12 text-myGreen font-normal text-base">
            <div>
              <p>Services</p>
            </div>
            <div>
              <p>Works</p>
            </div>
            <div>
              <p>Notes</p>
            </div>
            <div>
              <p>Experience</p>
            </div>
          </div>
          <div className="font-bold flex flex-row gap-1 text-myGreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-spin animate-once animate-delay-100 animate-ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <p>+62 851 5545 3733</p>
          </div>
        </div>
        {/* Middle Content */}
        <div className="flex flex-row gap-8 justify-between h-screen -mt-20">
          <div className="flex flex-col gap-20 justify-center">
            <div className="trails-div">
              <h1 className="text-myGreen font-bold text-6xl animate-fade-right">
                Hello There
              </h1>
              <h1 className="text-myGreen font-bold text-6xl animate-fade-right animate-delay-[50ms]">
                I&apos;m Bernard
              </h1>
            </div>
            <a
              className="text-amber-600 font-semibold underline underline-offset-2 animate-fade-up animate-delay-100"
              href="mailto:bernardcalvin2000@gmail.com"
            >
              bernardcalvin2000@gmail.com
            </a>
            <div className="flex flex-row animate-fade-up animate-delay-100 animate-ease-out">
              <p className="text-myGreen text-6xl">1</p>
              <p className="text-myGreen font-medium text-xl">
                Year of <br />
                Experience
              </p>
            </div>
          </div>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-zinc-200 after:via-gray-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-gray-700 before:dark:opacity-10 after:dark:from-zinc-900 after:dark:via-[#494343] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative animate-wiggle animate-twice animate-delay-100"
              src="/memoji.png"
              alt="Memoji Bernard"
              width={350}
              height={370}
              priority
            />
          </div>
          <div className="animate-fade-left justify-center flex flex-col">
            <p className="text-myGreen mt-11 text-xl">I do code as a</p>
            <TypeAnimation
              className="text-myGreen"
              sequence={["Fullstack", 1000, "Frontend", 1000, "Backend", 1000]}
              speed={30}
              repeat={Infinity}
              style={{ fontSize: "1.25rem", display: "inline-block" }}
            />
            <p className="text-myGreen text-xl">Developer</p>
          </div>
        </div>
      </div>
      {/* Second Content */}
      <div className="flex flex-row bg-white">
        <div>
          <div className="text-myGreen font-semibold">
            <div className="flex flex-row">
              <div className="rounded-full bg-myGreen p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h2>Web Developer</h2>
                <p className="font-thin">4 Projects</p>
              </div>
            </div>
            <h2>Mobile App</h2>
            <h2>Application Testing</h2>
          </div>
        </div>
        <div>
          <h1>What do I Help?</h1>
          <p>
            I will help you to find solution and solve your problems.
            <br /> I can create and maintain Websites from your needs and
            vision.
          </p>
          <p>
            I use process to create websites and application to help your
            business.
          </p>
        </div>
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
