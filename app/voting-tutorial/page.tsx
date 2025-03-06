"use client";

import { useState } from "react";

export default function VotingTutorial() {
  return (
    <section
      className="w-auto flex flex-col items-center mt-16 md:mt-20 min-h-screen"
      style={{ backgroundColor: "#01274F" }}
    >
      <div className="w-auto md:w-[950px] sm:w-[556px] p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center text-[#F4FAFE]">
        <h2 className="font-markazi font-bold text-[28px] md:text-[40px] mt-4">
          Voting Instructions
        </h2>

        <p className="text-lg mt-4">
          Follow these steps to vote for your favorite dreamers.
        </p>

        <div className="mt-6 text-left w-full max-w-[600px]">
          <h3 className="text-xl font-bold">1. Download/Install</h3>
          <p className="ml-4">
            Go to Google Play Store or Apple App Store to download/install the{" "}
            <strong>b.stage</strong> app.
          </p>

          <div className="flex gap-2 mt-2 ml-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.bmf.bstage.browser&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/google-play.png"
                alt="Google Play Icon"
                className="w-40 h-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/b-stage/id1643063288"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/app-store.png"
                alt="Apple App Store Icon"
                className="w-[155.5px] h-auto"
              />
            </a>
          </div>

          <h3 className="text-xl font-bold mt-4 ml-4">Go to the Website</h3>
          <p className="ml-4">
            Search{" "}
            <a
              href="https://bethenext.bstage.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <strong>bethenext.bstage.in</strong>
            </a>{" "}
            on your web browser, or click the{" "}
            <a
              href="https://bethenext.bstage.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
            .
          </p>

          <h3 className="text-xl font-bold mt-4">
            3. Login or Create an Account
          </h3>
          <p className="ml-4">
            Enter your login information. If you have not yet created an
            account, click “Create an Account”.
          </p>
          <img
            src="/assets/images/create-account.png"
            alt="Create Account"
            className="ml-4 mt-2 w-[90%] max-w-[600px] h-auto"
          />

          <h3 className="text-xl font-bold mt-4">4. Click Survey</h3>
          <p className="ml-4">Scroll down and click on the survey.</p>
          <img
            src="/assets/images/btn-survey-01.png"
            alt="Survey"
            className="ml-4 mt-2 w-[60%] max-w-[600px] h-auto"
          />

          <h3 className="text-xl font-bold mt-4">5. Read Guidelines</h3>
          <p className="ml-4 mt-2">Vote for your 10 favorite Dreamers!</p>

          <h4 className="text-lg font-semibold mt-2 ml-4">
            [Deadline for Voting]
          </h4>
          <p className="ml-4">8PM Mar 1, 2025 ~ 6PM Mar 10, 2025 (KST)</p>

          <h4 className="text-lg font-semibold mt-2 ml-4">
            [Voting Guidelines]
          </h4>
          <ul className="ml-10 list-disc">
            <li>Sign up and log in</li>
            <li>Click on the “Vote for your Dream Chaser” tab</li>
            <li>Click on the “Take Survey” button</li>
            <li>Choose 10 Dreamers</li>
            <li>Once you click the “Submit” button, voting is complete.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 ml-4">[Notice]</h4>
          <ul className="ml-10 list-disc">
            <li>
              Voting can be done after creating an account with an email
              address.
            </li>
            <li>
              You can only vote once a day, in duplicate every day, and once you
              have submitted your votes, it cannot be modified.
            </li>
            <li>
              If you do not use the 10 votes, your submission will not be
              considered complete, so please use all 10 votes.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-4">6. Choose Dreamers</h3>
          <p className="ml-4">
            Make sure you have chosen a Dreamer, or you won't be able to click
            "Next" or "Submit" your votes.
          </p>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="ml-4 mt-2 mb-8 w-[90%] max-w-[600px] h-auto"
          >
            <source
              src="/assets/videos/choose-dreamer.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
