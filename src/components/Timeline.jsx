'use client';

import { motion } from 'framer-motion';
import { WifiOff, Camera, AlertTriangle, Activity, Music, Move, CheckCircle } from 'lucide-react';

const errors = [
  {
    code: 'E001',
    name: 'Bluetooth no conecta',
    problem: 'El HC-06 no establecía conexión. El socket RFCOMM fallaba silenciosamente.',
    solution: 'Fallback a socket inseguro cuando connect() lanza excepción.',
    icon: WifiOff,
    color: 'text-cyber-red',
    bgColor: 'bg-red-500/10',
    build: '#28',
  },
  {
    code: 'E013',
    name: 'La cámara no se inicia',
    problem: 'Tras conectar Bluetooth, la cámara nunca arrancaba. El estado STATE_CONNECTED no se emitía.',
    solution: 'connected() ahora envía MESSAGE_STATE_CHANGE correctamente.',
    icon: Camera,
    color: 'text-cyber-red',
    bgColor: 'bg-red-500/10',
    build: '#29',
  },
  {
    code: 'E024',
    name: 'Falsos positivos',
    problem: 'El modelo TFLite detectaba intrusos donde no los había. El threshold era muy alto o las clases incorrectas.',
    solution: 'Threshold bajado de 0.6 a 0.3, clase 0 añadida a INTRUDER_CLASSES.',
    icon: AlertTriangle,
    color: 'text-cyber-yellow',
    bgColor: 'bg-yellow-500/10',
    build: '#30',
  },
  {
    code: 'E029',
    name: 'Zonas inestables',
    problem: 'Las zonas de detección (verde/amarillo/rojo) cambiaban constantemente sin motivo.',
    solution: 'Histéresis con thresholds: 0.08/0.03 para amarillo, 0.20/0.15 para rojo + 3 frames de debounce.',
    icon: Activity,
    color: 'text-cyber-yellow',
    bgColor: 'bg-yellow-500/10',
    build: '#31',
  },
  {
    code: 'E033',
    name: 'Melodía bloqueante',
    problem: 'TimerFreeToneRtttl reproducía "Mission Impossible" durante 5-10 segundos, bloqueando sensores y BT.',
    solution: 'Reemplazado por tone() no bloqueante con millis().',
    icon: Music,
    color: 'text-cyber-red',
    bgColor: 'bg-red-500/10',
    build: '#32',
  },
  {
    code: 'E0xx',
    name: 'Sigue-líneas con delay',
    problem: 'delay(2000) y delay(1000) en la lógica de line-following congelaban el loop completo.',
    solution: 'Migración a máquina de estados con millis(). Sigue-líneas siempre activo.',
    icon: Move,
    color: 'text-cyber-yellow',
    bgColor: 'bg-yellow-500/10',
    build: '#33',
  },
];

export default function Timeline() {
  return (
    <section id="errores" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyber-red font-mono text-sm tracking-widest">/ errores</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-glow-red">
            Cronología del Caos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada error fue una oportunidad para aprender. Estos son los más memorables.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-green via-cyber-yellow to-cyber-red md:-translate-x-px" />

          {errors.map((error, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start'}`}>
                <div className="max-w-md">
                  <span className={`font-mono text-sm ${error.color}`}>{error.code}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{error.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{error.problem}</p>
                </div>
              </div>

              <div className="relative z-10 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full ${error.bgColor} border-2 border-cyber-dark flex items-center justify-center ${error.color}`}>
                  <error.icon size={18} />
                </div>
              </div>

              <div className={`flex-1 md:hidden`}>
                <span className={`font-mono text-sm ${error.color}`}>{error.code}</span>
                <h3 className="text-lg font-bold mt-1 mb-1">{error.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{error.problem}</p>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-cyber-green mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{error.solution}</p>
                  </div>
                  <span className="inline-block mt-2 text-xs font-mono text-cyber-green/60">Build {error.build}</span>
                </div>
              </div>

              <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-start' : 'justify-end text-left'}`}>
                <div className="max-w-md">
                  <div className="glass rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-cyber-green mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{error.solution}</p>
                    </div>
                    <span className="inline-block mt-2 text-xs font-mono text-cyber-green/60">Build {error.build}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-xl mx-auto">
            <span className="text-4xl font-mono font-bold gradient-text">33</span>
            <p className="text-gray-400 mt-2">errores documentados y contando</p>
            <p className="text-xs text-gray-500 mt-2 font-mono">desde E001 hasta E033</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
