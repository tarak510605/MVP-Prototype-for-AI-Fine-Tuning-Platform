"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  // Mock data for deployed models
  const models = [
    {
      id: "enterprise-support-model-v1",
      name: "Customer Support Model",
      status: "active",
      requests: 12847,
      avgLatency: 245,
      lastUsed: "2 minutes ago",
      cost: 14.80,
    },
    {
      id: "content-generation-model-v2",
      name: "Content Generation Model",
      status: "active",
      requests: 8432,
      avgLatency: 312,
      lastUsed: "15 minutes ago",
      cost: 89.20,
    },
    {
      id: "sentiment-analysis-model-v1",
      name: "Sentiment Analysis Model",
      status: "idle",
      requests: 1523,
      avgLatency: 189,
      lastUsed: "3 hours ago",
      cost: 15.40,
    },
  ];

  const recentActivity = [
    { action: "Model deployed", model: "enterprise-support-model-v1", time: "2 hours ago" },
    { action: "Training completed", model: "content-generation-model-v2", time: "5 hours ago" },
    { action: "API key generated", model: "sentiment-analysis-model-v1", time: "1 day ago" },
    { action: "Training started", model: "enterprise-support-model-v1", time: "2 days ago" },
  ];

  const stats = {
    totalModels: 3,
    totalRequests: 22802,
    totalCost: 119.40,
    avgLatency: 249,
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500">Monitor your deployed models and usage</p>
            </div>
            <Link
              href="/finetune"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              New Model
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-500">Active Models</p>
              <svg className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{stats.totalModels}</p>
            <p className="mt-1 text-xs text-zinc-600">2 active, 1 idle</p>
          </div>

          <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-500">Total Requests</p>
              <svg className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{stats.totalRequests.toLocaleString()}</p>
            <p className="mt-1 text-xs text-zinc-600">Last 7 days</p>
          </div>

          <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-500">Total Cost</p>
              <svg className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">${stats.totalCost}</p>
            <p className="mt-1 text-xs text-zinc-600">Last 7 days</p>
          </div>

          <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-500">Avg Latency</p>
              <svg className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{stats.avgLatency}ms</p>
            <p className="mt-1 text-xs text-zinc-600">Across all models</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Deployed Models */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="border-b border-zinc-800 px-6 py-4">
                <h2 className="text-lg font-semibold text-white">Deployed Models</h2>
              </div>
              <div className="divide-y divide-zinc-800">
                {models.map((model) => (
                  <div key={model.id} className="p-6 hover:bg-zinc-800/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-sm font-semibold text-white">{model.name}</h3>
                          <span
                            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
                              model.status === "active"
                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                            }`}
                          >
                            {model.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-500 font-mono">{model.id}</p>
                        
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-zinc-600">Requests</p>
                            <p className="mt-1 text-sm font-semibold text-white">{model.requests.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-zinc-600">Avg Latency</p>
                            <p className="mt-1 text-sm font-semibold text-white">{model.avgLatency}ms</p>
                          </div>
                          <div>
                            <p className="text-xs text-zinc-600">Cost</p>
                            <p className="mt-1 text-sm font-semibold text-white">${model.cost}</p>
                          </div>
                        </div>
                        
                        <p className="mt-3 text-xs text-zinc-600">Last used {model.lastUsed}</p>
                      </div>
                      
                      <div className="ml-4 flex gap-2">
                        <Link
                          href="/docs"
                          className="rounded-md bg-zinc-800 px-3 py-2 text-xs font-medium text-white hover:bg-zinc-700 transition-colors border border-zinc-700"
                        >
                          Docs
                        </Link>
                        <button className="rounded-md bg-zinc-800 px-3 py-2 text-xs font-medium text-white hover:bg-zinc-700 transition-colors border border-zinc-700">
                          Settings
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="border-b border-zinc-800 px-6 py-4">
                <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-white"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium">{activity.action}</p>
                        <p className="mt-0.5 text-xs text-zinc-500 font-mono truncate">{activity.model}</p>
                        <p className="mt-1 text-xs text-zinc-600">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link
                  href="/finetune"
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors border border-zinc-700"
                >
                  <span>Fine-tune New Model</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors border border-zinc-700"
                >
                  <span>View Documentation</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors border border-zinc-700">
                  <span>Generate API Key</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Chart Placeholder */}
        <div className="mt-8 rounded-lg bg-zinc-900 border border-zinc-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Usage Overview</h2>
            <div className="flex gap-2">
              {["24h", "7d", "30d", "90d"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    selectedPeriod === period
                      ? "bg-white text-zinc-900"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border border-zinc-700"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          {/* Simple chart visualization */}
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 88, 72, 95, 68, 82, 58, 92, 76].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-white rounded-t transition-all hover:bg-zinc-300"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-zinc-600">{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-white"></div>
              <span>API Requests</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
