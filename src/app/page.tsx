"use client";
import Button from "@/componets/Button";
import { useEffect, useState } from "react";

const fetchData = async () => {
  // const data = await res.json();
  // return data;
};

// create delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const loopTest = async () => {
  return new Promise(async (resolve, reject) => {
    console.log("start loop");
    let y = 0;
    // delay 5s
    await delay(5000);

    console.log("end loop");
    resolve(y);
  });
};

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const [x, setX] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  // const data = await fetchData();
  // console.log("data:", data);
  return (
    <>
      <div className="justify-cen mx-auto flex max-w-xl flex-row gap-4 py-16">
        <Button
          href="https://ssps.cz"
          target="_blank"
          variant={{
            color: "secondary",
            size: "lg",
          }}
        >
          SSPŠ
        </Button>
        <Button href="https://seznam.cz">Seznam</Button>
      </div>
    </>
  );
}
