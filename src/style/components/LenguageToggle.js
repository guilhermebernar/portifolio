import styled from 'styled-components';

export const ToggleContainer = styled.div`
  width: 60px;
  height: 20px;
  border-radius: 25px;
  background-image: url(${props => props.language === 'pt' ? '/br-flag.png' : '/us-flag.png'});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  margin: 3rem auto -1rem 5.64rem;
  @media (max-width: 767px) {
    margin: 3rem auto 1rem auto;
  }
`;

export const ToggleBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 5px;
  left: ${props => props.language === 'pt' ? '5px' : '45px'};
  transition: left 0.3s ease;
`;