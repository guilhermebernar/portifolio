import styled from 'styled-components';

export const ToggleContainer = styled.button`
  width: 60px;
  height: 24px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #111111;
  line-height: 0;
`;

export const ToggleFlag = styled.img`
  display: block;
  width: 60px;
  height: 24px;
  max-width: 60px;
  min-width: 60px;
  object-fit: cover;
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
