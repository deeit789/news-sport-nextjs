import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, List } from "antd";
import VirtualList from "rc-virtual-list";

const ContainerHeight = 400;

const ListVideo = ({ listVideos }) => {
  const [data, setData] = useState(listVideos ?? []);

  const appendData = () => {
    setData(data);
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      setData(data)
    }
  };

  return (
    <>
      <h2 className="title-heading">
        <Link href={"/video"}>Video</Link>
      </h2>
      <Row gutter={20}>
        <Col md={14} sm={24} xs={24}>
          <iframe
            width="667"
            height="400"
            src="https://www.youtube.com/embed/fvrkGsQ_1gg"
            title={listVideos[3].title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col md={10} xs={24} sm={24}>
          <List>
            <VirtualList
              data={listVideos}
              height={400}
              itemHeight={47}
              itemKey="tirle"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.title}>
                  <Row>
                    <Col md={8}>
                      <List.Item.Meta
                        avatar={<img alt="image web sports" src={item.image} />}
                        // title={
                        //   <Link href="/">
                        //     <span className={styles["title"]}>{item.title}</span>
                        //   </Link>
                        // }
                        // description={item.title}
                      />
                    </Col>
                    <Col md={16}>
                      <div>{item.title}</div>
                    </Col>
                  </Row>
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default ListVideo;
