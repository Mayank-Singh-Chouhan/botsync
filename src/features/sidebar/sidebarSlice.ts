import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isExpanded: boolean;
}

const getInitialSidebarState = (): SidebarState => {
  return { isExpanded: window.innerWidth > 1024 };
};

const initialState: SidebarState = getInitialSidebarState();


export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
      state.isExpanded = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarExpanded } = sidebarSlice.actions;
export default sidebarSlice.reducer;