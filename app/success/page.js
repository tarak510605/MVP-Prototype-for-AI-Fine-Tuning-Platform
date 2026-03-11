"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Success() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const modelId = "enterprise-support-model-v1";
  const apiEndpoint = "https://api.yourplatform.ai/v1/enterprise-support-model";

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <div className="py-12 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Success Animation */}
        <div className={`text-center mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-md bg-zinc-900 border border-zinc-800 mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Your Private Model is Ready</h1>
          <p className="text-sm text-zinc-500">Successfully deployed and ready for production use</p>
        </div>

        {/* Model Info Card */}
        <div className={`rounded-lg bg-zinc-900 p-8 border border-zinc-800 mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-lg font-semibold text-white mb-6">Model Information</h2>
          
          {/* Model ID */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-zinc-500 mb-2">Model ID</label>
            <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg border border-zinc-800">
              <code className="text-sm text-white font-mono">{modelId}</code>
              <button
                onClick={() => copyToClipboard(modelId)}
                className="ml-4 text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* API Endpoint */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-zinc-500 mb-2">API Endpoint</label>
            <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg border border-zinc-800">
              <code className="text-sm text-white font-mono break-all">{apiEndpoint}</code>
              <button
                onClick={() => copyToClipboard(apiEndpoint)}
                className="ml-4 text-zinc-400 hover:text-white transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-xs text-white">✓ Copied to clipboard</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/docs"
              className="flex items-center justify-center px-6 py-3 rounded-md bg-white text-zinc-900 text-sm font-semibold transition-colors hover:bg-zinc-100"
            >
              View API Docs
            </Link>
            <button className="flex items-center justify-center px-6 py-3 rounded-md bg-zinc-800 text-white text-sm font-semibold border border-zinc-700 transition-colors hover:bg-zinc-700">
              Test Endpoint
            </button>
          </div>
        </div>

        {/* Guardrails Summary */}
        <div className={`rounded-lg bg-zinc-900 p-8 border border-zinc-800 mb-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-lg font-semibold text-white mb-6">Active Guardrails</h2>
          <div className="space-y-4">
            {[
              {
                title: "PII Filtering Enabled",
                desc: "Personal information is automatically detected and redacted",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
                color: "blue",
              },
              {
                title: "Output Schema Validation Enabled",
                desc: "All outputs are validated against your defined schema",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                color: "purple",
              },
              {
                title: "Prompt Injection Protection Enabled",
                desc: "Malicious prompts are detected and blocked automatically",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                color: "pink",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-zinc-800 rounded-lg border border-zinc-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-zinc-900 border border-zinc-700 flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Stats */}
        <div className={`rounded-lg bg-zinc-900 p-8 border border-zinc-800 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-lg font-semibold text-white mb-6">Deployment Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-zinc-800 rounded-lg border border-zinc-800">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-zinc-500 mt-2">Training Complete</p>
            </div>
            <div className="text-center p-4 bg-zinc-800 rounded-lg border border-zinc-800">
              <p className="text-2xl font-bold text-white">Active</p>
              <p className="text-xs text-zinc-500 mt-2">Model Status</p>
            </div>
            <div className="text-center p-4 bg-zinc-800 rounded-lg border border-zinc-800">
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-xs text-zinc-500 mt-2">Guardrails Active</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href="/dashboard"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            View Dashboard
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href="/finetune"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Fine-tune Another Model
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
