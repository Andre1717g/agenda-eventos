import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'El mejor cumpleaños',
    notes: 'Comprar una entrada para ver la final de champions ',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Andres'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null 
    },
    reducers: {
        // de la action extraemos el payload, ya sea que podemos mandat toda la nota o sólo el id
        //tratemos de manejar esto lo más homogéneo posible
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload; // lo que sea que le mande, se va a activar
        },
        onAddNewEvent:  (state, {payload})=>{
            state.events.push(payload);
            state.activeEvent= null;
        },
    }

})

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;