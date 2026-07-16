'use client';

import { motion } from 'framer-motion';
import { Cpu, Smartphone, Bluetooth, Bug } from 'lucide-react';

const steps = [
  {
    icon: Cpu,
    title: 'El Hardware',
    desc: 'Todo empezó con un KeyBot Keystudio: un chasis de robot, un Arduino Uno, sensores de línea, un módulo Bluetooth HC-06 y una matriz LED. El objetivo era simple: que el robot evitara líneas negras y respondiera a comandos.',
    color: 'text-cyber-green',
  },
  {
    icon: Bluetooth,
    title: 'La Conexión',
    desc: 'La app Android se comunicaría con el robot por Bluetooth. En teoría, simple. En práctica, el HC-06 no se conectaba, el socket fallaba, y la cámara nunca se iniciaba. Cada error fue una lección.',
    color: 'text-cyber-yellow',
  },
  {
    icon: Smartphone,
    title: 'La App',
    desc: 'Una app Android con CameraX y TensorFlow Lite para detectar personas y animales. 6 builds, 33 errores documentados, desde "insecure socket" hasta "zone hysteresis". Cada fix mejoraba el sistema.',
    color: 'text-cyber-green',
  },
  {
    icon: Bug,
    title: '33 Errores Después',
    desc: 'El resultado no es perfecto, pero funciona. El Bot Guardian patrulla, detecta intrusos, sigue líneas y responde por Bluetooth. Y lo más importante: documentamos cada fallo para que otros no tropiecen con la misma piedra.',
    color: 'text-cyber-red',
  },
];

export default function Viaje() {
  return (
    <section id="viaje" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyber-green font-mono text-sm tracking-widest">/ el-viaje</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">De una idea a un robot funcional</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Esto no es solo un robot. Es la historia de cómo transformamos errores en soluciones,
            línea por línea, build por build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-8 glow-border"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${step.color}`}>
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
