import Link from "next/link";
import React from "react";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href={"#yellow"} scroll={false}>
            Go to yellow section
          </Link>
        </li>
        <li>
          <Link href={"#green"} scroll={false}>
            Go to green section
          </Link>
        </li>
        <li>
          <Link href={"#red"} scroll={true}>
            Go to red section
          </Link>
        </li>
      </ul>
      <div className="flex flex-col justify-items-center">
        <div className="part-yellow" id="yellow"></div>
        <div className="part-green" id="green"></div>
        <div className="part-red" id="red"></div>
      </div>
    </div>
  );
}

export default Dashboard;
