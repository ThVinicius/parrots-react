import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eef9bf;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 56px;
    font-weight: 700;
    color: #75b79e;
    margin: 40px 0;
    text-align: center;
  }
`
const Content = styled.div`
  max-width: 1029px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export { Container, Content }
