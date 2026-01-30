import React from "react";
import { Logs } from "@/helper/data/LogData";
import LogsListingCard from "./component/LogsListingCard";

function LogsListing() {
  return (
    <div className="min-h-screen">
      <LogsListingCard />
    </div>
  );
}

export default LogsListing;
