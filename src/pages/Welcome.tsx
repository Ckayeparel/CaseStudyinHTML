import { FunctionComponent, useCallback } from "react";
import VetCareHomePage from "../components/VetCareHomePage";

const Welcome: FunctionComponent = () => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  return (
    <div className="relative w-full h-[1080px] overflow-hidden bg-[url('/public/welcome@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <section className="absolute top-[93px] left-[119px] w-[1417px] overflow-hidden flex flex-row items-start justify-start h-auto gap-[-40px] hover:flex hover:w-[1417px] hover:h-auto hover:flex-row hover:gap-[-40px] hover:items-start hover:justify-start">
        <button
          className="cursor-pointer [border:none] py-2 px-4 bg-steelblue-500 rounded-11xl flex flex-row items-center justify-between box-border w-auto [align-self:unset] h-auto gap-[10px] hover:bg-steelblue-200 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[10px] hover:items-center hover:justify-between hover:rounded-11xl hover:py-2 hover:px-4 hover:box-border active:bg-steelblue-500"
          onClick={onFrameButtonClick}
        >
          <b className="relative text-31xl font-inter text-gray text-left">
            Contact Us
          </b>
        </button>
        <img
          className="max-h-full w-[1152px] overflow-hidden shrink-0 object-cover ml-[-40px]"
          alt=""
          src="/frame@2x.png"
        />
      </section>
      <VetCareHomePage />
    </div>
  );
};

export default Welcome;
