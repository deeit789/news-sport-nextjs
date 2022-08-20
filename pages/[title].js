import React, { useState, useEffect } from "react";
import Link from "next/link";
import VirtualList from "rc-virtual-list";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../app/project/WatchMoreInfo";
import styles from "../styles/chi-tiet-trang.module.css";
import { ConvertPath } from "../helpers/functions";
import AddComment from "../app/project/CommentList";
import { listDataOther } from "../app/@function/constant"

const ContainerHeight = 400;


const NewDetail = () => {
  const [data, setData] = useState(listDataOther ?? []);

  

  useEffect(() => {
    const appendData = () => {
      setData(data);
    };
    return appendData();
  }, [data]);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      setData(data);
    }
  };
  return (
    <div className="body">
      <Row gutter={20}>
        <Col md={16}>
          <div>
            <h1 className={styles["title"]}>Tiêu đề</h1>
            <span className={styles["text-timer"]}>
              Thứ Tư, 17/08/2022, 22:11
            </span>
            <h3 className={styles["title-italics"]}>Tiêu đề 2</h3>
            <p>....................................</p>
          </div>
          <div>
            <h3 className={styles["title-italics"]}>Xem thêm</h3>
            <ul>
              {data.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <Link href={ConvertPath(item.title)} key={index}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AddComment />
          <Row style={{ marginTop: 30 }}>
            <h2 className="title-content">Có thể bạn quan tâm</h2>
            <List>
              <VirtualList
                data={data}
                height={400}
                itemHeight={47}
                itemKey="tirle"
                onScroll={onScroll}
              >
                {(item) => (
                  <List.Item key={item.title} className={styles["new-item"]}>
                    <Row>
                      <Col md={8}>
                        <List.Item.Meta
                          avatar={
                            <Link href={ConvertPath(item.title)}>
                              <img alt="image web sports" src={item.image} />
                            </Link>
                          }
                        />
                      </Col>
                      <Col md={16}>
                        <Link href={ConvertPath(item.title)}>
                          <p className={styles["title"]}>{item.title}</p>
                        </Link>
                        <p className={styles["description"]}>
                          {item.description}
                        </p>
                        <p className={styles["text-timer"]}>{item.timer}</p>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </Row>
        </Col>
        <WatchMoreInfo />
      </Row>
    </div>
  );
};

export default NewDetail;
