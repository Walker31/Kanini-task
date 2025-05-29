import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import calci from '../assets/Mortgage/assests/icon-calculator.svg'
import TextField from "@mui/material/TextField";

const Mortgage = () => {
  const [amount, setAmount] = useState(30000);
  const [term, setTerm] = useState(25);
  const [rate, setRate] = useState(5.25);
  const [mortgageType, setMortgageType] = useState("Repayment");

  const handleClearAll = () => {
    setAmount();
    setTerm();
    setRate(0);
    setMortgageType("Repayment");
  };

  return (
    <div className="bg-[#E3F5FD] items-center min-h-screen flex justify-center">
      <div className="flex justify-center flex-row gap-0 rounded-2xl overflow-hidden bg-white">
        {/* Left Component*/}
        <div className="bg-white p-6 w-120">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl">Mortgage Calculator</div>
            <div
              className="text-gray-400 hover:underline cursor-pointer"
              onClick={handleClearAll}
            >
              Clear All
            </div>
          </div>

          <div className="p-5">
            <div className="py-3">
              <label className="block text-gray text-sm font-medium mb-2">
                Mortgage Amount
              </label>
              <OutlinedInput
                id="mortgage"
                variant="outlined"
              
                startAdornment={
                  <InputAdornment
                    position="start"
                    sx={{
                      bgcolor: "#E3F5FD",
                    }}
                  >
                    <span className="text-gray-500 font-bold h-max">£</span>
                  </InputAdornment>
                }
                fullWidth
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <div className="py-3 flex flex-row gap-4">
              <div className="flex flex-col">
                <label className="block text-gray text-sm font-medium mb-2">
                  Mortgage Term
                </label>
                <OutlinedInput
                  id="mortgage-term"
                  variant="outlined"
                  endAdornment={
                    <InputAdornment
                      position="start"
                      sx={{
                        bgcolor: "#E3F5FD",
                      }}
                    >
                      <span className="text-gray-500 font-bold h-max">
                        years
                      </span>
                    </InputAdornment>
                  }
                  fullWidth
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-gray text-sm font-medium mb-2">
                  Interest rate
                </label>
                <OutlinedInput
                  id="interest-rate"
                  variant="outlined"
                  endAdornment={
                    <InputAdornment
                      position="start"
                      sx={{
                        bgcolor: "#E3F5FD",
                      }}
                    >
                      <span className="text-gray-500 font-bold h-max">%</span>
                    </InputAdornment>
                  }
                  fullWidth
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>
            </div>
            <div>
             <FormControl className="pt-4">
                <label className="block text-gray text-sm font-medium mb-2">
                  Mortgage Type 
                </label>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={mortgageType}
                  className="flex flex-col gap-3"
                  onChange={(e) => setMortgageType(e.target.value)}
                >
                  <div
                    className={`w-full p-2 rounded flex items-center border-2 ${
                      mortgageType === "Repayment" ? "border-[#CED591] bg-[#FAFAE0]" : "border-black bg-white"
                    } p-2 rounded`}
                  >
                    <FormControlLabel
                      value="Repayment"
                      control={<Radio sx={{
                        color:'black',"&.Mui-checked": {
                              color: "#CED591",
                            },
                      }} />}
                      label="Repayment"
                      className="w-full"
                    />
                  </div>

                  <div
                    className={`p-2 rounded flex items-center border-2 ${
                      mortgageType === "Interest" ? "border-[#CED591] bg-[#FAFAE0]" : "border-black bg-white"
                    } p-2 rounded`}
                  >
                    <FormControlLabel
                      value="Interest"
                      className="w-full"
                      control={<Radio sx={{
                        color:'black',"&.Mui-checked": {
                              color: "#CED591",
                            },
                      }} />}
                      label="Interest"
                    />
                  </div>
                </RadioGroup>
              </FormControl>

              <div className="pt-6">
                <Button sx={{
                  fontWeight:'bold',
                  borderRadius:'20px',
                  bgcolor:'#D9DC2D',
                  color:"#272F01"
                }} variant="contained" startIcon={<img src={calci} alt="calculator" className="w-5 h-5" />}>
                Calculate Repayments
              </Button>
              </div>

              

            </div>
          </div>
        </div>

        {/* Right Component */}
        <div className="bg-[#133040] flex flex-col gap-4 px-10 py-5 rounded-bl-4xl w-120">
          <div className="text-white text-2xl">Your results</div>
          <div className="text-white">
            <p>Your results are shown below based on the information </p>
            <p>you provided. To adjust the results, edit the form and</p>
            <p>click "calculate repayments" again.</p>
          </div>

          <div className="bg-[#0E2530] border-t-4 border-t-[#D1D842] rounded-xl px-5 py-4 flex flex-col items-start justify-between gap-4">
            <div className="text-[#A8C2D2]">Your Monthly Repayments</div>

            <div className="text-5xl text-[#D8D921]">£1,797.74</div>
            <Divider
              sx={{
                borderColor: "#A8C2D2",
                borderWidth: "0.5px",
                width: "100%",
              }}
            />

            <div className="text-[#A8C2D2]">
              Total you'll repay over the term
            </div>
            <div className="text-white text-3xl">£ 539,322.94</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mortgage;
