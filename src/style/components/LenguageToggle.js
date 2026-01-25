import styled from 'styled-components';

export const ToggleContainer = styled.div`
  width: 64px;
  height: 28px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(20, 20, 25, 1) 0%,
    rgba(40, 40, 50, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(119, 129, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(119, 129, 255, 0.4);
    box-shadow: 0 2px 12px rgba(119, 129, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
`;

export const ToggleBall = styled.div`
  width: 22px;
  height: 22px;
  background: linear-gradient(
    135deg,
    #7781ff 0%,
    #a78bfa 100%
  );
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(119, 129, 255, 0.4);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.language === 'pt' ? '4px' : 'calc(100% - 26px)'};
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ToggleLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
  transition: color 0.3s ease;

  &:first-child {
    margin-left: 6px;
    color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  }

  &:last-child {
    margin-right: 6px;
    color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  }
`;
