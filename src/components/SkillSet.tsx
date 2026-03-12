"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript / TypeScript", level: 75 },
      { name: "React / Next.js", level: 75 }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 65 },
      { name: "MySQL", level: 85 }
    ],
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "AWS (ECS, CloudFront, ALB, RDS)", level: 85 },
      { name: "GCP (Big Query)", level: 70 },
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Fastly / Akamai", level: 90 },
      { name: "CI/CD (GitHub Actions, AWS, Terraform)", level: 75 },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude Code", level: 85 },
      { name: "Gemini / Antigravity", level: 70 },
      { name: "Kiro", level: 60 }
    ],
  },
];

export default function SkillSet() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-gradient">Skill Set</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          身につけたスキルをグラフィカルにまとめました。<br />フロントエンドからバックエンド・インフラまで幅広く対応可能です。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="glass p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-slate-700 pb-2">
                {skillGroup.category}
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
