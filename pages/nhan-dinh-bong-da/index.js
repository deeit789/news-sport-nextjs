import React, { useState, useEffect } from "react";
import Link from "next/link";
import VirtualList from "rc-virtual-list";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, List } from "antd";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../helpers/functions";
import { getListPredic, getListWatchMore } from "../../stores/nhandinhbongda";
import Head from "next/head";
import { useRouter } from "next/router";
import { fileMenuTab1 } from "../../app/@function/constant";


const FootballCommentary = ({ listPredic, listWatchMore }) => {
  const [data, setData] = useState(listPredic ?? []);
  const route = useRouter();

  useEffect(() => {
    const appendData = () => {
      setData(data);
    };
    return appendData();
  }, [data]);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      setData(data);
    }
  };




  return (
    <div className="body">
      <Head>
        <title>Nhận định bóng đá</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="title-heading">Nhận định bóng đá</h2>
      <div style={{ marginBottom: "20px" }} className={styles.menutabX}>
        <div  className={styles.menutab}>
          {fileMenuTab1.map((val, idx) => {
            return (
              <Link key={idx} href={"/nhan-dinh-bong-da/" + val.path}>
                <a>
                  <div
                    className={
                      styles.menutabitem +
                      " " +
                      (route.query.id === val.path
                        ? styles.menutabitemchecked
                        : "")
                    }
                    key={idx}
                  >
                    <div className={styles.menutabitemtitle}>{val.title}</div>
                    <div
                      className={
                        styles.menutabitemhover +
                        " " +
                        (route.query.id === val.path
                          ? styles.menutabitemhoverchecked
                          : "")
                      }
                    ></div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div></div>
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{ background: "#e8eaef" }} gutter={10}>
            <Col md={16}>
              <Link
                href={`/${ConvertPath(
                  "Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học thiết đầu công từ Zidane"
                )}`}
              >
                <img
                  alt="image web sports"
                  src="https://vncdn.sabasports.com/2022/08/Anh-che-Liverpool-Crystal-Palace-7.jpg"
                />
              </Link>
            </Col>
            <Col md={8}>
              <Link
                href={ConvertPath(
                  "Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học thiết đầu công từ Zidane"
                )}
              >
                <p className={styles["title"]}>
                  Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học thiết đầu công
                  từ Zidane
                </p>
              </Link>
              <p style={{ color: "#4f4f4f" }}>
                Tân binh bên phía The Kop đã thiếu kiềm chế trước hành động
                khiêu khích từ đối phương, dẫn đến cái kết là một chiếc thẻ đỏ.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 30 }}>
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
        <WatchMoreInfo listWatchMore={listWatchMore} />
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const listPredic = await getListPredic();
  const listWatchMore = await getListWatchMore();

  return {
    props: {
      listPredic,
      listWatchMore,
    },
  };
};

export default FootballCommentary;
