import React, { use, useEffect, useState } from "react";
import { DatePickerDemo } from "./ui/datepicker";

type Reminder = {
  date: Date;
  time: string;
  title: string;
  message: string;
};

type ReminderProps = {
  reminder: Reminder;
  index: number;
  removeReminder: (index: number) => void;
  updateReminder: (index: number, reminder: Reminder) => void;
};

const Reminder = (props: ReminderProps) => {
  const { reminder, index } = props;

  const [date, setDate] = useState(reminder.date);
  const [title, setTitle] = useState(reminder.title);
  const [time, setTime] = useState(reminder.time);

  useEffect(() => {
    props.updateReminder(index, { ...reminder, date });
  }, [date, reminder.date]);

  useEffect(() => {
    props.updateReminder(index, { ...reminder, time });
  }, [time, reminder.time]);

  return (
    <li
      className="mb-10 ms-6 rounded-lg border-2 border-slate-300 bg-white p-4 hover:shadow-md"
      key={index}
    >
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </span>
      <div className="mb-4 flex w-full flex-wrap justify-between px-2 md:flex-row lg:flex-row">
        <div>
          <input
            className="mb-1 flex w-[300px] items-center text-lg font-semibold text-gray-900 dark:text-white"
            value={title}
            onChange={(e) => {
              props.updateReminder(index, {
                ...reminder,
                title: e.target.value,
              });
              setTitle(e.target.value);
            }}
          />
          <div className="my-4">
            <DatePickerDemo date={date} setDate={setDate} />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <form className="mx-auto ml-2 max-w-[8rem]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="time"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                min="08:00"
                max="20:00"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}
                required
              />
            </div>
          </form>
        </div>
      </div>
      <textarea
        value={reminder.message}
        onChange={(e) => {
          props.updateReminder(index, { ...reminder, message: e.target.value });
        }}
        className={
          "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border bg-transparent bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
        }
      />
      <button
        className="hite my-4 inline-flex items-center rounded-lg border border-red-200 bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-white hover:text-red-700 focus:z-10 focus:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 dark:border-red-600 dark:bg-red-800 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-700"
        onClick={() => props.removeReminder(index)}
      >
        delete reminder
      </button>
    </li>
  );
};

type Props = {
  reminders: Reminder[];
  setReminders: (reminders: Reminder[]) => void;
};

const NurtureTimeline = (props: Props) => {
  const { reminders, setReminders } = props;

  const update_reminder = (index: number, reminder: Reminder) => {
    const newReminders = [...reminders];
    newReminders[index] = reminder;
    setReminders(newReminders);
  };

  const add_reminder = () => {
    setReminders([
      ...reminders,
      {
        title: "New reminder",
        date: new Date(),
        time: "12:00PM",
        message: "Check-up message before service",
      },
    ]);
  };

  const delete_reminder = (index: number) => {
    const newReminders = [...reminders];
    newReminders.splice(index, 1);
    setReminders(newReminders);
  };

  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {reminders.map((reminder, index) => {
          return (
            <Reminder
              key={index}
              reminder={reminder}
              index={index}
              removeReminder={delete_reminder}
              updateReminder={update_reminder}
            />
          );
        })}
      </ol>
      <button
        className="my-4 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={add_reminder}
      >
        Add reminder
      </button>
      <button
        className="my-4 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => {
          console.log(reminders);
        }}
      >
        print reminders
      </button>
    </div>
  );
};

export default NurtureTimeline;
