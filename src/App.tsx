import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Title>안녕</Title>
    </Container>
  );
}

const Container = styled.div`
  background-color: yellowgreen;
`;

const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.primary};
`;

export default App;
