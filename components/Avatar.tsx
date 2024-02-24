import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
function Avatar({ url, size }: { url: string; size: number }) {
  const Styled = styled.div`
    .avatar {
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      margin-right: 8px;
    }
  `;
  return (
    <Styled>
      <Image
        className="avatar"
        src={url}
        alt="avatar"
        width={size}
        height={size}
      />
    </Styled>
  );
}

export default Avatar;
