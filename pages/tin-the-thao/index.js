import React, { useState, useEffect } from "react";
import Link from "next/link";
import VirtualList from "rc-virtual-list";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../helpers/functions";
import { listDataOther } from "../../app/@function/constant";
import { getListNewsNew, getListWatchMore } from "../../stores/tinmoinhat";
import Head from "next/head";

const ContainerHeight = 400;

const SportInfo = ({ listSportInfo, listWatchMore }) => {
  const [data, setData] = useState(listDataOther ?? []);

  console.log("listSportInfo: ", listSportInfo);

  useEffect(() => {
    const appendData = () => {
      setData(data);
    };
    return appendData();
  }, [data]);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      setData(data)
    }
  };

  return (
    <div className="body">
      <Head>
        <title>Tin thể thao nổi bật</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="title-heading">
        <Link href={"/tin-the-thao"}>Tin thể thao</Link>
      </h2>
      <Divider />
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{ background: "#e8eaef" }} gutter={10}>
            <Col md={16}>
              <Link href={`/${ConvertPath(listSportInfo[0].title)}`}>
                <img alt="image web sports" src={listSportInfo[0].image} />
              </Link>
            </Col>
            <Col md={8}>
              <p className={styles["title"]}>{listSportInfo[0].title}</p>
              <p style={{ color: "#4f4f4f" }}>{listSportInfo[0].description}</p>
            </Col>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <List>
              <VirtualList
                data={listSportInfo ?? listDataOther}
                height={400}
                itemHeight={47}
                itemKey="tirle"
                // onScroll={onScroll}
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
        <WatchMoreInfo listWatchMore={listWatchMore} />
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const listSportInfo = await getListNewsNew();
  const listWatchMore = await getListWatchMore();
  return {
    props: {
      listSportInfo,
      listWatchMore,
    },
  };
};

export default SportInfo;
