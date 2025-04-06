import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './contactsOps';
import { selectStatusFilter } from './filtersSlice';

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase((state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase((state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase((state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contacts) => contacts.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export default slice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.Loading;

export const selectError = (state) => state.contacts.error;
