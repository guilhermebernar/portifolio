import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;

  h1{
    font-size: 20px;
    background-image: linear-gradient(120deg, rgba(119, 129, 255, 0.68), rgba(223, 119, 255, 0.68));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: block;
  }

  h2{
    font-size: 13px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 0 2rem 0;

    padding: 0 0 1rem 1rem;
    h1{
    font-size: 24px;
    }
    h2{
    font-size: 16px;
    margin-bottom: 20px;
    }
  }
`;

export const ProfileImageContainer = styled.div`
  width: 100%;
  max-width: 220px;
  margin: 2rem 3rem 2rem 0;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const ProfileText = styled.div`
  display: flex !important;
  flex-direction: column;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.64);
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  

  @media (max-width: 767px) {

    text-align: center;
    width: 100%;
    margin-top: 2rem;
  }
`;