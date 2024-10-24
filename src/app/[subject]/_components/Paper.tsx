"use client";
import React, { useState } from "react";

import { Question, Subject } from "@/types/commonTypes";
import { getRandomQuestion } from "@/libs/common";
import Button from "./Button";

interface Props {
  subject: Subject;
  questions: Question[];
  initIndex: number;
  initUsedIndexes: number[];
}
export default function Paper({
  subject,
  questions,
  initIndex,
  initUsedIndexes,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  const [usedIndexes, setUsedIndexes] = useState(initUsedIndexes);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const position = usedIndexes.findIndex((idx) => idx === currentIndex);

  const handleClickPrev = () => {
    setCurrentIndex(usedIndexes[position - 1]);

    if (!isShowAnswer) {
      setIsShowAnswer(true);
    }
  };

  const handleClickNext = () => {
    let newCurrentIndex = 0;
    if (position === usedIndexes.length - 1) {
      const { usedIndexes: staleIndexes, index } = getRandomQuestion({
        usedIndexes,
        questions,
      });

      setUsedIndexes(staleIndexes);
      setIsShowAnswer(false);
      newCurrentIndex = index;
    } else {
      newCurrentIndex = usedIndexes[position + 1];
    }

    setCurrentIndex(newCurrentIndex);
  };

  const handleClickClear = () => {
    const { usedIndexes: staleIndexes, index } = getRandomQuestion({
      usedIndexes: [],
      questions,
    });

    setCurrentIndex(index);
    setUsedIndexes(staleIndexes);
    setIsShowAnswer(false);
  };

  const handleClickShowAnswer = () => {
    setIsShowAnswer(true);
  };

  if (!questions[currentIndex]) return null;
  const isPrevDisabled = position === 0;
  const isNextDisabled = position === questions.length - 1;

  const { question, answer } = questions[currentIndex];
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold select-none">
        {subject.toUpperCase()} ({`${position}/${questions.length}`})
      </h1>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-3 items-center px-4 sm:max-w-screen-sm lg:max-w-screen-lg ">
          <span className="font-bold text-2xl text-green-600 select-none">
            {question}
          </span>
          {isShowAnswer ? (
            <span className="text-xl select-none">{answer}</span>
          ) : (
            <Button text="SHOW ANSWER" onClick={handleClickShowAnswer} />
          )}
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button
            text="PREV"
            onClick={handleClickPrev}
            isDisabled={isPrevDisabled}
          />
          <Button
            text="NEXT"
            onClick={handleClickNext}
            isDisabled={isNextDisabled || !isShowAnswer}
          />
          {isNextDisabled && isShowAnswer && (
            <Button
              className="text-blue-400 border-blue-400"
              text="CLEAR"
              onClick={handleClickClear}
            />
          )}
        </div>
      </div>
    </div>
  );
}
