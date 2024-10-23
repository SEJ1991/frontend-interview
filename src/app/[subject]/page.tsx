import React from "react";
import Link from "next/link";

import { Subject } from "@/types/common";
import { getQuestions } from "@/libs/common";
import Paper from "./_components/Paper";

interface Params {
  params: {
    subject: Subject;
  };
}
export default function SubjectPage({ params }: Params) {
  const { subject } = params;
  const { questions, initIndex, initUsedIndexes } = getQuestions(subject);

  return (
    <>
      <Link
        className="top-5 left-5 absolute p-2 border border-red-400 text-red-400 rounded-md z-10 select-none"
        href="/"
      >
        HOME
      </Link>
      <div className="w-full h-full relative flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold select-none">
          about {subject.toUpperCase()}
        </h1>
        <Paper
          questions={questions}
          initIndex={initIndex}
          initUsedIndexes={initUsedIndexes}
        />
      </div>
    </>
  );
}
