// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { lusitana } from './ui/fonts';
import Image from 'next/image';
import ArrayRotate from '../ui/dashboard/ArrayRotate';

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<div className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
						<strong>Ingrese una matriz NxN</strong> Por ejemplo <p className="text-blue-500">[[1,2],[3,4]]</p>y se
						devolvera rotado en sentido antihorario. Primero debe validar si el arreglo es bidimensional y correcto ,
						sino el boton INVERTIR seguira disabled
					</div>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					<ArrayRotate />
				</div>
			</div>
		</main>
	);
}
