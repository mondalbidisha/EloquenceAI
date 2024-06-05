"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function header() {
  
  return (
    <header className="flex justify-between pt-10 w-full items-center lg:px-5 xl:px-0">
      <h1 className="text-lime-50 text-xl sm:text-2xl font-bold">
        EloquenceAI
      </h1>
      <div className="flex items-center lg:order-2 gap-x-3">
      </div>
    </header>
  );
}

export default header;