"use client";

import { useState, useRef, useEffect } from "react";
import { workflowScenarios, WorkflowScenario } from "@/lib/content";
import Reveal from "./Reveal";

function getServiceIcon(service: string) {
  const s = service.toLowerCase();
  if (s.includes("github")) {
    return (
      <svg className="w-5 h-5 fill-current text-[#0969DA] dark:text-[#2F81F7]" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (s.includes("slack")) {
    return (
      <svg className="w-5 h-5 fill-current text-[#4A154B] dark:text-[#36C5F0]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    );
  }
  if (s.includes("stripe")) {
    return (
      <svg className="w-5 h-5 fill-current text-[#635BFF]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.839 3.771 6.491 6.861 7.607 2.613.972 3.522 1.682 3.522 2.699 0 .974-.834 1.531-2.28 1.531-2.228 0-5.015-1.108-6.986-2.18l-.941 5.569C5.394 23.364 8.243 24 11.499 24c2.612 0 4.819-.653 6.357-1.871 1.62-1.282 2.446-3.146 2.446-5.503 0-4.811-3.649-6.425-6.326-7.476z" />
      </svg>
    );
  }
  if (s.includes("linear")) {
    return (
      <svg className="w-5 h-5 fill-current text-[#5E6AD2]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.542 17.58A10.428 10.428 0 0 1 1.5 12C1.5 6.201 6.201 1.5 12 1.5c2.053 0 3.967.592 5.58 1.615l-14.038 14.465zM5.006 19.088l14.082-14.51c1.024 1.614 1.612 3.528 1.612 5.58 0 5.799-4.701 10.5-10.5 10.5-1.97 0-3.812-.544-5.394-1.49l.2-.08z" />
      </svg>
    );
  }
  if (s.includes("notion")) {
    return (
      <svg className="w-5 h-5 fill-current text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83c-.466-.373-.979-.606-2.007-.513L2.733 2.39c-.42.046-.513.326-.373.56zm.606 3.639v13.623c0 .746.373 1.026 1.213.979l13.868-.793c.746-.047.933-.513.933-1.166V6.772c0-.653-.28-.979-.84-.933l-14.334.84c-.606.046-.84.373-.84.84zm12.655.886c.093.42 0 .84-.42.886l-.7.14v8.397c-.373.233-.793.373-1.213.373-.653 0-1.026-.28-1.586-.979l-4.48-6.904v6.857l1.353.327c.093.046.14.373 0 .466l-3.359.187c-.093 0-.187-.28-.093-.373l1.073-.327V9.693l-1.4-.14c-.093-.047-.046-.42.093-.466l3.593-.234 4.713 7.045V9.413l-1.26-.14c-.093-.047-.046-.42.094-.467z" />
      </svg>
    );
  }
  if (s.includes("hubspot")) {
    return (
      <svg className="w-5 h-5 fill-current text-[#FF7A59]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.8 9.3V6.2c.7-.4 1.2-1.1 1.2-2 0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .9.5 1.6 1.2 2v3.1c-.8.3-1.5.8-2.1 1.4L7.5 7.1c.1-.3.1-.5.1-.8 0-1.8-1.5-3.3-3.3-3.3S1 4.5 1 6.3s1.5 3.3 3.3 3.3c.6 0 1.2-.2 1.7-.5l7.1 5.5c-.2.5-.4 1.1-.4 1.7 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.3-1.7-4.2-3.9-4.5v-2z" />
      </svg>
    );
  }
  if (s.includes("security") || s.includes("test")) {
    return (
      <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (s.includes("datadog")) {
    return (
      <svg className="w-5 h-5 text-[#632CA6]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    );
  }
  if (s.includes("pagerduty")) {
    return (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-[var(--amber-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function getServiceColor(service: string) {
  const s = service.toLowerCase();
  if (s.includes("github")) {
    return {
      bg: "bg-[#0969DA]/10 dark:bg-[#2F81F7]/15",
      border: "border-[#0969DA]/25 dark:border-[#2F81F7]/30",
      text: "text-[#0969DA] dark:text-[#2F81F7]",
      badge: "bg-[#0969DA]/10 dark:bg-[#2F81F7]/15 text-[#0969DA] dark:text-[#2F81F7] border-[#0969DA]/25 dark:border-[#2F81F7]/30",
    };
  }
  if (s.includes("slack")) {
    return {
      bg: "bg-[#4A154B]/10 dark:bg-[#36C5F0]/10",
      border: "border-[#4A154B]/25 dark:border-[#36C5F0]/25",
      text: "text-[#4A154B] dark:text-[#36C5F0]",
      badge: "bg-[#4A154B]/10 dark:bg-[#36C5F0]/10 text-[#4A154B] dark:text-[#36C5F0] border-[#4A154B]/20 dark:border-[#36C5F0]/20",
    };
  }
  if (s.includes("stripe")) {
    return {
      bg: "bg-[#635BFF]/10",
      border: "border-[#635BFF]/25",
      text: "text-[#635BFF]",
      badge: "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/25",
    };
  }
  if (s.includes("linear")) {
    return {
      bg: "bg-[#5E6AD2]/10",
      border: "border-[#5E6AD2]/25",
      text: "text-[#5E6AD2]",
      badge: "bg-[#5E6AD2]/10 text-[#5E6AD2] border-[#5E6AD2]/25",
    };
  }
  if (s.includes("notion")) {
    return {
      bg: "bg-amber-500/10 dark:bg-amber-400/15",
      border: "border-amber-500/25 dark:border-amber-400/30",
      text: "text-amber-600 dark:text-amber-400",
      badge: "bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300 border-amber-500/25 dark:border-amber-400/30",
    };
  }
  if (s.includes("hubspot")) {
    return {
      bg: "bg-[#FF7A59]/10",
      border: "border-[#FF7A59]/25",
      text: "text-[#FF7A59]",
      badge: "bg-[#FF7A59]/10 text-[#FF7A59] border-[#FF7A59]/25",
    };
  }
  if (s.includes("security") || s.includes("test")) {
    return {
      bg: "bg-teal/10",
      border: "border-teal/25",
      text: "text-teal",
      badge: "bg-teal/10 text-teal border-teal/25",
    };
  }
  if (s.includes("datadog")) {
    return {
      bg: "bg-[#632CA6]/10",
      border: "border-[#632CA6]/25",
      text: "text-[#632CA6] dark:text-[#a87ffb]",
      badge: "bg-[#632CA6]/10 text-[#632CA6] dark:text-[#a87ffb] border-[#632CA6]/25",
    };
  }
  if (s.includes("pagerduty")) {
    return {
      bg: "bg-[#06AC38]/10",
      border: "border-[#06AC38]/25",
      text: "text-[#06AC38]",
      badge: "bg-[#06AC38]/10 text-[#06AC38] border-[#06AC38]/25",
    };
  }
  return {
    bg: "bg-[var(--amber)]/10",
    border: "border-[var(--amber)]/25",
    text: "text-[var(--amber-deep)]",
    badge: "bg-[var(--amber)]/10 text-[var(--amber-deep)] border-[var(--amber)]/25",
  };
}

export default function Product() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(workflowScenarios[0].id);
  const [simulatingStep, setSimulatingStep] = useState<number | null>(null);
  const [simulationFinished, setSimulationFinished] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeScenario: WorkflowScenario =
    workflowScenarios.find((s) => s.id === selectedScenarioId) || workflowScenarios[0];

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeIdx = workflowScenarios.findIndex((s) => s.id === selectedScenarioId);
    const button = tabRefs.current[activeIdx];
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const currentScroll = container.scrollLeft;
    const scrollTarget = currentScroll + (buttonRect.left - containerRect.left) - (container.clientWidth - buttonRect.width) / 2;
    container.scrollTo({ left: Math.max(0, scrollTarget), behavior: "smooth" });
  }, [selectedScenarioId]);

  const handleTestRun = () => {
    if (simulatingStep !== null) return;
    setSimulationFinished(false);
    setSimulatingStep(0);

    const stepDuration = 600;
    setTimeout(() => setSimulatingStep(1), stepDuration);
    setTimeout(() => setSimulatingStep(2), stepDuration * 2);
    setTimeout(() => setSimulatingStep(3), stepDuration * 3);
    setTimeout(() => {
      setSimulatingStep(null);
      setSimulationFinished(true);
      setTimeout(() => setSimulationFinished(false), 4000);
    }, stepDuration * 4);
  };

  const isSimulating = simulatingStep !== null;

  return (
    <section id="product" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[var(--paper)] transition-colors overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Clean, Focused Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--ink)] break-words">
            Workflows that connect your entire stack
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--ink)]/70 leading-relaxed break-words">
            Connect everyday tools and let Nova handle the handoffs in the background.
          </p>

          {/* Clean Scenario Selector Tabs */}
          <div
            ref={scrollContainerRef}
            className="-mx-4 sm:mx-0 overflow-x-auto scrollbar-none pb-2 pt-1 scroll-smooth snap-x snap-proximity scroll-px-4 relative mt-6"
          >
            <div className="inline-flex justify-start sm:justify-center min-w-full px-4 sm:px-0 w-max">
              <div
                role="tablist"
                aria-label="Workflow Examples"
                className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-[var(--paper-raised)] border border-[var(--paper-line)] shadow-2xs"
              >
                {workflowScenarios.map((scenario, idx) => {
                  const isActive = scenario.id === activeScenario.id;
                  return (
                    <button
                      key={scenario.id}
                      ref={(el) => {
                        tabRefs.current[idx] = el;
                      }}
                      role="tab"
                      id={`scenario-tab-${scenario.id}`}
                      aria-selected={isActive}
                      aria-controls={`scenario-panel-${scenario.id}`}
                      type="button"
                      onClick={() => {
                        setSelectedScenarioId(scenario.id);
                        setSimulatingStep(null);
                        setSimulationFinished(false);
                      }}
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer min-h-[44px] flex items-center gap-2 select-none active:scale-[0.98] ${
                        isActive
                          ? "bg-[var(--amber)] text-[var(--text-on-amber)] shadow-xs font-semibold"
                          : "text-[var(--ink)]/65 hover:text-[var(--ink)] hover:bg-[var(--paper-line)]/50"
                      }`}
                    >
                      <span>{scenario.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Workflow Canvas with Stacked Grid Crossfade */}
        <Reveal className="w-full">
          <div className="rounded-2xl border border-[var(--paper-line)] bg-[var(--paper-raised)] p-5 sm:p-7 md:p-8 lg:p-9 shadow-sm relative overflow-hidden">
            {/* Stacked CSS Grid: Locks container height, smooth crossfade transition identical to Solutions */}
            <div className="w-full min-w-0 grid grid-cols-1 grid-rows-1 items-start">
              {workflowScenarios.map((scenario) => {
                const isScenarioActive = scenario.id === activeScenario.id;
                return (
                  <div
                    key={scenario.id}
                    id={`scenario-panel-${scenario.id}`}
                    role="tabpanel"
                    aria-labelledby={`scenario-tab-${scenario.id}`}
                    aria-hidden={!isScenarioActive}
                    className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-350 ease-out ${
                      isScenarioActive
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-3 scale-[0.985] pointer-events-none"
                    }`}
                  >
                    {/* Scenario Summary Line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 sm:mb-7 border-b border-[var(--paper-line)]">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--amber)]/10 text-[var(--amber-deep)] border border-[var(--amber)]/20">
                          {scenario.badge}
                        </span>
                        <p className="text-sm font-medium text-[var(--ink)]">
                          {scenario.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleTestRun}
                        disabled={isSimulating}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--amber)]/10 border border-[var(--amber)]/25 hover:bg-[var(--amber)] hover:text-[var(--text-on-amber)] text-xs font-semibold text-[var(--amber-deep)] transition-all active:scale-95 cursor-pointer shadow-xs disabled:opacity-60 shrink-0 self-start sm:self-auto min-h-[38px]"
                      >
                        <span className={`w-2 h-2 rounded-full ${isSimulating ? "bg-[var(--amber)] animate-ping" : simulationFinished ? "bg-emerald-500" : "bg-[var(--amber)]"}`} />
                        <span>{isSimulating ? `Running step ${(simulatingStep ?? 0) + 1}...` : simulationFinished ? "Workflow completed" : "Simulate workflow"}</span>
                      </button>
                    </div>

                    {/* 4 Connected Step Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 relative">
                      {scenario.nodes.map((node, index) => {
                        const isNodeActive = isScenarioActive && simulatingStep === index;
                        const isNodePassed = isScenarioActive && simulatingStep !== null && simulatingStep > index;
                        const serviceColor = getServiceColor(node.service);

                        return (
                          <div key={node.id} className="relative flex flex-col">
                            <div
                              className={`rounded-xl border bg-[var(--paper)] dark:bg-[var(--paper-deep)] p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between h-full shadow-xs ${
                                isNodeActive
                                  ? "border-[var(--amber)] ring-2 ring-[var(--amber)]/40 bg-[var(--paper-raised)] dark:bg-[var(--paper-deep)] scale-[1.02] shadow-md"
                                  : isNodePassed || (isScenarioActive && simulationFinished)
                                  ? "border-emerald-500/50 bg-[var(--paper)] dark:bg-[var(--paper-deep)]"
                                  : "border-[var(--paper-line)] hover:border-[var(--amber)]/40 hover:-translate-y-0.5 hover:shadow-sm"
                              }`}
                            >
                              {/* Service Icon, Name & Step Badge */}
                              <div>
                                <div className="flex items-center justify-between gap-2.5 mb-3 min-h-[32px]">
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <span className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-2xs transition-all duration-300 ${
                                      isNodeActive
                                        ? "bg-[var(--amber)]/15 border-[var(--amber)] text-[var(--amber-deep)] scale-105"
                                        : isNodePassed || (isScenarioActive && simulationFinished)
                                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                                        : `${serviceColor.bg} ${serviceColor.border} ${serviceColor.text || ""}`
                                    }`}>
                                      {getServiceIcon(node.service)}
                                    </span>
                                    <span className="text-xs font-semibold text-[var(--ink)]/90 truncate">
                                      {node.service}
                                    </span>
                                  </div>

                                  {/* Live Step Status Pill or Step Tag */}
                                  {isNodeActive ? (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--amber)]/15 text-[var(--amber-deep)] border border-[var(--amber)]/30 animate-fade-in shrink-0">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)] animate-ping" />
                                      Running
                                    </span>
                                  ) : isNodePassed || (isScenarioActive && simulationFinished) ? (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 animate-fade-in shrink-0">
                                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Done
                                    </span>
                                  ) : (
                                    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium border ${serviceColor.badge} shrink-0`}>
                                      {node.stepLabel}
                                    </span>
                                  )}
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-sm font-semibold text-[var(--ink)] leading-snug">
                                  {node.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-[var(--ink)]/65 leading-relaxed mt-1.5">
                                  {node.summary}
                                </p>
                              </div>
                            </div>

                            {/* Desktop Connector Arrow */}
                            {index < scenario.nodes.length - 1 && (
                              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none" aria-hidden="true">
                                <div className={`w-6 h-6 rounded-full bg-[var(--paper)] border flex items-center justify-center shadow-xs transition-all duration-300 ${
                                  isScenarioActive && simulatingStep !== null && simulatingStep > index
                                    ? "border-emerald-500/50 text-emerald-600 dark:text-emerald-400 scale-110 bg-emerald-50 dark:bg-emerald-950/40"
                                    : isNodeActive
                                    ? "border-[var(--amber)] text-[var(--amber-deep)] scale-105"
                                    : "border-[var(--paper-line)] text-[var(--ink)]/40"
                                }`}>
                                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            )}

                            {/* Mobile Connector Arrow */}
                            {index < scenario.nodes.length - 1 && (
                              <div className="flex md:hidden justify-center py-1.5 pointer-events-none" aria-hidden="true">
                                <div className={`w-5 h-5 rounded-full bg-[var(--paper)] border flex items-center justify-center shadow-2xs transition-all duration-300 ${
                                  isScenarioActive && simulatingStep !== null && simulatingStep > index
                                    ? "border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                                    : isNodeActive
                                    ? "border-[var(--amber)] text-[var(--amber-deep)]"
                                    : "border-[var(--paper-line)] text-[var(--ink)]/40"
                                }`}>
                                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Simulation Complete Banner */}
                    {isScenarioActive && simulationFinished && (
                      <div className="mt-5 p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-center justify-between text-xs font-medium animate-fade-in">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                            ✓
                          </span>
                          <span>Simulation completed — all 4 automated steps executed cleanly.</span>
                        </div>
                        <span className="text-[11px] opacity-75">0 manual touches</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
