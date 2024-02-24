import React from "react";
import styled from "@emotion/styled";
import { BsTwitterX } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GrNotification } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { PiDotsThreeCircle } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import Login from "../Login";
import Link from "next/link";

function MenuPane() {
  const menu = [
    {
      icon: <MdHomeFilled />,
      label: "Home",
      link: "/",
    },
    {
      icon: <IoSearchOutline />,
      label: "Explore",
    },
    {
      icon: <GrNotification />,
      label: "Notifications",
    },
    {
      icon: <FaRegEnvelope />,
      label: "Messages",
    },
    {
      icon: <RiFileList2Line />,
      label: "Lists",
    },
    {
      icon: <FaRegBookmark />,
      label: "Bookmarks",
    },
    {
      icon: <BsTwitterX />,
      label: "Premium",
    },
    {
      icon: <AiOutlineUser />,
      label: "Profile",
      link: "/profile",
    },
    {
      icon: <PiDotsThreeCircle />,
      label: "More",
    },
  ];
  const Styled = styled.div`
    width: 275px;
    font-size: 27px;
    padding: 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media (max-width: 768px) {
      width: fit-content;
      .menu-label {
        display: none;
      }
    }
    .brand-name {
      margin: 2px 0px;
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      .nav-menu-items {
        a {
          width: fit-content;
          font-size: 20px;
          padding: 12px;
          font-weight: 400;
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 99px;
        }
        .prefix-icon {
          display: contents;
          font-size: 28px;
          line-height: 26px;
        }
        .menu-label {
          margin: 0px 20px;
        }
        :hover {
          background-color: rgb(231, 233, 234, 0.1);
        }
      }
    }
    .post-btn {
      background-color: #1da1f2;
      color: white;
      padding: 15px 32px;
      line-height: 20px;
      border-radius: 99px;
      text-align: center;
      cursor: pointer;
      width: 233px;
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0px;
      @media (max-width: 768px) {
        width: fit-content;
        padding: 12px;
      }
    }
    .user-badge {
      cursor: pointer;
      position: absolute;
      bottom: 0px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8px 12px;
      gap: 8px;
      font-size: 15px;
      line-height: 20px;
      color: #fff;
      border-radius: 99px;
      width: 233px;
      @media (max-width: 768px) {
        width: fit-content;
        padding: 12px;
      }
      :hover {
        background-color: rgb(231, 233, 234, 0.1);
      }
      .user-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .login-container {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
  `;
  const { user } = useCurrentUser();
  return (
    <Styled className="pane left-pane">
      <div className="brand-name">
        <BsTwitterX />
      </div>
      <div className="nav-menu">
        {menu.map((item, index) => (
          <div className="nav-menu-items" key={index}>
            <Link href={item.link ?? ""}>
              <div className="prefix-icon">{item.icon}</div>
              <div className="menu-label">{item.label}</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="post-btn">Post</div>
      <div className="login-container">
        <Login />
      </div>
      {user && (
        <div className="user-badge">
          <div className="user-avatar">
            <Image
              src={user?.profileImageUrl}
              alt={user?.firstName}
              width={50}
              height={50}
            />
          </div>
          <div className="user-info">
            <div className="user-name">
              {user.firstName} {user?.lastName ?? ""}
            </div>
          </div>
        </div>
      )}
    </Styled>
  );
}

export default MenuPane;
