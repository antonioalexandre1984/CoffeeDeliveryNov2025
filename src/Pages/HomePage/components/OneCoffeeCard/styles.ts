import styled from "styled-components";
import { RegularText } from "../../../../components/Typography";

export const OneCoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -4.25rem;
  }
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  span {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
  }
`;

export const Description = styled(RegularText)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OneCoffeeCardFooter = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const ButtonAddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-purple-dark"]};
  cursor: pointer;
  z-index: 10;
  position: relative;
  `;
