import styled, { keyframes } from 'styled-components';

const TransformConveyorBelt = () => {
  const StyledTrasnformConveyorContainer = styled.div`
    width: 300px;
    height: 50px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px;
  `
  const moveBelt = keyframes`
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-32px);
    }
  `
  const StyledTrasnformConveyorBelt = styled.div`
    position: absolute;
    width: calc(300px + 100px);
    height: 100%;
    background: repeating-linear-gradient(90deg,
        #777 0px,
        #777 30px,
        #444 30px,
        #444 32px);
    animation: ${moveBelt} 1s linear infinite;
  `

  return (
    <StyledTrasnformConveyorContainer>
        <StyledTrasnformConveyorBelt />
    </StyledTrasnformConveyorContainer>

  )
}

const BgPositionConveyorBelt = () => {
  const StyledConveyorContainer = styled.div`
    position: relative;
    width: 300px;
    height: 50px;
    background: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
  `;

  const linearMove = keyframes`
    from {
      background-position: 0 0;
    }
    to {
      background-position: -40px 0;
    }
  `

  const StyledConveyorBelt = styled.div`
    position: relative;
    width: 400px;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      #444 0px,
      #444 20px,
      #666 20px,
      #666 40px
    );
    animation: ${linearMove} 1s linear infinite;
  `

  return (
    <StyledConveyorContainer>
      <StyledConveyorBelt />
    </StyledConveyorContainer>
  )
}

export { TransformConveyorBelt, BgPositionConveyorBelt }
