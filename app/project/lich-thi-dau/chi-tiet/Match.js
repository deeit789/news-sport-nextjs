import { MatchFootBall } from '@function/constant';
import { convertStatusFootball } from '@function/Funcion';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import CustomSlider from './slider/CustomSlider';

const Match = () => {
    const location = useRouter()
    const [state,setState] = useState('dienbien')

    return (
        <>
          <div className='detail-schedule-style-left-input-nav'>
            <div className={'title ' + (state === 'dienbien' ? ' active' : "")} >
                       <a href='#dienbien' onClick={()=>setState('dienbien')} >
                       Diễn Biến
                       </a>
                    </div>
                    <div className={'title ' + (state === 'thongke' ? ' active' : "")}>
                    <a href='#thongke' onClick={()=>setState('thongke')}>
                    Thống kê
                       </a>
                        
                    </div>
                    <div className={'title ' + (state === 'doihinh' ? ' active' : "")} >
                    <a href='#doihinh' onClick={()=>setState('doihinh')}>
                    Đội hình
                       </a>
                       
                    </div>
                    <div className={'title ' + (state === 'doidau' ? ' active' : "")}>
                    <a href='#doidau' onClick={()=>setState('doidau')}>
                    Đối đầu
                       </a>
                      
                    </div>

            </div>
            <div className="detail-schedule-style-left-input" id='dienbien'>
                <div className='item-develop'>
                    <div className='title'>
                        Diễn Biến
                    </div>
                    {MatchFootBall && MatchFootBall.development && MatchFootBall.development.length ? MatchFootBall.development.map((val, idx) => {
                        return (
                            <Fragment key={idx}>
                                {
                                idx === 0 ? (
                                    <div className='ball'>
                                        <div className='m-title'>
                                            Bắt đầu
                                        </div>
                                        <div className='develop'>
                                            {
                                                val.develop &&  val.develop.map((vaz, idx) =>
                                                    <div className='develop-item' key={idx} style={vaz.teamOne ? { marginRight: '100px' } : { marginLeft: '100px' }}>
                                                        <span>{vaz.teamOne ?  <div className='t-item'>
                                                        <div className='t-title'>
                                                        {vaz.name}
                                                        <span>{vaz.minute + "'"}</span>
                                                        </div> <div className='it'> <span style={{color:'red'}}>{ convertStatusFootball(vaz.status, vaz.goal1,vaz.goal2)}</span></div>

                                                        </div> 
                                                            : 
                                                            <div className='t-item'>
                                                          <span style={{color:'red'}}>  {convertStatusFootball(vaz.status, vaz.goal2,vaz.goal1)}</span>
                                                         <div className='t-title-r'>
                                                            {vaz.name}
                                                             <span>{vaz.minute + "'"}</span>
                                                             </div> 
                                                             </div> 
                                                        } </span>

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>) : ""
                            }
                                {
                                    idx === 1 ? (
                                        <div className='ball'>
                                            <div className='m-title'>
                                                Hiệp hai
                                            </div>
                                            <div className='develop'>
                                                {
                                                    val.develop && val.develop.length ? val.develop.map((vaz, index) => {
                                                        return <div className='develop-item' key={index} style={vaz.teamOne ? { marginRight: '100px' } : { marginLeft: '100px' }}>
                                                            <span>{vaz.teamOne ?
                                                                <div className='t-item'>
                                                                    <div className='t-title'>
                                                                        {vaz.name}
                                                                        <span>{vaz.minute + "'"}
                                                                        </span>
                                                                    </div> 
                                                                    {`    |  ${convertStatusFootball(vaz.status, vaz.goal1, vaz.goal2)}`}
                                                                    </div>
                                                                :
                                                                <div className='t-title'>
                                                                    {`${convertStatusFootball(vaz.status, vaz.goal2, vaz.goal1)}      |`}
                                                                    {vaz.name}
                                                                    <span>{vaz.minute + "'"}</span>
                                                                </div>
                                                            } </span>

                                                        </div>
                                                    }
                                                    ) : ""
                                                }
                                            </div>
                                        </div>
                                    ) : ""
                                }
                                {
                                    idx === 2 ? (
                                        <div className='ball'>

                                        </div>
                                    ) : ""
                                }
                            </Fragment>


                        )
                    }) : ""}
                </div>
            </div>
            <div className="detail-schedule-style-left-input" id='thongke'>
                <div className='item-develop'>
                    <div className='title'>
                        Thống kê
                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Tỉ lệ kiểm soát bóng
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={70} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={30} />
                            </div>
                        </div>

                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Tình huống tấn công nguy hiểm
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={50} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={50} />
                            </div>
                        </div>

                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Số lần dứt điểm
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={40} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={60} />
                            </div>
                        </div>

                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Tỉ lệ kiểm soát bóng
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={80} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={20} />
                            </div>
                        </div>

                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Dứt điểm chính xác
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={60} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={40} />
                            </div>
                        </div>

                    </div>
                    <div className='slider-staff'>
                        <div className='title-s'>
                            Phạm lỗi
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={1} value={30} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <CustomSlider type={2} value={50} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="detail-schedule-style-left-input">
                <div className='item-develop'>
                    <div className='title'>
                        Đội hình
                    </div>

                </div>

            </div>
            <div className="detail-schedule-style-left-input" id='doihinh'>
                <div className='item-develop'>
                    <div className='title'>
                        Đội hình ra sân
                    </div>
                    <div className='teammmm'>
                        <div className='team1'>
                            <div> {MatchFootBall.reserve.teamOne.teamName1}</div>
                            {
                                MatchFootBall.reserve.teamOne.map((val, idx) => (
                                    <p>{val.stt + ":" + val.name}</p>
                                ))
                            }
                        </div>
                        <div className='team2'>
                            <div> {MatchFootBall.reserve.teamTwo.teamName2}</div>
                            {
                                MatchFootBall.reserve.teamTwo.map((val, idx) => (
                                    <p>{val.stt + ":" + val.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-schedule-style-left-input" id='doidau'>
                <div className='item-develop'>
                    <div className='title'>
                        Đối đầu
                    </div>
                    <div className='teammmm'>
                        <div className='team1'>
                            <div> {MatchFootBall.reserve.teamOne.teamName1}</div>
                            {
                                MatchFootBall.reserve.teamOne.map((val, idx) => (
                                    <p>{val.stt + ":" + val.name}</p>
                                ))
                            }
                        </div>
                        <div className='team2'>
                            <div> {MatchFootBall.reserve.teamTwo.teamName2}</div>
                            {
                                MatchFootBall.reserve.teamTwo.map((val, idx) => (
                                    <p>{val.stt + ":" + val.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Match;