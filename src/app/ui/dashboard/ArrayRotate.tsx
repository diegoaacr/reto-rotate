'use client';
import { useState } from 'react';
import {
	flattenTwoDimensionalArray,
	formatArray,
	rotateArraySchedule,
	validateArrayBidimensional,
	validateInputNumber,
} from '../../lib/utils';

export default function ArrayRotate() {
	const [inputUserArrBidimensional, setInputUserArrBidimensional] = useState([]);

	const [arrBidimensionalRotated, setArrBidimensionalRotated] = useState([]);

	const [isValidateArray, setIsValidateArray] = useState(true);
	const [valueUser, setValueUser] = useState('');

	const handleRotate = (e) => {
		setInputUserArrBidimensional(JSON.parse(valueUser));
		setArrBidimensionalRotated(JSON.parse(valueUser));
	};

	const handleValidateArrayBidimensional = (e) => {
		const value = JSON.parse(valueUser);
		const isBidimensional = validateArrayBidimensional(value);

		if (isBidimensional) {
			setIsValidateArray(false);
		} else {
			setIsValidateArray(true);
		}
	};

	return (
		<section>
			<div>RETO DC</div>
			<div>
				<input
					style={{ padding: '1rem', marginBottom: '3rem', color: 'black' }}
					onChange={(e) => setValueUser(e.target.value)}
					type="text"
					placeholder="Ingrese un array N x N "
				/>
				<button
					style={{ padding: '.5rem 2rem', backgroundColor: 'white', color: 'black' }}
					onClick={handleValidateArrayBidimensional}
				>
					Validar Arreglo Bidimensional
				</button>
			</div>

			<div
				style={{
					display: 'grid',
					textAlign: 'center',
					gridTemplateColumns: `repeat(${inputUserArrBidimensional.length && inputUserArrBidimensional[0].length},1fr)`,
				}}
			>
				{flattenTwoDimensionalArray(inputUserArrBidimensional).map((el) => (
					<p style={{ border: '1px solid white', padding: '1rem' }} key={el}>
						{el}
					</p>
				))}
			</div>

			<div style={{ margin: '1rem' }}></div>

			<div
				style={{
					display: 'grid',
					textAlign: 'center',
					gridTemplateColumns: `repeat(${inputUserArrBidimensional.length && inputUserArrBidimensional[0].length},1fr)`,
				}}
			>
				{flattenTwoDimensionalArray(rotateArraySchedule(arrBidimensionalRotated)).map((el) => (
					<p style={{ border: '1px solid white', padding: '1rem' }} key={el}>
						{el}
					</p>
				))}
			</div>

			<div style={{ margin: '1rem' }}></div>

			<button
				disabled={isValidateArray}
				style={{ padding: '.5rem 2rem', backgroundColor: 'gray' }}
				type="button"
				onClick={handleRotate}
			>
				INVERTIR
			</button>
		</section>
	);
}
