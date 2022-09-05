import React from 'react';

const CustomSlider = ({value,type}) => {
    return (
        <div style={{width:'99%',height:'7px',borderRadius:'4px',backgroundColor:'#c7c7c74f',position:'relative',display:'flex',justifyContent:type === 1 ? 'flex-end' :'flex-start'} }>
            <div style={{height:'100%',width:value + "%",backgroundColor:type === 1 ? '#324a75' : 'red'}}>

            </div>
            <div style={{position:'absolute',top:'-20px',left: type === 1 ? '0' : "",right: type === 2 ? '0' : ""}}>
               {value}%
            </div>
        </div>
    );
};

export default CustomSlider;