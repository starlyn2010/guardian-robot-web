'use client';

import { Heart, ExternalLink } from 'lucide-react';

function GithubIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-text">El Bot Guardian</h3>
            <p className="text-gray-500 text-sm mt-1">Vigilancia inteligente con IA</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/starlyn2010/guardian-robot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <GithubIcon size={16} />
              App Android
              <ExternalLink size={12} className="opacity-50" />
            </a>
            <a
              href="https://github.com/starlyn2010/guardian-robot-web"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <GithubIcon size={16} />
              Web
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs font-mono">
            Hecho con{' '}
            <span className="text-cyber-red inline-block">
              <Heart size={10} className="inline" />
            </span>{' '}
            y 33 errores • Código Abierto •{' '}
            <a
              href="https://github.com/starlyn2010/guardian-robot-web/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              MIT License
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
