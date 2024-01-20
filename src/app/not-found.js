"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={40} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold">404 Not Found</h3>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Page;
