import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 200 }} spin />;
function Loading() {
  return <Spin indicator={antIcon} />;
}

export default Loading;
