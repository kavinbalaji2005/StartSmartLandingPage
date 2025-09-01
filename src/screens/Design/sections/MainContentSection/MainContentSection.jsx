import { ArrowUpIcon, Wand2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button.jsx";
import { Card, CardContent } from "../../../../components/ui/card.jsx";

const features = [
  {
    title: "Write mails and replies",
    description:
      "We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your areawill change in a few years",
  },
  {
    title: "Read pdf and attachments",
    description:
      'We do not want to sell you any specific object, our goal is to find the "right" apartment for you and remain partners for many years.',
  },
  {
    title: "Scans Images",
    description:
      "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
  },
  {
    title: "Write codes & programs",
    description:
      "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
  },
  {
    title: "Research",
    description:
      "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
  },
  {
    title: "Automation",
    description:
      "Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
  },
];

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-center gap-24 md:gap-32 lg:gap-[244px] w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center gap-16 md:gap-[124px] w-full">
        <div className="flex flex-col max-w-[833px] items-center gap-7 w-full mx-auto">
          <h1 className="text-center [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.48px] leading-tight md:leading-[56px]">
            See Trending Prompts
          </h1>

          <p className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base tracking-[-0.29px] leading-6 md:leading-[28.8px]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-7 w-full sm:w-auto">
            <Button
              variant="outline"
              className="h-auto border-[1.4px] border-white bg-transparent text-white hover:bg-white hover:text-black px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] gap-2 w-full sm:w-auto"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base whitespace-nowrap">
                Start Generating
              </span>
              <Wand2Icon className="w-6 h-6 flex-shrink-0" />
            </Button>

            <Button className="h-auto bg-white text-black hover:bg-gray-100 px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] gap-2 w-full sm:w-auto">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
                Download
              </span>
              <ArrowUpIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1309px] h-[400px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-white/60 text-sm">Chat Interface Preview</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 md:gap-[124px] w-full">
        <div className="flex flex-col max-w-[833px] items-center gap-7 w-full mx-auto">
          <h2 className="text-center [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.48px] leading-tight md:leading-[56px]">
            Images like never seen before
          </h2>

          <p className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base tracking-[-0.29px] leading-6 md:leading-[28.8px]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-7 w-full min-h-[400px] md:min-h-[600px] max-w-[1309px] mx-auto">
        <div className="w-full text-center">
          <h2 className="[font-family:'Manrope',Helvetica] font-medium text-2xl md:text-4xl lg:text-[64px] tracking-[-1.16px] leading-tight md:leading-[64px] max-w-full text-center">
            <span className="text-[#ffffff80] tracking-[-0.75px] leading-tight md:leading-[86.4px]">
              More features
            </span>
            <span className="text-white tracking-[-0.75px] leading-tight md:leading-[86.4px]">
              {" "}
              <br />
              Promptverse AI{" "}
            </span>
            <span className="text-[#ffffff80] tracking-[-0.75px] leading-tight md:leading-[86.4px]">
              offers to an individual{" "}
            </span>
          </h2>
        </div>

        <div className="w-full border-t border-[#e0e0e0] pt-8 md:pt-[61px] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="bg-transparent border-none">
                <CardContent className="p-0 space-y-[15px]">
                  <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-lg md:text-xl tracking-[-0.80px] leading-7 md:leading-8">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Manrope',Helvetica] font-medium text-[#828282] text-sm md:text-base tracking-[-0.80px] leading-6 md:leading-[28.8px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-[1308px] min-h-[300px] md:h-[474px] p-4 md:p-2.5 bg-[#0d0d0d] rounded-[19px] overflow-hidden mx-auto">
        <div className="absolute w-[140px] h-[140px] top-0 right-[140px] bg-[#d9d9d9] rounded-[70px] blur-[202px]" />

        {/* CSS Decorative Elements */}
        <div className="absolute w-[60px] h-[60px] top-[-30px] left-[-30px] bg-white/5 rounded-full"></div>
        <div className="absolute w-[40px] h-[40px] bottom-[100px] right-[250px] bg-white/10 rounded-full"></div>
        <div className="absolute w-[50px] h-[50px] top-[30px] right-[100px] bg-white/5 rounded-full"></div>
        <div className="absolute w-[35px] h-[35px] top-[40px] left-52 bg-white/10 rounded-full"></div>

        <div className="flex flex-col items-center gap-8 md:gap-[58px] z-10 px-4 text-center">
          <h2 className="max-w-[984.72px] [font-family:'Manrope',Helvetica] font-semibold text-white text-2xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-tight md:leading-[74px]">
            Promptverse has no limitation. <br />
            Get Started in a journey with promptverse.
          </h2>

          <Button className="h-auto bg-white text-black hover:bg-gray-100 px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] gap-2 w-full sm:w-auto max-w-xs">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
              Create an Account
            </span>
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
