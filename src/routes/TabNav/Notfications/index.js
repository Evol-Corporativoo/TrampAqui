import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import {RegisterContext} from '../../../../data/context'

export default function Notifications(){

    const [isModalVisible, setModalVisible] = useState(false);
    const {logout} = useContext(RegisterContext)

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return(
    <View style={style.r_col}>
        <TouchableOpacity>
            <Feather name="bell" size={style.icon.size} color={style.icon.color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
            <Octicons name="gear" size={style.icon.size} color={style.icon.color} />
        </TouchableOpacity>

        <Modal
        animationType="slide" // Defina o tipo de animação que deseja
        transparent={false}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        supportedOrientations='landscape-right'
        >
            <View style={style.modalContainer}>
            <Text>Conteúdo do Offcanvas</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Fechar Offcanvas</Text>
            </TouchableOpacity>
            </View>
        </Modal>          
    </View>
    )
}