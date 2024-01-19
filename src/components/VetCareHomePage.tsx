import { FunctionComponent, useCallback } from "react";

const VetCareHomePage: FunctionComponent = () => {
  const onFrameButton1Click = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  return (
    <main className="absolute top-[93px] left-[384px] w-[1371px] overflow-hidden flex flex-row items-start justify-start h-auto gap-[-40px] hover:flex hover:w-[1371px] hover:h-auto hover:flex-row hover:gap-[-40px] hover:items-start hover:justify-start lg:flex-col lg:gap-[-40px] lg:items-start lg:justify-start">
      <section className="w-[1152px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <div className="self-stretch h-[722px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-end">
            <section className="self-stretch rounded-89xl bg-white overflow-hidden flex flex-row items-center justify-center text-center text-45xl text-steelblue-300 font-inter">
              <i className="flex-1 relative font-extrabold">{`WELCOME TO PAWS & CLAWS VetCare`}</i>
            </section>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[460px] h-[871px] overflow-hidden shrink-0 flex flex-col items-center justify-end mt-[-722px]">
          <button className="cursor-pointer [border:none] py-9 px-[49px] bg-darkslategray self-stretch rounded-29xl overflow-hidden flex flex-row items-center justify-center active:bg-darkslategray">
            <b className="flex-1 relative text-45xl font-inter text-white text-center">
              Get Started
            </b>
          </button>
        </button>
      </section>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-steelblue-400 rounded-11xl flex flex-row items-center justify-center ml-[-40px] active:bg-steelblue-400"
        onClick={onFrameButton1Click}
      >
        <b className="relative text-31xl font-inter text-gray text-left">
          About Us
        </b>
      </button>
    </main>
  );
};

export default VetCareHomePage;
