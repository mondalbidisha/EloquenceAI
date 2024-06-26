"use client";
import { Check, Copy } from "lucide-react";
import Markdown from "react-markdown";
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";

interface ResultSectionProps {
  text: string;
}

function OutputSection({ text }: ResultSectionProps) {
  const [copying, setCopying] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [completedTyping, setCompletedTyping] = useState(false);

  const handleCopy = () => {
    copy(text);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 800);
  };

  useEffect(() => {
    setCompletedTyping(false);

    let i = 0;
    const stringResponse = text;

    const intervalId = setInterval(() => {
      setDisplayText(stringResponse.slice(0, i));

      i++;

      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 18);
  }, [text]);

  return (
    <div className="bg-secondary/20 text-neutral-100 mt-10 rounded-xl px-4 py-5 relative mb-10">
      <p className="flex flex-col text-lg font-bold text-lime-50 underline underline-offset-4">EloquenceAI Recommendation</p>
      <div className="mb-3">
        <div className="flex flex-row justify-end items-center">
          {copying ? (
            <div className="flex flex-row text-sm sm:text-base">
              <Check className="w-4 h-4 mr-2 mt-1" />
              Copied
            </div>
          ) : (
            <div
              className="flex flex-row items-center cursor-pointer text-sm sm:text-base"
              onClick={handleCopy}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </div>
          )}
        </div>
      </div>
      <p className="text-sm sm:text-base">
        <Markdown>{displayText}</Markdown>
      </p>
    </div>
  );
}

export default OutputSection;