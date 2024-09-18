/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",  // Fixed prop name to match usage
    amountDisabled = false,    // Fixed prop name to match usage
    currencyDisabled = false,  // Fixed prop name to match usage
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-xl shadow-2xl text-sm flex flex-col md:flex-row space-y-4 md:space-y-0 ${className}`}>
            {/* Amount Input Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor={amountInputId} className="text-white text-lg font-semibold mb-2">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-white border border-blue-300 rounded-lg px-4 py-2 text-gray-800 shadow-md focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-full md:w-1/2 flex flex-col items-end">
                <label className="text-white text-lg font-semibold mb-2 text-right">
                    Currency Type
                </label>
                <select
                    className="rounded-lg bg-white border border-blue-300 px-4 py-2 shadow-md focus:ring-2 focus:ring-blue-600 cursor-pointer transition-all duration-300"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
