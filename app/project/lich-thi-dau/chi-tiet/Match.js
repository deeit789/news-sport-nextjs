import { MatchFootBall } from '@function/constant';
import { convertStatusFootball } from '@function/Funcion';
import { Slider } from 'antd';
import React from 'react';

const Match = () => {
    return (
        <>
            <div className="detail-schedule-style-left-input">
                <div className='item-develop'>
                    <div className='title'>
                        Diễn Biến
                    </div>
                    {MatchFootBall.development.map((val, idx) => (
                        <>
                            {
                                idx === 0 && (
                                    <div className='ball'>
                                        <div className='m-title'>
                                            Bắt đầu
                                        </div>
                                        <div className='develop'>
                                            {
                                                val.develop.map((vaz, idx) =>
                                                    <div className='develop-item' key={idx} style={vaz.teamOne ? { marginRight: '100px' } : { marginLeft: '100px' }}>
                                                        <p>{vaz.teamOne ?  <div className='t-item'>
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
                                                        } </p>

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                idx === 1 && (
                                    <div className='ball'>
                                        <div className='m-title'>
                                            Hiệp hai
                                        </div>
                                        <div className='develop'>
                                            {
                                                val.develop.map((vaz, idx) =>
                                                    <div className='develop-item' key={idx} style={vaz.teamOne ? { marginRight: '100px' } : { marginLeft: '100px' }}>
                                                        <p>{vaz.teamOne ?  <div className='t-item'>
                                                        <div className='t-title'>
                                                        {vaz.name}
                                                        <span>{vaz.minute + "'"}</span>
                                                        </div> {`    |  ${convertStatusFootball(vaz.status, vaz.goal1,vaz.goal2)}`}</div> 
                                                            : 
                                                            <div className='t-title'>
                                                            {`${convertStatusFootball(vaz.status, vaz.goal2,vaz.goal1)}      |`}
                                                        {vaz.name}
                                                        <span>{vaz.minute + "'"}</span>
                                                        </div> 
                                                        } </p>

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                idx === 2 && (
                                    <div className='ball'>

                                    </div>
                                )
                            }
                        </>


                    ))}
                </div>

            </div>
            <div className="detail-schedule-style-left-input">
                <div className='item-develop'>
                    <div className='title'>
                        Thống kê
                    </div>
                   <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
                 </div>
                </div>

                </div>
                <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
                 </div>
                </div>

                </div>
                <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
                 </div>
                </div>

                </div>
                <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
                 </div>
                </div>

                </div>
                <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
                 </div>
                </div>

                </div>
                <div className='slider-staff'>
                   <div className='title-s'>
                 Tỉ lệ kiểm soát bóng       
                 </div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                 <Slider defaultValue={30} t disabled={true} />
                 </div>
                 <div style={{width:'50%'}}>
                 <Slider defaultValue={30} disabled={true} />
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
             <div className="detail-schedule-style-left-input">
                <div className='item-develop'>
                    <div className='title'>
                        Đội hình ra sân
                    </div>
                 <div className='teammmm'>
                 <div className='team1'>
                    <div> {MatchFootBall.reserve.teamOne.teamName1}</div>
                        {
                            MatchFootBall.reserve.teamOne.map((val,idx) => (
                                <p>{val.stt + ":" + val.name}</p>
                            ))
                        }
                    </div>
                    <div className='team2'>
                  <div> {MatchFootBall.reserve.teamTwo.teamName2}</div>
                        {
                            MatchFootBall.reserve.teamTwo.map((val,idx) => (
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