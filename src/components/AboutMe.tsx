"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-white">Profile</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              関西出身のエンジニア。大学、大学院で情報工学を学んだのち、メーカーでWebアプリケーションの開発・運用・テクニカルサポートに従事。現在はフロントエンド開発、CDNやAWSクラウド構築などのインフラ開発まで幅広く経験しています。
              常に新しい技術を学び続け、モダンでリッチなWebアプリケーションの開発に情熱を注いでいます。
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/terappy" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-blue-500">
                <Github className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border-l-4 border-l-blue-500">
              <h4 className="text-lg font-medium text-white mb-2">My Philosophy</h4>
              <p className="text-slate-400">
                技術は目的を達成するための手段であり、ユーザーにとって価値のある体験を生み出すことを常に第一に考えます。<br />ユーザーが喜ぶ顔を見るのが何よりのやりがいです！
              </p>
            </div>

            <div className="glass p-6 rounded-xl border-l-4 border-l-purple-500">
              <h4 className="text-lg font-medium text-white mb-2">Focus Areas</h4>
              <ul className="list-none space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Modern Frontend (React/Next.js)</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Cloud Infrastructure (AWS, GCP)</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> CDN (CloudFront, Faslty, Akamai)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
