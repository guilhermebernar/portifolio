import styled from 'styled-components';

export const ToggleContainer = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const ToggleBall = styled.div`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.language === 'pt' ? '4px' : 'calc(100% - 22px)'};
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
