import { css, styled } from 'styled-components';
import { Props, TYPO_STYLES } from './Typography';

// eslint-disable-next-line react-refresh/only-export-components

const typoStyle = css<Props>`
  ${({ type }) => css`
    font-size: ${TYPO_STYLES[type].fontSize};
    font-weight: ${TYPO_STYLES[type].fontWeight};
  `}
`;

export const Typography = styled.p<Props>`
  ${(props) => props.type && typoStyle}
`;
