import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Typography } from 'antd';
import {Context} from './../Context'

export default function PokeInfoModal({ pName, pType, TYPE_COLORS, pID, pImg, PokeAbilities, PokeHeight, PokeStats}){
  const [visible, setvisible] = useState(true)

function handleOk(){
  setvisible(false)
}
function handleCancel(){
  setvisible(false)
}
    return (
      //console.log(pType),
      <>
        <Modal
          title={pName}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <div>
              <Typography>Poke ID: {pID}</Typography>
              <img src={pImg} style={{height:`350px`}}/>
            </div>
            <div>
            <Typography>Height: {PokeHeight}</Typography>
            {pType.map(pot => (
              <p style={{background: `#${TYPE_COLORS[pot]}`, color: `#fff`}}>
              {pot}
            </p>
            ))}
            </div> 
          </div>
        </Modal>
      </>
    );

}

