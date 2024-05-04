import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    setUserAppointments: (state, action) => {
      return action.payload;
    },
    cancelTurno: (state, action) => {
      const { turnoId  } = action.payload;
      return state.map(turno =>
        turno.id === turnoId  ? { ...turno, status: "cancelled" } : turno
      );
    },
    clearUserAppointments: () => {
      return [];
    },
  },
});

export const { setUserAppointments, cancelTurno, clearUserAppointments} = appointmentsSlice.actions;

export const selectUserAppointments = (state) => state.appointments;


export default appointmentsSlice.reducer;