"use client";

import { useState } from "react";
import DemoModal from "./DemoModal";

const workflowSteps = [
  {
    step: "Step 1",
    tool: "Stripe",
    title: "New Customer Subscribes",
    description: "Captures customer details and plan tier when checkout succeeds",
    badge: "Triggered",
    icon: (
      <svg className="w-4 h-4 text-[#635BFF]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.839 3.771 6.491 6.861 7.607 2.613.972 3.522 1.682 3.522 2.699 0 .974-.834 1.531-2.28 1.531-2.228 0-5.015-1.108-6.986-2.18l-.941 5.569C5.394 23.364 8.243 24 11.499 24c2.612 0 4.819-.653 6.357-1.871 1.62-1.282 2.446-3.146 2.446-5.503 0-4.811-3.649-6.425-6.326-7.476z" />
      </svg>
    ),
  },
  {
    step: "Step 2",
    tool: "Notion",
    title: "Create Client Workspace",
    description: "Builds a dedicated onboarding hub with project templates and guides",
    badge: "Created",
    icon: (
      <svg className="w-4 h-4 fill-current text-[var(--ink)]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83c-.466-.373-.979-.606-2.007-.513L2.733 2.39c-.42.046-.513.326-.373.56zm.606 3.639v13.623c0 .746.373 1.026 1.213.979l13.868-.793c.746-.047.933-.513.933-1.166V6.772c0-.653-.28-.979-.84-.933l-14.334.84c-.606.046-.84.373-.84.84zm12.655.886c.093.42 0 .84-.42.886l-.7.14v8.397c-.373.233-.793.373-1.213.373-.653 0-1.026-.28-1.586-.979l-4.48-6.904v6.857l1.353.327c.093.046.14.373 0 .466l-3.359.187c-.093 0-.187-.28-.093-.373l1.073-.327V9.693l-1.4-.14c-.093-.047-.046-.42.093-.466l3.593-.234 4.713 7.045V9.413l-1.26-.14c-.093-.047-.046-.42.094-.467z" />
      </svg>
    ),
  },
  {
    step: "Step 3",
    tool: "Slack",
    title: "Notify Customer Success",
    description: "Posts client profile and onboarding brief to #customer-success",
    badge: "Sent",
    icon: (
      <svg className="w-4 h-4 fill-current text-[#4A154B] dark:text-[#36C5F0]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    step: "Step 4",
    tool: "Linear",
    title: "Assign Specialist & Milestone",
    description: "Creates kickoff task with checklist and 7-day target milestone",
    badge: "Assigned",
    icon: (
      <svg className="w-4 h-4 fill-current text-[#5E6AD2]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.542 17.58A10.428 10.428 0 0 1 1.5 12C1.5 6.201 6.201 1.5 12 1.5c2.053 0 3.967.592 5.58 1.615l-14.038 14.465zM5.006 19.088l14.082-14.51c1.024 1.614 1.612 3.528 1.612 5.58 0 5.799-4.701 10.5-10.5 10.5-1.97 0-3.812-.544-5.394-1.49l.2-.08z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="top" className="pt-20 sm:pt-22 md:pt-24 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[var(--paper)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        {/* Left Column: Value Proposition & CTAs */}
        <div className="w-full min-w-0">

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.12] sm:leading-[1.08] tracking-tight text-[var(--ink)] font-semibold max-w-2xl break-words">
            Automate workflows. Connect your stack. Ship faster.
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--ink)]/75 max-w-xl leading-relaxed break-words">
            NOVA connects your team&apos;s daily tools into reliable, automated pipelines. Eliminate repetitive status updates, route approvals instantly, and keep engineering, product, and operations in continuous alignment.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
            <a
              href="#pricing"
              className="inline-flex justify-center items-center rounded-lg bg-[var(--amber)] text-[var(--text-on-amber)] px-6 py-3.5 text-sm font-semibold hover:bg-[var(--amber-deep)] active:scale-[0.98] transition-all shadow-xs cursor-pointer min-h-[48px]"
            >
              Start free trial
            </a>

            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="group inline-flex justify-center items-center gap-2.5 rounded-lg border border-[var(--paper-line)] bg-[var(--paper-raised)] px-5 py-3.5 text-sm font-medium text-[var(--ink)] hover:border-[var(--ink)]/30 hover:bg-[var(--paper-deep)] active:scale-[0.98] transition-all cursor-pointer min-h-[48px]"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--amber)]/15 text-[var(--amber-deep)] shrink-0 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 10 12" className="w-2.5 h-2.5 translate-x-0.5 fill-current" aria-hidden="true">
                  <path d="M0 0 L10 6 L0 12 Z" />
                </svg>
              </span>
              <span>Watch 2-min demo</span>
            </button>
          </div>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--ink)]/55">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Free 14-day trial
            </span>
            <span className="text-[var(--ink)]/30">•</span>
            <span>No credit card required</span>
            <span className="text-[var(--ink)]/30">•</span>
            <span>2-minute setup</span>
          </div>
        </div>

        {/* Right Column: Clean Workflow Automation Preview */}
        <div className="relative w-full min-w-0 max-w-2xl lg:max-w-none mx-auto lg:translate-y-10">
          <div className="rounded-xl sm:rounded-2xl border border-[var(--paper-line)] bg-[var(--paper-raised)] shadow-xl overflow-hidden">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--paper-line)] bg-[var(--paper)]">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
                <span className="ml-2 text-xs font-medium text-[var(--ink)]/75 truncate">
                  Customer Onboarding Workflow
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>4 steps connected</span>
                </span>
              </div>
            </div>

            {/* Workflow Steps Flow */}
            <div className="p-3.5 sm:p-5 flex flex-col">
              {workflowSteps.map((step, idx) => (
                <div key={step.title} className="flex flex-col">
                  <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border border-[var(--paper-line)] bg-[var(--paper)] dark:bg-[var(--paper-deep)] hover:border-[var(--amber)]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-2xs min-w-0 group cursor-default">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[var(--paper-raised)] dark:bg-[var(--paper-raised)] border border-[var(--paper-line)] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-[var(--amber)]/30 transition-all duration-200">
                        {step.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[var(--ink)]">
                            {step.tool}
                          </span>
                          <span className="text-[var(--ink)]/30 text-xs">•</span>
                          <span className="text-xs text-[var(--ink)]/55 font-medium">
                            {step.step}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] mt-0.5 leading-snug">
                          {step.title}
                        </p>
                        <p className="text-[11px] text-[var(--ink)]/65 mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-medium group-hover:bg-emerald-500/15 transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden xs:inline">{step.badge}</span>
                    </div>
                  </div>

                  {idx < workflowSteps.length - 1 && (
                    <div className="flex items-center justify-center my-1 relative group/arrow">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--paper-raised)] border border-[var(--paper-line)] text-[var(--ink)]/40 shadow-2xs transition-all duration-200 group-hover/arrow:border-[var(--amber)]/40 group-hover/arrow:text-[var(--amber)]">
                        <svg className="w-3 h-3 transition-transform duration-200 group-hover/arrow:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-3 border-t border-[var(--paper-line)] bg-[var(--paper)] flex items-center justify-between text-xs text-[var(--ink)]/65">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Runs automatically on every new subscription
              </span>
              <span className="text-xs font-mono font-medium text-[var(--amber-deep)]">
                No code required
              </span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}
