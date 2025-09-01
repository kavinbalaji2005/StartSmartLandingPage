import { ArrowUpIcon } from "lucide-react";
import React from "react";

export const FeaturesOverviewSection = () => {
  const promptCards = Array(8).fill({
    text: "Write a attractive hero title for the following website ",
    url: "https://zeltalabs.com/",
  });

  const PromptCard = ({ text, url }) => (
    <div className="justify-center gap-2.5 px-4 md:px-[26px] py-6 md:py-[27px] bg-[#0d0d0d] rounded-lg overflow-hidden inline-flex flex-col items-center flex-[0_0_auto] min-w-[280px] md:min-w-[320px] hover:bg-[#1a1a1a] transition-colors duration-200">
      <div className="inline-flex items-start justify-end gap-2.5 flex-[0_0_auto]">
        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-sm md:text-base lg:text-xl tracking-[0] leading-[normal] text-left">
          <span className="text-white">{text}</span>
          <span className="text-[#1d72f2]">{url}</span>
        </div>
        <ArrowUpIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-[31px] lg:h-[31px] text-white flex-shrink-0 transform rotate-45" />
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[124px] w-full py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <header className="flex flex-col max-w-[833px] items-center gap-7 px-4 md:px-8 w-full">
        <h1 className="self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-2xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-tight md:leading-[56px]">
          Create more with Promptverse
        </h1>
        <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-6 md:leading-[28.8px]">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </p>
      </header>

      <div className="w-full overflow-hidden">
        <div className="flex flex-col gap-4 md:gap-7">
          <div
            className="flex gap-[30px] animate-marquee"
            style={{ "--duration": "20s", "--gap": "30px" }}
          >
            {promptCards.concat(promptCards).map((card, index) => (
              <PromptCard
                key={`row1-${index}`}
                text={card.text}
                url={card.url}
              />
            ))}
          </div>

          <div
            className="flex gap-[30px] animate-marquee"
            style={{
              "--duration": "25s",
              "--gap": "30px",
              animationDirection: "reverse",
            }}
          >
            {promptCards.concat(promptCards).map((card, index) => (
              <PromptCard
                key={`row2-${index}`}
                text={card.text}
                url={card.url}
              />
            ))}
          </div>

          <div
            className="flex gap-[30px] animate-marquee"
            style={{ "--duration": "22s", "--gap": "30px" }}
          >
            {promptCards.concat(promptCards).map((card, index) => (
              <PromptCard
                key={`row3-${index}`}
                text={card.text}
                url={card.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
