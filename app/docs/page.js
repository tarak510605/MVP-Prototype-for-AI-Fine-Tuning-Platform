"use client";

import { useState } from "react";
import Link from "next/link";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("curl");
  const [copied, setCopied] = useState(false);

  const apiEndpoint = "https://api.yourplatform.ai/v1/enterprise-support-model";

  const codeExamples = {
    curl: `curl -X POST ${apiEndpoint} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "input": "Summarize this support ticket"
  }'`,
    javascript: `const response = await fetch('${apiEndpoint}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    input: 'Summarize this support ticket'
  })
});

const data = await response.json();
console.log(data);`,
    python: `import requests

url = "${apiEndpoint}"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "input": "Summarize this support ticket"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,
  };

  const responseExample = `{
  "model_id": "enterprise-support-model-v1",
  "output": "Customer reported login issues on mobile app. Priority: Medium. Assigned to engineering team.",
  "processing_time_ms": 245,
  "tokens_used": 18,
  "guardrails_applied": ["pii_filtering", "schema_validation"]
}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12">
          <Link href="/success" className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-6">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Success
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3">API Documentation</h1>
          <p className="text-lg text-zinc-400">Complete guide to using your fine-tuned model API</p>
        </div>

        {/* Quick Start */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 shadow-xl border border-blue-500/30 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
          <p className="text-zinc-300 mb-4">
            Your model is deployed and ready to receive requests. Use the endpoint below to start making API calls.
          </p>
          <div className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-lg border border-zinc-700">
            <code className="text-blue-400 font-mono text-sm break-all">{apiEndpoint}</code>
            <button
              onClick={() => copyToClipboard(apiEndpoint)}
              className="ml-4 text-zinc-400 hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Authentication */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
          <p className="text-zinc-300 mb-4">
            All API requests require authentication using your API key. Include it in the Authorization header:
          </p>
          <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
            <code className="text-purple-400 font-mono text-sm">Authorization: Bearer YOUR_API_KEY</code>
          </div>
        </div>

        {/* Request Format */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Making a Request</h2>
          
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 border-b border-zinc-700">
            {[
              { key: "curl", label: "cURL" },
              { key: "javascript", label: "JavaScript" },
              { key: "python", label: "Python" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab.key
                    ? "text-white border-b-2 border-blue-500"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-green-400 font-mono">{codeExamples[activeTab]}</code>
              </pre>
            </div>
            <button
              onClick={() => copyToClipboard(codeExamples[activeTab])}
              className="absolute top-4 right-4 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white text-sm font-medium transition-all border border-zinc-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Request Body */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Request Body</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Parameter</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Required</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 px-4">
                    <code className="text-blue-400 font-mono text-sm">input</code>
                  </td>
                  <td className="py-3 px-4 text-zinc-300">string</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      Yes
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400">The input text to process</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 px-4">
                    <code className="text-blue-400 font-mono text-sm">max_tokens</code>
                  </td>
                  <td className="py-3 px-4 text-zinc-300">integer</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-zinc-700 text-zinc-400 text-xs font-medium">
                      No
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Maximum tokens in response (default: 256)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <code className="text-blue-400 font-mono text-sm">temperature</code>
                  </td>
                  <td className="py-3 px-4 text-zinc-300">float</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-zinc-700 text-zinc-400 text-xs font-medium">
                      No
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Sampling temperature 0.0-1.0 (default: 0.7)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Response Format */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Response Format</h2>
          <p className="text-zinc-300 mb-4">Successful requests return a JSON response with the following structure:</p>
          <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-green-400 font-mono">{responseExample}</code>
            </pre>
          </div>
        </div>

        {/* Error Codes */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Error Codes</h2>
          <div className="space-y-3">
            {[
              { code: "400", title: "Bad Request", desc: "Invalid request format or missing required parameters" },
              { code: "401", title: "Unauthorized", desc: "Missing or invalid API key" },
              { code: "429", title: "Too Many Requests", desc: "Rate limit exceeded" },
              { code: "500", title: "Internal Server Error", desc: "Something went wrong on our end" },
            ].map((error) => (
              <div key={error.code} className="flex items-start p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <div className="flex-shrink-0 w-16 h-10 rounded-lg bg-red-600/20 flex items-center justify-center mr-4">
                  <code className="text-red-400 font-bold">{error.code}</code>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{error.title}</h3>
                  <p className="text-sm text-zinc-400">{error.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rate Limits */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl border border-zinc-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Rate Limits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">1000</p>
              <p className="text-sm text-zinc-400 mt-2">Requests per hour</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <p className="text-3xl font-bold text-purple-400">10k</p>
              <p className="text-sm text-zinc-400 mt-2">Requests per day</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <p className="text-3xl font-bold text-pink-400">100</p>
              <p className="text-sm text-zinc-400 mt-2">Concurrent requests</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <span className="text-zinc-700">|</span>
          <Link href="/finetune" className="text-zinc-400 hover:text-white transition-colors">
            Fine-tune Another Model
          </Link>
        </div>
      </div>
    </div>
  );
}
