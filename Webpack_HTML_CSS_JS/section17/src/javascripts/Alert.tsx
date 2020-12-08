import * as React from "react";
// ①styled-componentsをインポート
import styled from "styled-components";

// ②スタイルの設定
const AlertConteiner = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    // ③スタイルの適用
    <AlertConteiner>{message}</AlertConteiner>
  );
};

export default Alert;
