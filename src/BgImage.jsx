import React from 'react';
import { useState, useEffect } from 'react';

export const BgImage = ({ placeholderSrc, src, width = '100%', ...props }) => {
	const [imgSrc, setImageSrc] = useState(placeholderSrc || src);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImageSrc(src);
		};
	}, [src]);

	const classes = `progressive ${
		imgSrc === placeholderSrc ? 'loading' : 'loaded'
	}`;

	return (
		<div className="img-wrapper">
			<img
				className={classes}
				src={imgSrc}
				alt={props.alt || ''}
				width={width}
				{...props}
			/>
		</div>
	);
};
