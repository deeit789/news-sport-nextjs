import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import VirtualList from "rc-virtual-list";
import styles from "../../../styles/tin-the-thao.module.css";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../../helpers/functions";
import { listDataOther } from "../../../app/@function/constant";

const SportFootballTab = () => {
  const [data, setData] = useState(listDataOther ?? []);
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
  const menuTab = [
    {
      title: "Việt Nam",
      path: "viet-nam",
      submenu: [
        {
          title: "V-League",
          path: "viet-nam/v-league",
        },
        {
          title: "ĐT Việt Nam",
          path: "viet-nam/dt-viet-nam",
        },
        {
          title: "ĐT nữ Việt Nam",
          path: "viet-nam/dt-nu-viet-nam",
        },
        {
          title: "U23 Việt Nam",
          path: "viet-nam/u23-viet-nam",
        },
        {
          title: "Futsal Việt Nam",
          path: "viet-nam/futsal-viet-nam",
        },
        {
          title: "Khác",
          path: "viet-nam/viet-nam-khac",
        },
      ],
    },
    {
      title: "Cúp Châu Âu",
      path: "cup-chau-au",
      submenu: [
        {
          title: "Champions League",
          path: "cup-chau-au/champions-league",
        },
        {
          title: "Europa League",
          path: "cup-chau-au/europa-league",
        },
        {
          title: "Khác",
          path: "cup-chau-au/cup-chau-au-khac",
        },
      ],
    },
    {
      title: "Anh",
      path: "anh",
      submenu: [
        {
          title: "Ngoại Hạng Anh",
          path: "anh/ngoai-hang-anh",
        },
        {
          title: "FA Cup",
          path: "anh/fa-cup",
        },
        {
          title: "Khác",
          path: "anh/anh-khac",
        },
      ],
    },
    {
      title: "Tây Ban Nha",
      path: "tay-ban-nha",
      submenu: [
        {
          title: "La Liga",
          path: "tay-ban-nha/la-liga",
        },

        {
          title: "Khác",
          path: "tay-ban-nha/tay-ban-nha-khac",
        },
      ],
    },
    {
      title: "Italia",
      path: "italia",
      submenu: [
        {
          title: "Serie A",
          path: "italia/serie-a",
        },
        {
          title: "Khác",
          path: "italia/italia-khac",
        },
      ],
    },
    {
      title: "Đức",
      path: "duc",
      submenu: [
        {
          title: "Bundesliga",
          path: "duc/bundesliga",
        },
        {
          title: "Khác",
          path: "duc/duc-khac",
        },
      ],
    },
    {
      title: "Pháp",
      path: "phap",
      submenu: [
        {
          title: "Ligue 1",
          path: "phap/ligue-1",
        },
        {
          title: "Khác",
          path: "phap/phap-khac",
        },
      ],
    },
    {
      title: "Quốc tế",
      path: "quoc-te",
      submenu: [
        {
          title: "World Cup",
          path: "quoc-te/world-cup",
        },
        {
          title: "Euro",
          path: "quoc-te/euro",
        },
        {
          title: "Asian Cup",
          path: "quoc-te/asian-cup",
        },
        {
          title: "Copa America",
          path: "quoc-te/copa-america",
        },
        {
          title: "AFF Cup",
          path: "quoc-te/aff-cup",
        },
        {
          title: "Seagame",
          path: "quoc-te/seagame",
        },
        {
          title: "U23 Châu Á",
          path: "quoc-te/u23-chau-a",
        },
        {
          title: "Khác",
          path: "quoc-te/quoc-te-khac",
        },
      ],
    },
  ];
  return (
    <div className="body">
      <h2 className="title-heading">Bóng đá</h2>
      <div className={styles.menutab}>
        {menuTab.map((val, idx) => {
          return (
            <Link href={"/bong-da/" + val.path}>
              <a>
                <div
                  className={
                    styles.menutabitem +
                    " " +
                    (route.query.pram === val.path
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
                      (route.query.pram === val.path
                        ? styles.menutabitemhoverchecked
                        : "")
                    }
                  ></div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div className={styles.menutabBatter}>
        {menuTab.filter((val) => val.path === route.query.pram).length
          ? menuTab
              .filter((val) => val.path === route.query.pram)[0]
              .submenu.map((val) => {
                return (
                  <Link href={"/bong-da/" + val.path}>
                    <a>
                      <div>{val.title}</div>
                    </a>
                  </Link>
                );
              })
          : ""}
      </div>
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{ background: "#e8eaef" }} gutter={10}>
            <Col md={16}>
              <Link href={ConvertPath("Ảnh chế Liverpool 1-1 Crystal Palace")}>
                <img
                  alt="image web sports"
                  src="https://vncdn.sabasports.com/2022/08/Anh-che-Liverpool-Crystal-Palace-7.jpg"
                />
              </Link>
            </Col>
            <Col md={8}>
              <Link href={ConvertPath("Ảnh chế Liverpool 1-1 Crystal Palace")}>
                <p className={styles["title"]}>
                  Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học ‘thiết đầu
                  công’ từ Zidane
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
        <WatchMoreInfo />
      </Row>
    </div>
  );
};

export default SportFootballTab;
