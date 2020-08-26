import styled from "styled-components";
export const Carousel = styled.div`
  height: 200px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 190px;
  height: 190px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 70%;
  background-image: url(${(props) => {
    return props.url;
  }});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  margin-top: 10px;
  span {
    background-color: ${(props) => {
      return props.type === 0 ? "" : props.type === 1 ? "blue" : "red";
    }};
    border-radius: 3px;
    color: white;
    font-size: 1px;
    margin-right: 4px;
  }
  width: 80%;
  color: #666697;
  font-size: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Price = styled.div`
  margin-top: 5px;
  width: 80%;
  font-size: 12px;
  color: #e1251b;
  font-weight: bold;
`;
