import { useState } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Arcade from '../assets/MultiStepForm/assets/icon-arcade.svg';
import Advanced from '../assets/MultiStepForm/assets/icon-advanced.svg';
import Pro from '../assets/MultiStepForm/assets/icon-pro.svg';

const MultiStepForm = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleSwitchChange = (event) => {
    setIsYearly(event.target.checked);
  };

  return (
    <div className="bg-[#EEF4FE] flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-lg w-[900px]">
        
        {/* Sidebar */}
        <div className="w-full md:w-[274px] min-h-full bg-cover bg-no-repeat bg-center bg-[url('../assets/MultiStepForm/assets/bg-sidebar-desktop.jpg')] p-6 flex flex-col gap-6 justify-start">
          {/* Step 1 */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center border-white text-white">1</div>
            <div>
              <div className="text-gray-200 text-sm">Step 1</div>
              <div className="text-white font-bold">YOUR INFO</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center border-white text-white">2</div>
            <div>
              <div className="text-gray-200 text-sm">Step 2</div>
              <div className="text-white font-bold">SELECT PLAN</div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center border-white text-white">3</div>
            <div>
              <div className="text-gray-200 text-sm">Step 3</div>
              <div className="text-white font-bold">ADD-ONS</div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center border-white text-white">4</div>
            <div>
              <div className="text-gray-200 text-sm">Step 4</div>
              <div className="text-white font-bold">SUMMARY</div>
            </div>
          </div>
        </div>

        {/* Right Form Content */}
        <div className="flex-1 py-10 px-15">
          <h2 className="text-2xl font-bold mb-4 text-[#02295a]">Select your plan</h2>
          <p className="text-gray-500 mb-6">You have the opportunity of monthly or yearly billing.</p>

          <div className="flex flex-row gap-4">
            {/* Arcade Plan */}
            <div className="border-2 border-gray-300 rounded-lg p-4 w-40 hover:border-[#473DFF] cursor-pointer transition-all flex flex-col items-start gap-3">
              <img src={Arcade} alt="Arcade Plan" className="w-10 h-10" />
              <div className="h-7"></div>
              <div>
                <div className="font-bold text-[#02295a] text-base">Arcade</div>
                <div className="text-gray-500 text-sm py-2">$90/yr</div>
                <div className="text-[#473DFF] text-xs font-medium">2 months free</div>
              </div>
            </div>

            {/* Advanced Plan */}
            <div className="border-2 border-gray-300 rounded-lg p-4 w-40 hover:border-[#473DFF] cursor-pointer transition-all flex flex-col items-start gap-3">
              <img src={Advanced} alt="Advanced Plan" className="w-10 h-10" />
              <div className="h-7"></div>
              <div>
                <div className="font-bold text-[#02295a] text-base">Advanced</div>
                <div className="text-gray-500 text-sm py-2">$120/yr</div>
                <div className="text-[#473DFF] text-xs font-medium">2 months free</div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-gray-300 rounded-lg p-4 w-40 hover:border-[#473DFF] cursor-pointer transition-all flex flex-col items-start gap-3">
              <img src={Pro} alt="Pro Plan" className="w-10 h-10" />
              <div className="h-7"></div>
              <div>
                <div className="font-bold text-[#02295a] text-base">Pro</div>
                <div className="text-gray-500 text-sm py-2">$150/yr</div>
                <div className="text-[#473DFF] text-xs font-medium">2 months free</div>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="bg-[#F9F9FF] py-2 my-4 rounded-2xl">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className={isYearly ? "text-gray-300" : "text-black"}>Monthly</div>
              <Switch checked={isYearly} onChange={handleSwitchChange} />
              <div className={isYearly ? "text-black" : "text-gray-300"}>Yearly</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row justify-between pt-5">
            <Button>
              <div className="text-gray-400">Go Back</div>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#01295A",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
