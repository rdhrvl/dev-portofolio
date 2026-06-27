"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [terminalTab, setTerminalTab] = useState<'terminal' | 'editor' | 'git'>('terminal');
  const [commandInput, setCommandInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Welcome to Reval's interactive dev shell.",
    "Type 'help' to see available commands.",
    ""
  ]);

  const mockCode = `<?php

namespace App\\Http\\Livewire;

use Livewire\\Component;
use App\\Models\\Project;

class ProjectShowcase extends Component
{
    public $projects;

    public function mount()
    {
        $this->projects = Project::where('status', 'active')
            ->orderBy('completed_at', 'desc')
            ->get();
    }

    public function render()
    {
        return view('livewire.project-showcase');
    }
}`;

  const gitLog = [
    "commit e4d5f2a (HEAD -> main, origin/main)",
    "Author: Reval <ridhorevaldysaputra@gmail.com>",
    "Date:   Sat Jun 27 08:40:00 2026 +0700",
    "    feat: add laravel and livewire to fullstack skills matrix",
    "",
    "commit c92a184",
    "Author: Reval <ridhorevaldysaputra@gmail.com>",
    "Date:   Sat Jun 27 01:33:00 2026 +0700",
    "    feat: implement selected projects grid and analytics flow",
    "",
    "commit a8b12f3",
    "Author: Reval <ridhorevaldysaputra@gmail.com>",
    "Date:   Fri Jun 26 18:35:00 2026 +0700",
    "    initial commit: initialize Next.js client layout"
  ];

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCommand = commandInput.trim().toLowerCase();
    let response = "";
    if (cleanCommand === 'help') {
      response = "Available commands: about, skills, projects, contact, clear";
    } else if (cleanCommand === 'about') {
      response = "Reval is a professional full-stack web developer and programmer specializing in Next.js, Laravel, and Livewire.";
    } else if (cleanCommand === 'skills') {
      response = "Frontend: TypeScript, Next.js, React.js | Backend: Laravel, Livewire, Node.js, SQL";
    } else if (cleanCommand === 'projects') {
      response = "1. Vertex Business Dashboard  2. Nordic Living Storefront. Type 'projects' to check details.";
    } else if (cleanCommand === 'contact') {
      response = "Email: ridhorevaldysaputra@gmail.com | Use the contact form below to get in touch.";
    } else if (cleanCommand === 'clear') {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    } else if (cleanCommand === '') {
      response = "";
    } else {
      response = `Command not found: '${commandInput}'. Type 'help' for options.`;
    }

    setTerminalHistory(prev => [
      ...prev,
      `$ ${commandInput}`,
      ...(response ? [response] : []),
      ""
    ]);
    setCommandInput('');
  };

  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 self-start mb-6"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Open for Contract Opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl max-w-xl leading-none"
          >
            Next.js &amp; Laravel engineer building fast, client-ready web products.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 max-w-lg"
          >
            I design and engineer responsive Next.js web applications, custom backend API services, and high-speed database systems with an absolute focus on clean software execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-colors"
            >
              Discuss Your Project
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              View My Projects
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative flex justify-center"
        >
          <div className="w-full max-w-xl aspect-[4/3] bg-slate-950 text-slate-200 rounded-xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col font-mono text-xs">
            {/* Window Header */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800/60 select-none">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
              </div>
              {/* Tabs */}
              <div className="flex gap-4">
                <button
                  onClick={() => setTerminalTab('terminal')}
                  id="tab_select_terminal"
                  className={`px-3 py-1 rounded transition-colors text-[10px] font-bold tracking-tight ${terminalTab === 'terminal' ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  terminal
                </button>
                <button
                  onClick={() => setTerminalTab('editor')}
                  id="tab_select_editor"
                  className={`px-3 py-1 rounded transition-colors text-[10px] font-bold tracking-tight ${terminalTab === 'editor' ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  ProjectShowcase.php
                </button>
                <button
                  onClick={() => setTerminalTab('git')}
                  id="tab_select_git"
                  className={`px-3 py-1 rounded transition-colors text-[10px] font-bold tracking-tight ${terminalTab === 'git' ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  git log
                </button>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Window Body */}
            <div className="flex-1 p-6 overflow-y-auto min-h-0 select-text">
              {terminalTab === 'terminal' && (
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-1.5">
                    {terminalHistory.map((line, idx) => (
                      <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-4">
                    <span className="text-emerald-400 shrink-0 font-bold">reval@revaldev:~$</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      id="terminal_input_field"
                      className="flex-1 bg-transparent text-slate-100 outline-none border-none caret-slate-100 p-0 font-mono text-xs focus:ring-0"
                      autoFocus
                      placeholder="Type 'help'..."
                    />
                  </form>
                </div>
              )}

              {terminalTab === 'editor' && (
                <pre className="text-[11px] leading-relaxed whitespace-pre-wrap select-text overflow-x-auto text-slate-300">
                  <code>
                    {mockCode.split('\n').map((line, i) => {
                      let styledLine = line
                        .replace(/(class|namespace|use|public|function|return)/g, '<span class="text-pink-400 font-semibold">$1</span>')
                        .replace(/(mount|render|where|orderBy|get)/g, '<span class="text-blue-400">$1</span>')
                        .replace(/(\$this|\$projects)/g, '<span class="text-amber-400">$1</span>')
                        .replace(/('active'|'completed_at'|'desc'|'livewire\.project-showcase')/g, '<span class="text-emerald-400">$1</span>');

                      return (
                        <div key={i} className="table-row">
                          <span className="table-cell pr-4 text-slate-600 text-right select-none w-6">{i + 1}</span>
                          <span className="table-cell" dangerouslySetInnerHTML={{ __html: styledLine }}></span>
                        </div>
                      );
                    })}
                  </code>
                </pre>
              )}

              {terminalTab === 'git' && (
                <div className="space-y-2 select-text text-[11px] text-slate-300">
                  {gitLog.map((line, idx) => (
                    <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${line.startsWith('commit') ? "text-amber-400" : line.startsWith('Author') ? "text-slate-400" : line.startsWith('    ') ? "text-emerald-400" : "text-slate-300"
                      }`}>
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
