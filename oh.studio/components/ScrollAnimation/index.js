"use client";

import { InView } from 'react-intersection-observer';
import { useState } from 'react';

export default function ScrollAnimation({ children, className}) {
	const [visible, setVisible] = useState(false);

	return (
		<InView as="section" triggerOnce
			className={`${className} duration-1000 ${ visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24' }`}
			onChange={(inView) => inView && setVisible(true)}
		>
			{children}
		</InView>
	)
}
