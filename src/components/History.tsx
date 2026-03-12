"use client";

import { motion } from "framer-motion";

const historyData = [
  {
    year: "2017年 7月 ~ 9月",
    title: "ベトナムの海外インターンに参加",
    description: "大学院のプログラムで3ヶ月ベトナムのホーチミンに滞在し、Web開発を行う。初めての本格的な開発でWeb開発の面白さに触れる",
  },
  {
    year: "2018年 2月",
    title: "Webアプリケーション開発のインターンに参加",
    description: "Webアプリケーション開発のインターンに参加。その後縁があってこの会社へ入社することになる",
  },
  {
    year: "2019年 4月 ~ 現在",
    title: "社会人スタート",
    description: "Webアプリケーションの開発・運用・テクニカルサポートに従事。",
  },
];

export default function History() {
  return (
    <section id="history" className="py-24 px-4 relative z-10 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">History</h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
          {historyData.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-lg border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-blue-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
