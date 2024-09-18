import { useState } from 'react';
import { InputBox } from './index';
import useCurrencyInfo from './UseCurrecnyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/bg.jpg')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto border border-gray-200 rounded-lg p-8 backdrop-blur-md bg-white/70 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Currency Converter</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Currency */}
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              onAmountChange={(newAmount) => setAmount(newAmount)}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full flex justify-center my-4">
            <button
              type="button"
              className="border-2 border-gray-300 rounded-full bg-blue-600 text-white px-4 py-2 focus:outline-none shadow-md hover:bg-blue-700 transition-colors duration-300"
              onClick={swap}
            >
              ⬇️⬆️ Swap
            </button>
          </div>

          {/* To Currency */}
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
