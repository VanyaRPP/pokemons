import React from 'react'
import Modal from 'antd/lib/modal/Modal'

export default function PokeInfoModal() {
    return (
        <div>
            <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            ></Modal>
        </div>
    )
}
