'use client';

import { motion } from 'framer-motion';
import { Bluetooth, Brain, Cpu, Smartphone, GitBranch, Shield, Activity } from 'lucide-react';

const soluciones = [
  {
    icon: Bluetooth,
    title: 'Conexión Bluetooth Robusta',
    desc: 'Doble fallback: socket inseguro si createRfcommSocket falla Y si connect() falla. El HC-06 se conecta siempre.',
    tags: ['BluetoothChatService.kt', 'UUID estándar'],
  },
  {
    icon: Brain,
    title: 'Detección con IA Optimizada',
    desc: 'EfficientDet-Lite0 con threshold 0.3. Clases 0 (persona) + 1-24. Detección en tiempo real con CameraX.',
    tags: ['TensorFlow Lite', 'CameraX', 'COCO'],
  },
  {
    icon: Activity,
    title: 'Zonas con Histéresis',
    desc: 'Las zonas (verde/amarillo/rojo) ahora tienen thresholds de entrada/salida diferentes + 3 frames de debounce para evitar parpadeo.',
    tags: ['0.08/0.03', '0.20/0.15', '3-frame'],
  },
  {
    icon: Cpu,
    title: 'Código Arduino sin Bloqueos',
    desc: 'Eliminados todos los delay(). Sistema de máquina de estados con millis() para line-following. Melodía reemplazada por tone() no bloqueante.',
    tags: ['millis()', 'Estado finito', 'no-block'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD con GitHub Actions',
    desc: 'Cada push a main compila el APK automáticamente. Builds disponibles como artifact. Descarga por nightly.link.',
    tags: ['GitHub Actions', 'automático', 'APK'],
  },
  {
    icon: Shield,
    title: 'App Android Completa',
    desc: 'Interfaz con overlay de detección, log de intrusiones, indicador de zona, conexión BT y control del robot.',
    tags: ['Kotlin', 'Material Design', 'cámara'],
  },
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyber-green font-mono text-sm tracking-widest">/ soluciones</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">De Error a Solución</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada problema tuvo una solución. Algunas fueron obvias, otras requirieron builds enteros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soluciones.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-cyber-green/10 flex items-center justify-center text-cyber-green mb-4">
                <sol.icon size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">{sol.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{sol.desc}</p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
