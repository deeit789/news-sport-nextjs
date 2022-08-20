import React from "react";
import { Row, Col, Divider } from "antd";
import Link from "next/link";
import styles from "./tin-xem-nhieu.module.css";
import { ConvertPath } from "../../../helpers/functions";
import { listDataOther } from "@function/constant";



const WatchMoreInfo = () => {
  return (
    <Col  md={8}>
      <h2 className="title-content">Xem nhiều nhất</h2>
      {listDataOther.map((item, index) => (
        <>
          {index == 0 ? (
            <Link href={ConvertPath(item.title)}>
              <div className={styles["new-card"]}>
                <img alt="image web sports" src={item.image} />
                <p className={styles["title"]}>{item.title}</p>
                <p className={styles["text-timer"]}>{item.timer}</p>
              </div>
            </Link>
          ) : (
            <Link href={ConvertPath(item.title)}>
              <div className={styles["new-card"]}>
                <p className={styles["description"]}>{item.title}</p>
                <p className={styles["text-timer"]}>{item.timer}</p>
              </div>
            </Link>
          )}
          <Divider />
        </>
      ))}
    </Col>
  );
};

export default WatchMoreInfo;
