import { ArrowUpIcon, Wand2Icon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button.jsx";

const navigationItems = [
  { label: "About" },
  { label: "Technologies" },
  { label: "Products" },
  { label: "Discover" },
];

const rightNavigationItems = [
  { label: "Team" },
  { label: "Pricing" },
  { label: "Buy Premium" },
];

const starElements = [
  {
    size: "w-3.5 h-3.5",
    position: "top-[20%] left-[20%]",
    mobilePosition: "top-[15%] left-[10%]",
  },
  {
    size: "w-[21px] h-[21px]",
    position: "top-[40%] left-[8%]",
    mobilePosition: "top-[35%] left-[5%]",
  },
  {
    size: "w-14 h-6",
    position: "top-[60%] right-[30%]",
    mobilePosition: "top-[55%] right-[20%]",
  },
  {
    size: "w-7 h-7",
    position: "top-[8%] right-[35%]",
    mobilePosition: "top-[10%] right-[25%]",
  },
  {
    size: "w-7 h-7",
    position: "top-[25%] right-[5%]",
    mobilePosition: "hidden",
  },
  {
    size: "w-3.5 h-3.5",
    position: "top-[5%] right-[20%]",
    mobilePosition: "top-[8%] right-[15%]",
  },
  {
    size: "w-3.5 h-3.5",
    position: "top-[70%] right-[10%]",
    mobilePosition: "top-[65%] right-[8%]",
  },
];

export const TrendingPromptsSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or pressing Escape
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Navigation */}
      <nav className="relative z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className={`${
                    isMobileMenuOpen ? "hidden" : "block"
                  } h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                  } h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={`nav-${index}`}
                  href="#"
                  className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors duration-200 [font-family:'Poppins',Helvetica]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Logo - Centered on mobile, normal position on desktop */}
            <div className="flex items-center space-x-3 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg lg:text-xl [font-family:'Manrope',Helvetica] whitespace-nowrap">
                Start Smart
              </span>
            </div>

            {/* Desktop Right Navigation & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {rightNavigationItems.map((item, index) => (
                <a
                  key={`right-nav-${index}`}
                  href="#"
                  className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors duration-200 [font-family:'Poppins',Helvetica]"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-white hover:bg-white/90 text-black px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
                <span className="[font-family:'Poppins',Helvetica]">
                  Get Started
                </span>
                <ArrowUpIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <Button className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-full font-medium text-sm transition-all duration-200">
                <span className="[font-family:'Poppins',Helvetica]">
                  Start
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-white/10 shadow-xl">
              {navigationItems.map((item, index) => (
                <a
                  key={`mobile-nav-${index}`}
                  href="#"
                  className="text-white hover:text-white/80 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 block px-3 py-2 rounded-md text-sm font-medium transition-colors [font-family:'Poppins',Helvetica]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/20 my-2" />
              {rightNavigationItems.map((item, index) => (
                <a
                  key={`mobile-right-nav-${index}`}
                  href="#"
                  className="text-white hover:text-white/80 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 block px-3 py-2 rounded-md text-sm font-medium transition-colors [font-family:'Poppins',Helvetica]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-white hover:bg-white/90 focus:ring-2 focus:ring-white/50 text-black py-2.5 rounded-full font-medium text-sm transition-all duration-200">
                  <span className="[font-family:'Poppins',Helvetica]">
                    Get Started
                  </span>
                  <ArrowUpIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative w-full min-h-screen">
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[878px] items-center gap-8 md:gap-12 px-4 md:px-8 py-16 md:py-24">
              <div className="flex flex-col items-center gap-7 relative w-full">
                <div className="inline-flex flex-col items-center gap-2 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-lg md:text-[22px] tracking-[-0.40px] leading-[normal]">
                    Promptverse AI
                  </div>

                  <h1 className="relative w-full max-w-[674.68px] [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[-0.64px] leading-tight md:leading-[74px]">
                    Find Inspiration.
                    <br />
                    Create, Generate, Produce &amp; Automate.
                  </h1>
                </div>

                <p className="relative w-full max-w-[735px] [font-family:'Manrope',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-6 md:leading-7">
                  Welcome to PromptVerse. Effortlessly create content, explore
                  endless prompts, and stay ahead with real-time trends.
                  Automate emails, social media, and more while our AI extracts
                  knowledge from any document or URL. Experience a stunning,
                  futuristic design that boosts productivity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-7 relative w-full">
                <Button
                  variant="outline"
                  className="gap-2 border-[1.4px] border-solid border-white bg-transparent hover:bg-white/10 px-6 md:px-[34px] py-3 md:py-3.5 h-auto rounded-[55px] w-full sm:w-auto overflow-hidden"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base whitespace-nowrap">
                    Start Generating
                  </span>
                  <Wand2Icon className="w-6 h-6 text-white flex-shrink-0" />
                </Button>

                <Button className="bg-white hover:bg-white/90 text-black px-6 md:px-[34px] py-3 md:py-3.5 h-auto rounded-[55px] w-full sm:w-auto">
                  <span className="relative w-fit mt-[-1.40px] [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-[normal]">
                    Download
                  </span>

                  <ArrowUpIcon className="w-6 h-6 text-black ml-2" />
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
        
        {starElements.map((star, index) => (
          <div
            key={`star-${index}`}
            className={`absolute ${star.size} ${star.position} ${
              star.mobilePosition === "hidden" ? "hidden lg:block" : ""
            } flex items-center justify-center`}
          >
            <svg
              className="w-full h-full text-white/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          </div>
        ))}

        {/* Additional star decoration */}
        <div className="absolute w-4 h-4 top-[130px] left-[122px] flex items-center justify-center hidden lg:flex">
          <svg
            className="w-full h-full text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        </div>
      </div>
    </section>
  );
};
