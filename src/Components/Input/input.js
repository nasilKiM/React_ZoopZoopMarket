import * as S from './input.style';
import { forwardRef } from 'react';

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
