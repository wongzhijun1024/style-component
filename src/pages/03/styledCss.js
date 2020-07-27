import styled from "styled-components";

export const Search = styled.input.attrs({ placeholder: "请输入内容" })`
  height: 40px;
  width: 180px;
  border-radius: 5px;
  &.flag {
    //和组件同名的类名，应用于className为flag的Search组件
    padding-left: 30px;
  }
`;
