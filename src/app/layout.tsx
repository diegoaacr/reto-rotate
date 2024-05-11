import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Reto APP Diego',
	description: 'Esto es un reto creado por Diego',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer style={{ textAlign: 'center' }}>Hecho por Diego Cueva</footer>
			</body>
		</html>
	);
}
