import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface PageState {
    [key: string]: {
        loading: number;
        [key: string]: any;
    };
}

interface MountPayload {
    module: string;
    payload: Record<string, any>;
}

interface UpdatePayload {
    module: string;
    payload: Record<string, any>;
}

const initialState: PageState = {};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        mount: (state, action: PayloadAction<MountPayload>) => {
            const { module, payload } = action.payload;
            state[module] = {
                ...state[module],
                ...payload,
                loading: 0
            };
        },
        unmount: (state, action: PayloadAction<{ module: string }>) => {
            const { module } = action.payload;
            delete state[module];
        },
        loadingStart: (state, action: PayloadAction<{ module: string }>) => {
            const { module } = action.payload;
            if (!state[module]) state[module] = { loading: 0 };
            state[module].loading = (state[module].loading || 0) + 1;
        },
        loadingEnd: (state, action: PayloadAction<{ module: string }>) => {
            const { module } = action.payload;
            if (!state[module]) state[module] = { loading: 0 };
            state[module].loading = (state[module].loading || 0) - 1;
        },
        update: (state, action: PayloadAction<UpdatePayload>) => {
            const { module, payload } = action.payload;
            state[module] = {
                ...state[module],
                ...payload
            };
        },
    },
});

export const { mount, unmount, loadingStart, loadingEnd, update } = pageSlice.actions;
export default pageSlice.reducer;