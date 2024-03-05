"use client";

import {useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  return (
    <main className="bg-black ml-6" >
      <h1 className="text-green-500 text-xl mt-4 mb-4">WebDev2</h1>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-2">Week 2</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-3">Week 3</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-4">Week 4</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-5">Week 5</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-6">Week 6</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-7">Week 7</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-8">Week 8</Link>
        </li>
      </ul>
    </main>
  );
}
