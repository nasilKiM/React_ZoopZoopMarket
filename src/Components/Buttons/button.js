import * as S from './style';
 
function CustomButton(props) {
    const {variant, shape, size, children, ...rest} = props;
    return (
        <S.PropsBtn variant={variant} shape={shape} size={size} {...rest}>{children}</S.PropsBtn>
    );
}

export default CustomButton;