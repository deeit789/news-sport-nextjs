import { SearchIcon } from '@icon';
import { Col, Row } from 'antd';
import React from 'react';
import styles from '../../../styles/Schedule.module.css'

const Schedule = () => {
    return ( 
        <>
            <Row gutter={[20,20]} className={styles.schedule}>
            <Col xl={16}>
                <Row gutter={[20,20]} className={styles["schedule-item"]}>
                <Col xl={24}>
a
                 </Col>
                 <Col xl={24}>
                 <div className={styles["schedule-search"]}>
                 <SearchIcon />
                 <input placeholder='Tìm kiếm giải bóng, đội bóng...' />
                 </div>
                 </Col>
                </Row>
            </Col>
            <Col xl={8}>
                 a
            </Col>
            </Row>
        </>
    );
};

export default Schedule;