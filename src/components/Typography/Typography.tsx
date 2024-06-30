/* eslint-disable react-refresh/only-export-components */
import * as Styles from './Typography.styles';

export type TypoTypes = 'HEADING1' | 'HEADING2' | 'HEADING3' | 'HEADING4';

type typoStyle = {
  fontSize: string;
  fontWeight: string;
};

export const TYPO_STYLES: Record<TypoTypes, typoStyle> = {
  HEADING1: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  HEADING2: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  HEADING3: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  HEADING4: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export interface Props {
  type: TypoTypes;
  children: string;
}

function Typography({ type, children }: Props) {
  return <Styles.Typography type={type}>{children}</Styles.Typography>;
}

export default Typography;

/**
 *
 * type을 스트링으로 하지말고 type값으로 정해준다 => 객체로 => enum as const(type)
 *
 * 1. 상위 컴포넌트에서 넘겨줄 interface 정의 (type,children)
 * 2. 타입에 따른 스타일 정의 (스타일드 컴포넌트로 prop)
 */

/*
    Heading 1	Heavy	24
Heading 2	Bold	17
Heading 3	Bold	14
Heading 4	Regular	13
Title 1	Bold	23
Title 2	SemiBold, Bold	19
Title 3	Medium, Semibold	16
Title 4	Mdeium, Semibold	15
Title 5	Medium, Semibold	14
Body 1	Regular	16
Body 2	Regular	14
Body 3	Regular	13
Body 4	Regular	12

*/
