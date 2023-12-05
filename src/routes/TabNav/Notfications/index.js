import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';

import style from './style';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
                <Text style={style.title}>Configurações</Text>
                <TouchableOpacity style={style.logout} onPress={logout}>
                    <View style={[{flexDirection: 'row'}]}>
                        <MaterialIcons name="logout" size={24} color="black" />
                        <Text style={[style.text_close,style.text_logout]}>Deslogar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.close} onPress={toggleModal}>
                    <Text style={style.text_close}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>          
    </View>
    )
}