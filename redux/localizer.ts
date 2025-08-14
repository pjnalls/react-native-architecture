import { LocalizerActions, LocalizerActionTypes } from '@/types/Localizer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocalizeState {
  locale: string;
}

export const initialState: LocalizeState = {
  locale: 'es-419',
};

const localizerSlice = createSlice({
  name: 'localizer',
  initialState,
  reducers: {
    localize: (state, action: PayloadAction<{ locale: string }>) => ({
      ...state,
      locale: action.payload.locale,
    }),
  },
});

export const { localize } = localizerSlice.actions;
export default localizerSlice.reducer;
