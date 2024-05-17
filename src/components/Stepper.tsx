function Step(props: {
  index: number;
  title: string;
  activeStep: number;
  final?: boolean;
}) {
  const active = props.index === props.activeStep;
  const completed = props.index < props.activeStep ? true : false;

  return (
    <div className="w-full">
      <h6 className={`mb-2 mr-4 text-base font-bold text-green-500`}></h6>
      <div className="flex w-full items-center">
        <div
          className={`mx-[-1px] flex ${props.final ? "h-12 w-12" : "h-10 w-10"} shrink-0 items-center justify-center rounded-full ${props.final && "bg-green-500"} ${!completed && !active && !props.final && "border-gray-300 bg-gray-100"} border-green-500 p-1.5`}
        >
          {props.final && active ? (
            <svg
              className="h-5 w-5 animate-bounce fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
            </svg>
          ) : props.final ? (
            <span className="font-bold text-white">😀</span>
          ) : active ? (
            <svg
              className="h-5 w-5 animate-bounce fill-green-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
            </svg>
          ) : completed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full fill-green-500"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
          ) : (
            <span className="font-bold text-black">{props.title}</span>
          )}
        </div>
        {!props.final && (
          <div
            className={`h-2 w-[35px] ${completed ? "bg-green-500" : "bg-gray-100"}`}
          ></div>
        )}
      </div>
    </div>
  );
}

function Stepper(props: { orders: number }) {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="mx-auto flex max-w-screen-lg items-end">
          <Step title="1" index={0} activeStep={props.orders} />
          <Step title="2" index={1} activeStep={props.orders} />
          <Step title="3" index={2} activeStep={props.orders} />
          <Step title="5" index={4} activeStep={props.orders} final />
        </div>
      </div>
    </>
  );
}

export default Stepper;
