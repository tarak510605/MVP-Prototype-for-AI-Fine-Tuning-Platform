"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function FineTune() {
  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState("llama-3-8b");
  const [epochs, setEpochs] = useState(5);
  const [learningRate, setLearningRate] = useState("0.0003");
  const [batchSize, setBatchSize] = useState(16);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [guardrails, setGuardrails] = useState({
    piiFiltering: true,
    schemaValidation: true,
    promptInjection: true,
  });

  const models = {
    "llama-3-8b": { name: "Llama 3 - 8B", desc: "Fast and cost efficient", baseCost: 12, inferenceCost: 0.002 },
    "llama-3-70b": { name: "Llama 3 - 70B", desc: "High accuracy but expensive", baseCost: 89, inferenceCost: 0.015 },
    "mistral-7b": { name: "Mistral - 7B", desc: "Balanced performance", baseCost: 15, inferenceCost: 0.003 },
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      });
    }
  };

  const calculateCost = () => {
    const model = models[selectedModel];
    const dataMultiplier = uploadedFile ? 1.2 : 1.0;
    const epochMultiplier = epochs / 5;
    const fineTuneCost = (model.baseCost * dataMultiplier * epochMultiplier).toFixed(2);
    return { fineTuneCost, inferenceCost: model.inferenceCost.toFixed(3) };
  };

  const handleStartTraining = () => {
    router.push("/training");
  };

  const costs = calculateCost();

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white">Configure Fine-Tuning</h1>
          <p className="mt-2 text-sm text-zinc-500">Set up your custom AI model</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Configuration Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Model Selection */}
            <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
              <h2 className="text-lg font-semibold text-white mb-4">Base Model Selection</h2>
              <div className="space-y-4">
                {Object.entries(models).map(([key, model]) => (
                  <label
                    key={key}
                    className={`flex items-center justify-between p-4 rounded-md border cursor-pointer transition-all ${
                      selectedModel === key
                        ? "border-white bg-zinc-800"
                        : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="model"
                        value={key}
                        checked={selectedModel === key}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="h-4 w-4 text-blue-600"
                      />
                      <div className="ml-4">
                        <p className="text-white font-medium">{model.name}</p>
                        <p className="text-sm text-zinc-400">{model.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Fine-tuning Parameters */}
            <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
              <h2 className="text-lg font-semibold text-white mb-4">Fine-tuning Parameters</h2>
              <div className="space-y-6">
                {/* Training Epochs */}
                <div>
                  <label className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Training Epochs</span>
                    <span className="text-sm font-semibold text-white">{epochs}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={epochs}
                    onChange={(e) => setEpochs(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between mt-1 text-xs text-zinc-500">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Learning Rate */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Learning Rate</label>
                  <select
                    value={learningRate}
                    onChange={(e) => setLearningRate(e.target.value)}
                    className="w-full rounded-md bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-sm text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                  >
                    <option value="0.0001">0.0001 (Conservative)</option>
                    <option value="0.0003">0.0003 (Recommended)</option>
                    <option value="0.001">0.001 (Aggressive)</option>
                  </select>
                </div>

                {/* Batch Size */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Batch Size</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[8, 16, 32].map((size) => (
                      <button
                        key={size}
                        onClick={() => setBatchSize(size)}
                        className={`py-2.5 rounded-md text-sm font-medium transition-all ${
                          batchSize === size
                            ? "bg-white text-zinc-900"
                            : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-zinc-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dataset Upload */}
            <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
              <h2 className="text-lg font-semibold text-white mb-4">Dataset Upload</h2>
              <div className="space-y-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-2 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-1 text-sm text-zinc-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-zinc-600">CSV files only</p>
                  </div>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                {uploadedFile && (
                  <div className="flex items-center justify-between p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-8 h-8 text-zinc-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-white">{uploadedFile.name}</p>
                        <p className="text-xs text-zinc-500">{uploadedFile.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Guardrails */}
            <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
              <h2 className="text-lg font-semibold text-white mb-4">Guardrails</h2>
              <div className="space-y-4">
                {[
                  { key: "piiFiltering", label: "Enable PII Filtering", desc: "Automatically redact sensitive information" },
                  { key: "schemaValidation", label: "Enable Output Schema Validation", desc: "Ensure outputs match expected format" },
                  { key: "promptInjection", label: "Enable Prompt Injection Protection", desc: "Prevent malicious prompt attacks" },
                ].map((item) => (
                  <label key={item.key} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg cursor-pointer hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-700">
                    <div>
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setGuardrails({ ...guardrails, [item.key]: !guardrails[item.key] })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        guardrails[item.key] ? "bg-white" : "bg-zinc-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                          guardrails[item.key] ? "translate-x-6 bg-zinc-900" : "translate-x-1 bg-white"
                        }`}
                      />
                    </button>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price Estimator Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg bg-zinc-900 p-6 border border-zinc-800">
              <h2 className="text-lg font-semibold text-white mb-6">Price Estimate</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-zinc-500 mb-2">Estimated Fine-Tuning Cost</p>
                  <p className="text-3xl font-bold text-white">${costs.fineTuneCost}</p>
                </div>
                <div className="h-px bg-zinc-800"></div>
                <div>
                  <p className="text-xs text-zinc-500 mb-2">Estimated Inference Cost</p>
                  <p className="text-xl font-bold text-white">${costs.inferenceCost}</p>
                  <p className="text-xs text-zinc-600 mt-1">per request</p>
                </div>
                <div className="h-px bg-zinc-800"></div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Model:</span>
                    <span className="text-white font-medium">{models[selectedModel].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Epochs:</span>
                    <span className="text-white font-medium">{epochs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Batch Size:</span>
                    <span className="text-white font-medium">{batchSize}</span>
                  </div>
                  {uploadedFile && (
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Dataset:</span>
                      <span className="text-white font-medium">{uploadedFile.size}</span>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handleStartTraining}
                className="mt-6 w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors"
              >
                Start Fine-Tuning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
