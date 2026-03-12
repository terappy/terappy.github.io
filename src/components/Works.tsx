"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const works = [
  {
    title: "This Portfolio Site",
    description: "このポートフォリオサイト。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/terappy/terappy.github.io",
    demo: "#",
  },
  {
    title: "Webアプリケーション開発",
    description: "Webアプリケーションの開発をやってます。最近は生成AIを使って開発を進めることも増えてきました。",
    tech: ["Node.js", "TypeScript", "Next.js", "Docker", "Java", "Spring Boot", "Python", "MySQL", "PostgreSQL", "etc..."]
  },
  {
    title: "クラウドWebサーバー構築",
    description: "クラウドサービスを使ったサーバーの構築をやってます。",
    tech: ["AWS", "Docker", "Datadog", "Fastly", "Akamai"],
  },
  {
    title: "ラズパイと遊ぶ",
    description: "プライベートではラズパイを使ってスマートホームを作ったりNASを作ったりしています。",
    tech: ["Raspberry Pi", "Python"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Works() {
  return (
    <section id="works" className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-gradient">Works</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          仕事やプライベートでやってきたことを紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div key={index} variants={item} className="glass p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {work.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                {work.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {work.demo && (
                    <a href={work.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                  {work.github && (
                    <a href={work.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Source code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
