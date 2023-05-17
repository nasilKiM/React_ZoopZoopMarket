import * as S from './style';
 
function CustomButton(props) {
    const {variant, shape, size, children, ...rest} = props; // ...rest => "나머지 매게변수" props에 없는 style이 이 ...rest에 포함됨.
    return (
        <S.PropsBtn variant={variant} shape={shape} size={size} {...rest}>{children}</S.PropsBtn>
    );
}

export default CustomButton;