import { useDispatch, useSelector } from 'react-redux'; // importar useDispatch
import { onAddNewEvent, onSetActiveEvent} from '../store'; // importar onSetActiveEvent

export const useCalendarStore = () => {

    // creamos la constante
    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );

    

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent) );
    }// este es mi primer método que voy a exponer

    const starSavingEvent = async(calendarEvent) => {
        if(calendarEvent._id){

        }else{
            dispatch( onAddNewEvent({
                ...calendarEvent, _id: new  Date().getTime() 
            }));
        }
    }
    //TODO! mandar a llamar esot desde el modal calendarmodal.jsx
    return {
        //* propiedades
        events,
        activeEvent,

        //* métodos
        setActiveEvent,
        starSavingEvent
    }
}


