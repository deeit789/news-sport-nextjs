import { ImgIconVietNam, ImgLogo } from "@image";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import React from "react";

const DrawerMenu = ({ onClose, visible, styles }) => {
  return (
    <Drawer
      title={
        <div className={styles["menu-mobile-Drawer"]}>
          <Image src={ImgIconVietNam} />
          <div className={styles.login}>Đăng nhập</div>
          <Image className={styles.img_da} src={ImgLogo} />
        </div>
      }
      placement={"right"}
      width={"100%"}
      height={"100%"}
      onClose={onClose}
      visible={visible}
    >
      <Menu>
        <Menu.Item>Lịch thi đấu</Menu.Item>
        <Menu.Item>Bóng đá</Menu.Item>
        <Menu.Item>Nhận định bóng đá</Menu.Item>
        <Menu.Item>Hậu trường</Menu.Item>
        <Menu.Item>Chuyển nhượng</Menu.Item>
        <Menu.Item>Video</Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default DrawerMenu;
