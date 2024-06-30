import Typography from '../Typography/Typography';
import Header from './Header/Header';
import * as Styles from './Layout.styles';

const TEST_TEXT = '타이포 컴포넌트 테스트';

function Layout() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <Typography children={TEST_TEXT} type="HEADING2" />
      </Styles.Content>
    </Styles.Container>
  );
}

export default Layout;
