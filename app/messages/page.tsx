"use client"; // Add this line at the top of the file

import { FaArrowLeft } from "react-icons/fa";

export default function StoryPage() {
  return (
    <>
      <section
        className="w-auto flex flex-col items-center mt-16 md:mt-20 min-h-screen"
        style={{ backgroundColor: "#01274F" }}
      >
        <div className="px-10 md:px-30 w-auto md:w-[950px] sm:w-[556px] p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
          <img
            src="/assets/icons/btn-logo-transparent.png"
            alt="Bias List"
            width="128"
            height="128"
            className="mb-4 mt-1"
          />

          <h2 className="font-markazi font-bold text-[28px] md:text-[40px] text-[#F4FAFE] -mt-4">
            The Memories They Left Behind
          </h2>

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="500"
            height="20"
            className="md:mt-4 md:mb-5 mb-5 mt-4"
          />

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            When the final announcement was made, the boys shared one last bow
            and a final group hug under the unforgiving lights.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            But the goodbyes they longed to say — to the friends, the family
            they had built — never came.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            Only hurried words to a few, and the rest swallowed by the rushing
            tide of endings.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            Their bags were packed in a rush, stuffed with memories they weren’t
            ready to leave behind.
            <br /> But the most important things stayed: <br />
            the moments they shared with the trainees, <br />
            the promises whispered to the ones they had grown closest to.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            Messages that once filled their hearts with hope and strength now
            left behind aches and sorrow. <br />
            <em>"Debut together."</em> <br /> <em>"Make everyone proud."</em>
            <br />
            <em>"Trust the journey."</em>
          </p>

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="500"
            height="20"
            className="md:mt-4 md:mb-5 mb-5 mt-2"
          />

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            The hallways and rooms that once echoed with late-night jokes and
            shared dreams were silent —
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            but the walls remembered.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            The dreams remembered.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            Their hearts remembered.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            Somewhere between the rushing engines and heavy hearts, they all
            wondered the same thing:
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            <em>"Is this really the end?"</em>
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            But dreams aren’t so easily erased. <br /> They live on — <br />
            in the songs they sang, <br />
            in the stages they touched, <br />
            in every step they still dare to take.
          </p>

          <p className="font-inter text-[16px] md:text-[18px] text-[#F4FAFE] mb-6">
            One day, when the world hears their names again, <br />
            it won’t just be their victory. <br />
            It will be the victory of every dream that once lit up the dark.
          </p>

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="500"
            height="20"
            className="md:mt-4 mt-2 mb-1"
          />

          <p className="font-inter text-[14px] md:text-[16px] text-[#F4FAFE] mt-4">
            Written by <span className="font-bold">DHAYNAMICO</span>
          </p>

          <button
            onClick={() => window.history.back()}
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3 mb-5 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-lg font-semibold"
          >
            <FaArrowLeft className="text-2xl" />
            Go Back
          </button>
        </div>
      </section>
    </>
  );
}
