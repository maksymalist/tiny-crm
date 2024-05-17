import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DatePickerDemo } from "./ui/datepicker";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  date: Date;
  location: string;
  zip: string;
  qrr: number;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setNotes: (notes: string) => void;
  setDate: (date: Date) => void;
  setLocation: (location: string) => void;
  setZip: (zip: string) => void;
  setQrr: (qrr: number) => void;
};

const ProspectForm = (props: Props) => {
  const { firstName, lastName, email, phone, notes, date, location, zip, qrr } =
    props;
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setNotes,
    setDate,
    setLocation,
    setZip,
    setQrr,
  } = props;

  return (
    <div>
      <h1 className="text-2xl">Enter prospect into nurture sequence 🍼</h1>

      <div className="mt-10 flex w-full max-w-[800px] flex-col">
        <div className="flex w-full flex-row justify-evenly">
          <input
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
          <div className="mx-2"></div>
          <input
            type={"text"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
        </div>
        <div className="mt-4 flex w-full flex-row items-center">
          <PhoneInput
            country={"ca"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <div className="mt-4 flex w-full flex-row items-center">
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
        </div>
        <div className="mt-4 flex flex-row items-center">
          <input
            type={"text"}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Address"
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring mr-4 flex h-9 w-full rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
          <input
            type={"text"}
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Zip Code (optional)"
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-[150px] rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
        </div>
        <div className="mt-4">
          <span>Service notes 📝</span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border bg-transparent bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
        </div>
        <div className="flex w-full flex-row justify-evenly">
          <div className="mt-4 flex flex-col">
            <span>Service Day</span>
            <DatePickerDemo date={date} setDate={setDate} />
          </div>
          <div className="ml-2 mt-4 flex flex-col">
            <span>Contract QRR</span>
            <input
              type={"number"}
              value={qrr}
              onChange={(e) => setQrr(parseInt(e.target.value))}
              placeholder="($199 - $350)"
              className={
                "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-[150px] rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectForm;
