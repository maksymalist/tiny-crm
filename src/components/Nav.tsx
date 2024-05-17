import React from "react";
import Stepper from "./Stepper";

type Props = {
  orders: number;
};

const Nav = (props: Props) => {
  return (
    <nav className="sticky top-0 flex w-full flex-row  justify-center bg-white p-8 opacity-75">
      <div>
        <Stepper orders={props.orders} />
      </div>
    </nav>
  );
};

export default Nav;
