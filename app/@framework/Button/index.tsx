import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./fwButton.module.css";

type TypeProps = {
  type?: "button" | "submit";
  title?: any;
  icon?: any;
  size?: "fs" | "lg" | "md" | "sm" | "xs" | "auto";
  /*Định nghĩa các size
    fs: width 100%, không có kích thước cố định
    lg: width 180px
    md: width 150px
    sm: width 120px
    xs: width 100px
    auto: width sẽ có độ rộng vừa đủ bao bọc các phần tử và tự resize cho phù hợp với kích thước màn hình


    */
  gap?: Number;
  theme?: "primary" | "lily" | "cancel";
  /*Định nghĩa các theme
    primary: Đây là màu chính của button, cũng là màu chủ đạo của web 
    lily: Màu trắng
    cancel: Màu đỏ


    */
  ouline?: "primary" | "cancel";
  onClick?: Function;
  style?: CSSProperties;
  className?: any;
  id?: any;
  padding?: Number;
  animation?: Boolean; //Hiệu ứng màu button chuyển động sang trái khi hover vào
  disable?: true | false;
  radius?: Number;
};

const Button = ({
  type = "button",
  title,
  icon,
  size,
  gap = 5,
  theme,
  ouline,
  onClick,
  style,
  className,
  id,
  padding = 6,
  animation = true,
  disable = false,
  radius = 4,
}: TypeProps) => {
  const ref = useRef<any>();

  const [animationSize, setAnimationSize] = useState({
    top: 0,
    left: 0,
  });

  const [animationOpen, setAnimationOpen] = useState(false);

  const getSize = (value: any) => {
    return value ? styles[value] : styles["auto"];
  };
  const getTheme = (value: any) => {
    return value ? styles[value] : styles["primary"];
  };
  const getStyle = (value: any) => {
    return value
      ? {
          ...value,
          gap: `${gap}px`,
          borderRadius: `${radius}px`,
          padding: `0px ${padding}px`,
        }
      : {
          gap: `${gap}px`,
          borderRadius: `${radius}px`,
          padding: `0px ${padding}px`,
        };
  };

  const onClicks = (e: any) => {
    if (disable) return;
    let { left, top } = ref.current.getBoundingClientRect();
    setAnimationSize({
      top: e.clientY - top,
      left: e.clientX - left,
    });
    setAnimationOpen(true);
  };

  useEffect(() => {
    if (animationOpen) {
      const target = setTimeout(() => {
        setAnimationOpen(false);
      }, 600);
      //   return clearTimeout(target);
    }
  }, [animationOpen]);
  return (
    <button
      className={`${styles.button} ${getSize(size)} ${getTheme(theme)}  ${
        className ? className : ""
      } ${disable ? "cusor-d" : "cusor-p"}`}
      style={getStyle(style)}
      ref={ref}
      onClick={onClicks}
      type={type}
      disabled={disable}
    >
      {animationOpen && animation ? (
        <div
          style={{
            top: `${animationSize.top}px`,
            left: `${animationSize.left}px`,
          }}
          className={styles["ripple"]}
        ></div>
      ) : (
        ""
      )}
      {icon && <div>{icon}</div>}
      {title && <div>{title}</div>}
    </button>
  );
};

export default Button;
