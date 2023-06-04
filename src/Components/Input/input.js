import { forwardRef } from 'react';

import * as S from './input.style';

const Input = forwardRef(
	({ variant, shape, status = 'default', ...rest }, ref) => {
		return (
			<S.Input
				variant={variant}
				shape={shape}
				status="default"
				{...rest}
				ref={ref}
			/>
		);
	},
);
export default Input;
