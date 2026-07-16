'use client';

import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Bluetooth, Camera, FileJson, ShieldCheck, ExternalLink } from 'lucide-react';

const requirements = [
  { icon: Smartphone, text: 'Android 8.0 (Oreo) o superior' },
  { icon: Bluetooth, text: 'Bluetooth 4.0+ (HC-06 compatible)' },
  { icon: Camera, text: 'Cámara trasera funcional' },
  { icon: FileJson, text: 'Permiso de ubicación (BT Scan)' },
];

export default function Download() {
  return (
    <section id="download" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-green font-mono text-sm tracking-widest">/ descargar</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Descarga el APK</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            La versión actual del Bot Guardian. Compilado automáticamente desde GitHub Actions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-green/10 text-cyber-green text-xs font-mono mb-8">
            <ShieldCheck size={12} />
            <span>Build #31 — Estable</span>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-black gradient-text">v1.0</span>
            <p className="text-gray-500 text-sm mt-2 font-mono">guardian-robot-debug.apk</p>
            <p className="text-gray-600 text-xs mt-1">~19.9 MB</p>
          </div>

          <a
            href="/guardian-robot.apk"
            download
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-cyber-green text-black font-bold rounded-2xl text-lg transition-all hover:shadow-[0_0_60px_rgba(0,255,65,0.3)] hover:scale-105 mb-8"
          >
            <DownloadIcon size={22} />
            Descargar APK
            <ExternalLink size={16} className="opacity-50" />
            <span className="absolute inset-0 rounded-2xl bg-cyber-green/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="text-left">
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Requisitos:</h4>
            <ul className="space-y-2">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <req.icon size={14} className="text-cyber-green flex-shrink-0" />
                  {req.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-xs text-gray-600 font-mono">
              APK compilado desde{' '}
              <a
                href="https://github.com/starlyn2010/guardian-robot/actions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-green hover:underline"
              >
                GitHub Actions
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
