"use client";

import React, { useState } from "react";
import axios from "axios";
import { Template } from "@prisma/client";
import { Sparkles } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loader from "@/components//loader";
import OutputSection from "@/components/output-section";
import TemplateSelector from "@/components/template-selector";
import { publicAppUrl } from "@/utils/constants";

interface PlaygroundSectionProps {
  templateOptions: Template[];
}

function PlaygroundSection({ templateOptions }: PlaygroundSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    templateOptions.length > 0 ? templateOptions[0].id : 0
  );
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${publicAppUrl}/api/generate`, {
        inputText,
        templateId: selectedTemplateId,
      });
      if (data?.text) {
        setDisplayText(data.text);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto mt-10">
      <Textarea
        className="bg-neutral-800 text-neutral-100"
        placeholder="Start by writing or pasting text ..."
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />

      <div className="flex flex-col sm:flex-row justify-between mt-5 space-y-5 sm:space-y-0">
        <TemplateSelector
          value={selectedTemplateId}
          options={templateOptions}
          onSelect={(val) => setSelectedTemplateId(Number(val))}
        />
        <Button
          disabled={isLoading || inputText.length === 0}
          className="bg-lime-200 text-lime-950 font-bold hover:animate-bounce rounded-xl"
          onClick={handleGenerate}
        >
          Generate
          <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {isLoading && <Loader />}
      {!isLoading && displayText.length > 0 && (
        <OutputSection text={displayText} />
      )}
    </div>
  );
}

export default PlaygroundSection;