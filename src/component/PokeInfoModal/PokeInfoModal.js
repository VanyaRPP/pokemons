import React, { useState, useContext } from 'react';
import s from './stylePokeInfoModal.module.css'
import { Modal, Button, Typography, Progress } from 'antd';
import {Context} from './../Context'

export default function PokeInfoModal({ pName, pType, TYPE_COLORS, pImg, PokeAbilities, PokeHeight, PokeBaseStats, PokeStatsName}){
  const [visible, setvisible] = useState(true)
/*
function handleOk(){
  setvisible(false)
}*/
function handleCancel(){
  setvisible(false)
}
    return (
      //console.log(PokeStatsName),
      <>
        <Modal
          width={600}
          title={pName}
          visible={visible}
          //onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={s.content}>
            <div className={ s.imgAndStats }>
              <div className={s.imgDiv}>
                <img src={pImg} style={{height:`219px`}}/>
              </div>
              <div className={s.statsDiv}>
                <div>
                  <Progress
                  trailColor='violet'
                  strokeLinecap="square" type="dashboard"
                  percent={PokeHeight*2} format={percent => `${PokeHeight/10} m`}
                  status={"normal"}
                  />
                </div>
                
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div style={{minWidth:'90px', display:'flex', flexDirection: 'column',justifyContent:'space-between' }}>
                    {PokeStatsName.map(psn=>(
                      <p style={{fontSize:'13px', margin:'0'}}>
                        {psn}
                      </p>
                    ))
                    }
                  </div>
                  <div>
                  {PokeBaseStats.map(pbs=>(
                  <Progress 
                    trailColor='violet'
                    percent={pbs/2} format={percent => `${pbs}`}
                    status={"normal"}
                  />
                ))
                }
                  </div>
                </div>
              </div>
            </div>
            <div>
            {pType.map(pot => (
              <p style={{background: `#${TYPE_COLORS[pot]}`, color: `#fff`, padding:'5px', textAlign:'center', fontSize:'25px', margin:'0'}}>
                {pot}
              </p>
            ))}
            </div> 
          </div>
        </Modal>
      </>
    );

}

