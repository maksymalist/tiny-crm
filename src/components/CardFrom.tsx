import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export function isValidCreditCardNumber(cardNumber: string): boolean {
  // Remove spaces and dashes from the card number
  const trimmedCardNumber = cardNumber.replace(/[\s-]/g, "");

  // Check if the card number contains only digits and is of valid length
  if (!/^\d{13,16}$/.test(trimmedCardNumber)) {
    return false;
  }

  // Convert the card number into an array of digits
  const digits = trimmedCardNumber.split("").map(Number);

  // Use Luhn's algorithm to validate the credit card number
  let sum = 0;
  let shouldDouble = false;

  // Iterate from right to left (from the end of the array)
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i] as number;

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // The card number is valid if the sum is a multiple of 10
  return sum % 10 === 0;
}

// Example usage:
const cardNumber1 = "4532 1234 5678 9876"; // Valid Visa card number
const cardNumber2 = "6011-1234-5678-9123"; // Valid Discover card number
const cardNumber3 = "1234-5678-9123-4567"; // Invalid card number

type Props = {
  number: string;
  setNumber: (number: string) => void;
};

const PaymentForm = (props: Props) => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const { number, setNumber } = props;

  const handleInputFocus = (e: any) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    switch (name) {
      case "cvc":
        setCvc(value);
        break;
      case "expiry":
        setExpiry(value);
        break;
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="mb-10 flex w-full justify-center rounded-full border-2 border-gray-200 p-2 px-4">
        {isValidCreditCardNumber(number) ? (
          <span className=" font-bold text-green-400">
            ✅ Credit Card Validated
          </span>
        ) : (
          <span className=" font-bold text-red-400">
            ❌ Please enter a valid credit card number
          </span>
        )}
      </div>
      <div id="PaymentForm">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form className="mt-8 w-full">
          <input
            className=" w-full rounded-md border-2 border-slate-600 p-2"
            type="tel"
            name="number"
            maxLength={16}
            value={number}
            placeholder="Card Number 💳"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
