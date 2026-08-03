"use client";

import { useEffect, useState } from "react";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const FALLBACK_USER: GitHubUser = {
  login: "rdhrvl",
  avatar_url: "https://avatars.githubusercontent.com/u/240835394?v=4",
  html_url: "https://github.com/rdhrvl",
  name: "Reval",
  public_repos: 6,
  followers: 2,
  following: 4,
  bio: "Full-Stack Web Developer focused on Next.js, Laravel, & High-Performance Web Apps."
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "dev-portofolio",
    full_name: "rdhrvl/dev-portofolio",
    html_url: "https://github.com/rdhrvl/dev-portofolio",
    description: "Personal developer portfolio built with Next.js 16 App Router, TypeScript, Framer Motion, and Tailwind CSS v4.",
    language: "TypeScript",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-08-03"
  },
  {
    id: 2,
    name: "WEB_RIDHO_REVALDY_SAPUTRA_LAUNDRY",
    full_name: "rdhrvl/WEB_RIDHO_REVALDY_SAPUTRA_LAUNDRY",
    html_url: "https://github.com/rdhrvl/WEB_RIDHO_REVALDY_SAPUTRA_LAUNDRY",
    description: "Full-stack laundry management web application built with Laravel and Blade templates.",
    language: "Blade",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-09"
  },
  {
    id: 3,
    name: "tic-tac-toe",
    full_name: "rdhrvl/tic-tac-toe",
    html_url: "https://github.com/rdhrvl/tic-tac-toe",
    description: "Interactive tic-tac-toe web application featuring responsive design and state management.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-26"
  }
];

export default function GitHubSection() {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/rdhrvl"),
          fetch("https://api.github.com/users/rdhrvl/repos?sort=updated&per_page=6")
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);
        }

        if (reposRes.ok) {
          const reposData: GitHubRepo[] = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
          }
        }
      } catch (err) {
        console.error("GitHub API fetch error:", err);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 sm:py-32 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-emerald-400 border border-slate-700/60 mb-4">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Live GitHub Open Source Integration
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            GitHub Code & Repositories
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            Explore public source code, open-source repositories, and contributions directly from my GitHub profile.
          </p>
        </AnimateSection>

        {/* Profile Card Header */}
        <AnimateSection variant="scaleUp" className="mb-12">
          <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 shrink-0">
                <Image
                  src={user.avatar_url}
                  alt={`${user.name || user.login} GitHub Avatar`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="text-xl font-bold text-white">{user.name || "Reval"}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                    @{user.login}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-md">
                  {user.bio || "Full-Stack Web Developer building high-performance modern web apps."}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-6 mt-3 text-xs font-mono text-slate-300">
                  <div>
                    <span className="font-bold text-white text-sm">{user.public_repos}</span> Public Repos
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{user.followers}</span> Followers
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{user.following}</span> Following
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition-colors gap-2 shrink-0"
            >
              <svg className="h-4 w-4 text-slate-900 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Follow @{user.login} on GitHub
            </motion.a>
          </div>
        </AnimateSection>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <AnimateSection
              key={repo.id || index}
              variant="fadeUp"
              once={true}
              className="h-full"
            >
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <svg className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <h4 className="font-mono text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                        {repo.name}
                      </h4>
                    </div>
                    <svg className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {repo.description || "Open-source project repository by @rdhrvl."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-[11px] font-mono text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}
