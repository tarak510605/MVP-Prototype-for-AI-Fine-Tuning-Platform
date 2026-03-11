"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../components/Navigation";

export default function Training() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initializing training environment",
    "Uploading dataset",
    "Tokenizing dataset",
    "Preparing training batches",
    "Fine-tuning base model",
    "Evaluating performance",
    "Deploying inference endpoint",
  ];

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const interval = 100; // Update every 100ms
    const increment = (100 / totalDuration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            router.push("/success");
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [router]);

  useEffect(() => {
    const stepInterval = Math.floor((100 / steps.length));
    const newStep = Math.min(Math.floor(progress / stepInterval), steps.length - 1);
    setCurrentStep(newStep);
  }, [progress, steps.length]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <div className="flex items-center justify-center px-6" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="w-full max-w-3xl">
        {/* Main Card */}
        <div className="rounded-lg bg-zinc-900 p-12 border border-zinc-800">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-zinc-800 border border-zinc-700 mb-6">
              <svg className="w-8 h-8 text-zinc-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Fine-Tuning in Progress</h1>
            <p className="text-sm text-zinc-500">This process typically takes 8-10 seconds</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-zinc-500">Progress</span>
              <span className="text-xs font-semibold text-white">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-800">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
              </div>
            </div>
          </div>

          {/* Training Logs */}
          <div className="rounded-lg bg-zinc-950 p-6 border border-zinc-800">
            <div className="flex items-center mb-4">
              <span className="text-xs font-mono text-zinc-600">training.log</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start transition-all duration-300 ${
                    index <= currentStep ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {index < currentStep ? (
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : index === currentStep ? (
                    <div className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full border border-zinc-400 border-t-transparent animate-spin"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                    </div>
                  )}
                  <span className={index <= currentStep ? "text-zinc-300" : "text-zinc-600"}>
                    {step}
                    {index === currentStep && <span className="animate-pulse">...</span>}
                    {index < currentStep && <span className="text-white ml-2">✓</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-zinc-800 border border-zinc-800">
              <p className="text-xl font-bold text-white">{Math.round(progress)}%</p>
              <p className="text-xs text-zinc-500 mt-1">Complete</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-800 border border-zinc-800">
              <p className="text-xl font-bold text-white">{currentStep + 1}/{steps.length}</p>
              <p className="text-xs text-zinc-500 mt-1">Steps</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-800 border border-zinc-800">
              <p className="text-xl font-bold text-white">{Math.max(0, 10 - Math.round(progress / 10))}s</p>
              <p className="text-xs text-zinc-500 mt-1">Remaining</p>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 rounded-lg bg-zinc-900 border border-zinc-800 p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-zinc-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-white mb-1">Training Your Custom Model</p>
              <p className="text-xs text-zinc-500">
                Your model is being fine-tuned on your dataset. Once complete, you'll receive a private API endpoint for deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
