/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1NJ3NZ987Go
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { BadgeCheckIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Map } from "react-map-gl";

type Reminder = {
  date: Date;
  title: string;
  time: string;
  message: string;
};

type Props = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  qrr: number;
  notes: string;
  date: Date;
  location: string;
  zip: string;
  reminders: Reminder[];
};

export default function ClientProfile(props: Props) {
  const {
    firstName,
    lastName,
    phone,
    notes,
    date,
    location,
    zip,
    reminders,
    email,
    qrr,
  } = props;

  return (
    <div className="flex min-h-screen dark:bg-gray-900">
      <div className="container mx-auto my-12 flex max-w-5xl flex-col gap-8 px-4 md:px-6 lg:flex-row">
        <div className="flex-1 space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Client Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>
                {firstName[0]}
                {lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">
                {firstName} {lastName}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{phone}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex w-[150px] flex-row items-center">
                <span className="mr-2">💳 Credit Card</span>
                <BadgeCheckIcon className="h-[24px] w-[24px] text-sky-500" />
              </div>
              <div className="flex flex-row">
                <div className="mt-2">
                  <span className=" mr-2 rounded-md bg-orange-300 p-2 text-white">
                    Pending
                  </span>
                </div>
                <div className="mt-2">
                  <span className=" rounded-md bg-green-300 p-2 text-white">
                    ${qrr} QRR
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-2 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            {email}
            <BadgeCheckIcon className="ml-2 h-[24px] w-[24px] text-sky-500" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Service Notes</h3>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {notes}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">
                  {date ? format(date, "MMMM dd, yyyy") : "No Date Set"}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Service Date
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Address Map</h2>
              <div className="rounded-lg border shadow-sm">
                <Map
                  mapboxAccessToken={
                    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
                  }
                  initialViewState={{
                    longitude: 45.8081,
                    latitude: 37.7749,
                    zoom: 12,
                  }}
                  style={{ width: 400, height: 250 }}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold">Reminders</h3>
          <div className="space-y-4">
            {reminders.map((reminder, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <AlarmClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <div className="font-medium">{reminder.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {format(reminder.date, "MMMM dd, yyyy")} at{" "}
                      <span className="font-bold text-red-500">
                        {reminder.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {reminder.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlarmClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
