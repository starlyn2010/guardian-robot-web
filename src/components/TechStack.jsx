'use client';

import { motion } from 'framer-motion';
import { Cpu, Smartphone, Bluetooth, Brain, GitBranch, Wifi } from 'lucide-react';

const techs = [
  {
    icon: Smartphone,
    name: 'Android',
    desc: 'Kotlin + CameraX',
    detail: 'App nativa con detección en tiempo real',
    color: 'text-green-400',
  },
  {
    icon: Brain,
    name: 'TensorFlow Lite',
    desc: 'EfficientDet-Lite0',
    detail: 'Modelo COCO 80 clases, 384×384',
    color: 'text-orange-400',
  },
  {
    icon: Cpu,
    name: 'Arduino Uno',
    desc: 'KeyBot Keystudio',
    detail: 'Motores L298N, sensores de línea',
    color: 'text-cyan-400',
  },
  {
    icon: Bluetooth,
    name: 'HC-06',
    desc: 'Módulo Bluetooth',
    detail: 'UART, 9600 baud, sin pairing',
    color: 'text-blue-400',
  },
  {
    icon: GitBranch,
    name: 'GitHub Actions',
    desc: 'CI/CD Automático',
    detail: 'Build APK en cada push',
    color: 'text-purple-400',
  },
  {
    icon: Wifi,
    name: 'HC-SR04',
    desc: 'Sensor Ultrasónico',
    detail: 'Detección de obstáculos',
    color: 'text-yellow-400',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyber-green font-mono text-sm tracking-widest">/ tech-stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Tecnologías</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hardware y software que hacen funcionar al Bot Guardian.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="glass glass-hover rounded-2xl p-6 text-center group"
            >
              <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${tech.color} bg-white/5 group-hover:bg-white/10 transition-colors`}>
                <tech.icon size={22} />
              </div>
              <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-500 font-mono">{tech.desc}</p>
              <p className="text-xs text-gray-600 mt-1 hidden group-hover:block transition-all">{tech.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 glass rounded-2xl p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-lg font-bold mb-4">Diagrama de Conexión</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm font-mono">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center">
                <Smartphone size={28} className="text-green-400" />
              </div>
              <span className="text-green-400">App Android</span>
              <span className="text-gray-600">CameraX + TFLite</span>
            </div>
            <div className="text-gray-600 text-2xl">⟷</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                <Bluetooth size={28} className="text-blue-400" />
              </div>
              <span className="text-blue-400">Bluetooth HC-06</span>
              <span className="text-gray-600">9600 baud</span>
            </div>
            <div className="text-gray-600 text-2xl">⟷</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center">
                <Cpu size={28} className="text-cyan-400" />
              </div>
              <span className="text-cyan-400">Arduino Uno</span>
              <span className="text-gray-600">KeyBot Keystudio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
