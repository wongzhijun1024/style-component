import styled from "styled-components";

export const AddBtn = styled.button`
  height: 30px;
  width: 80px;
  :hover {
    color: red;
    background: blue;
    border: none;
  }
`;
export const SubBtn = styled(AddBtn)`
  //继承AddBtn的部分属性
  background: ${(props) =>
    props.primary ? "red" : ""}; //使用props传值进行判断
`;
