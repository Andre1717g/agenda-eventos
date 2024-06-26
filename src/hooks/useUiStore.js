import { useSelector, useDispatch } from 'react-redux';
//import { onOpenDateModal, onCloseDateModal } from '../store';// importar del store
import {  onOpenDateModal, onCloseDateModal } from '../store';
export const useUiStore = () => {

    const { 
        isDateModalOpen 
    } = useSelector ( state => state.ui );

    const dispatch = useDispatch();

    

    const openDateModal = () => {
        dispatch( onOpenDateModal() );
    }

    // creamos función para cerrar
    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    }

    return {
        // * properties
        isDateModalOpen,

        // * métodos
        openDateModal,
        closeDateModal// lo ponemos al mundo exterior para ser consumido
    }

}