import styled from 'styled-components'

const Container = styled.div`
  width: 117px;
  margin-right: 30px;
  margin-bottom: 34px;
  height: 146px;
  transition: all 0.5s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${props => props.flip};

  img {
    width: 100px;
    height: 100px;
  }
`

const Face = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a7e9af;
  border: 1px solid #99cea8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  backface-visibility: hidden;
`
const BackFace = styled(Face)`
  transform: rotateY(180deg);
`

export { Container, Face, BackFace }
