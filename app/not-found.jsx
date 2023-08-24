"use client";

import { DarkMode } from "@/components/DarkMode";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import errorimg from "../public/errorr.svg";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="z-999">
        <Navbar />
        <DarkMode />
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
          <div className="ui-error">
            <Image src={errorimg} />
          </div>
          <h2 className="mt-4 error-text">
            We could not find the page you were looking for.!
          </h2>
        </div>
      </body>
    </html>
  );
}