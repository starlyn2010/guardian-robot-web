import './globals.css';

export const metadata = {
  title: 'El Bot Guardian | Robot de Vigilancia con IA',
  description: 'La historia del Bot Guardian: un robot de vigilancia con inteligencia artificial, control Bluetooth y código abierto. Errores, soluciones y descarga del APK.',
  openGraph: {
    title: 'El Bot Guardian',
    description: 'Robot de vigilancia con IA, Bluetooth y código abierto',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="grid-bg">{children}</body>
    </html>
  );
}
