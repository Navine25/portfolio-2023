"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      {/* First Content */}
      <div>
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex animate-fade-down">
          <p className="fixed left-0 top-0 flex w-full justify-center dark:from-inherit lg:static lg:w-auto text-slate-700 font-bold text-4xl font-mono">
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
          <div className="font-bold flex flex-row gap-1 text-slate-700">
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
              <h1 className="text-slate-700 font-bold text-6xl animate-fade-right">
                Hello There
              </h1>
              <h1 className="text-slate-700 font-bold text-6xl animate-fade-right animate-delay-[50ms]">
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
              <p className="text-slate-700 text-6xl">1</p>
              <p className="text-slate-700 font-medium text-xl">
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
            <p className="text-slate-700 mt-11 text-xl">I do code as a</p>
            <TypeAnimation
              className="text-slate-700"
              sequence={["Fullstack", 1000, "Frontend", 1000, "Backend", 1000]}
              speed={30}
              repeat={Infinity}
              style={{ fontSize: "1.25rem", display: "inline-block" }}
            />
            <p className="text-slate-700 text-xl">Developer</p>
          </div>
        </div>
      </div>
      {/* Second Content */}
      <div className="w-full bg-white flex justify-center">
        <div className="flex flex-row bg-white h-screen pt-26 justify-evenly max-w-5xl w-full items-center">
          <div className="">
            <div className="text-slate-700 font-semibold flex flex-col gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="flex flex-row p-6 rounded-lg shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] border border-slate-200 pr-36"
              >
                <div className="rounded-full bg-myGreen p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-4 text-xl justify-center">
                  <h2>Web Developer</h2>
                  <p className="font-thin">4 Projects</p>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="500"
                className="flex flex-row p-6 rounded-lg shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] border border-slate-200 pr-36"
              >
                <div className="rounded-full bg-yellow-500 p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                    <path
                      fillRule="evenodd"
                      d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-4 text-xl justify-center">
                  <h2>Mobile App</h2>
                  <p className="font-thin">2 Projects</p>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="500"
                className="flex flex-row p-6 rounded-lg shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] border border-slate-200 pr-36"
              >
                <div className="rounded-full bg-red-500 p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                  </svg>
                </div>
                <div className="flex flex-col ml-4 text-xl justify-center">
                  <h2>Application Testing</h2>
                  <p className="font-thin">3 Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-slate-700 tracking-wider font-medium text-lg"
          >
            <h1 className="text-6xl font-bold">What do I Help?</h1>
            <p>
              I will help you to find solution and solve your <br /> problems. I
              can create and maintain Websites <br /> from your needs and
              vision.
            </p>
            <br />
            <p>
              I use process to create websites <br />
              and application to help your business.
            </p>

            <div className="flex flex-row mt-16 text-slate-700 gap-14">
              <div className="flex flex-col">
                <h1 className="text-6xl font-bold">5+</h1>
                <p>Projects Completed</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-6xl font-bold">3+</h1>
                <p>Testing Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Content */}
      <div className="w-full flex justify-center mt-24 mb-24">
        <div className="flex flex-col justify-evenly max-w-5xl w-full items-center">
          <h1 className="text-slate-700 text-6xl font-bold">
            My Work Experience
          </h1>
          {/* Middle of Third Content */}
          <div className="flex flex-row pt-16 text-slate-700 gap-8">
            {/* Work Place */}
            <div className="relative -left-20">
              {/* Alfagift GLI */}
              <h2 className="font-bold text-3xl">Alfagift</h2>
              <p>March 2021 - August 2021</p>

              {/* ADX Asia */}
              <h2 className="font-bold text-3xl mt-40">ADX Asia</h2>
              <p>September 2022 - Present</p>
            </div>

            {/* Time-line */}
            <div>
              <div className="relative border-spacing-5 border-2 border-slate-400 border-dashed p-2 rounded-full">
                <div className="bg-myGreen w-6 h-6 rounded-full"></div>
              </div>
              <div className="relative h-44 border left-1/2 border-dashed border-slate-400 w-0"></div>
              <div className="border-spacing-5 border-2 border-slate-400 border-dashed p-2 rounded-full">
                <div className="bg-amber-600 w-6 h-6 rounded-full"></div>
              </div>
              <div className="relative h-20 border left-1/2 border-dashed border-slate-400 w-0"></div>
            </div>

            {/* Role and Description */}
            <div className="relative left-10">
              {/* Alfagift GLI */}
              <h2 className="font-bold text-3xl">Application Tester</h2>
              <p className="tracking-wider font-medium text-lg">
                Testing various test for Alfagift <br />
                application in Android, iOS, and website.
              </p>

              {/* ADX Asia */}
              <h2 className="font-bold text-3xl mt-32">Software Engineer</h2>
              <p className="tracking-wider font-medium text-lg">
                Creating website and mobile app on Android.
                <br />
                Creating new features, manage repository <br />
                and create test script.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Content */}
      <div className="w-full bg-white flex justify-center">
        <div className="flex flex-col bg-white h-screen max-w-5xl w-full py-36">
          <div className="flex flex-row justify-between">
            <div className="text-slate-700 flex flex-col gap-2">
              <h1 className="text-4xl font-semibold">My Latest Works</h1>
              <p className="text-lmd">
                Websites and mobile application projects.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-amber-600 font-semibold underline underline-offset-2">
                Explore More Works
              </p>
            </div>
          </div>
          <div className="mt-20">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="pb-6"
              dotListClass=""
              draggable
              focusOnSelect
              itemClass=""
              keyBoardControl
              minimumTouchDrag={60}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              partialVisible = {true}
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {/* Need to input images */}
              <div className="mr-4 bg-amber-400 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Web Developer</h1>
                <p className="text-lg text-white font-medium">Landing Page</p>
              </div>
              <div className="mr-4 bg-emerald-700 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Mobile App</h1>
                <p className="text-lg text-white font-medium">Stacks by ADX Asia</p>
              </div>
              <div className="mr-4 bg-cyan-600 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Application Testing</h1>
                <p className="text-lg text-white font-medium">Alfagift</p>
              </div>
              <div className="mr-4 bg-indigo-500 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Web Developer</h1>
                <p className="text-lg text-white font-medium">The Stacks by ADX</p>
              </div>
              <div className="mr-4 bg-fuchsia-500 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Web Developer</h1>
                <p className="text-lg text-white font-medium">Metrics by ADX</p>
              </div>
              <div className="mr-4 bg-rose-500 rounded-3xl p-8 w-96 h-80 select-none">
                <h1 className="text-3xl text-white font-semibold">Mobile App</h1>
                <p className="text-lg text-white font-medium">Jagad</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}
