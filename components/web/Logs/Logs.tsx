import Container from "@/components/ui/Container";
import React from "react";
import LogsHeader from "./LogsHeader";
import LogsListing from "./LogsListing";

function Logs() {
  return (
    <Container cn="items-start">
      <div className="flex flex-col gap-14 w-full">
        <LogsHeader />
        <LogsListing />
      </div>
    </Container>
  );
}

export default Logs;
