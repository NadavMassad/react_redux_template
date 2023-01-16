import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPhones, addPhones, delPhones, updPhones } from './sampAPI';

const initialState = {
  value: 0,
  phones: [],
  refreshUdpate: false
};

export const getPhonesAsync = createAsyncThunk(
  'samp/getPhones',
  async () => {
    const response = await getPhones();
    return response.data;
  }
);

export const addPhonesAsync = createAsyncThunk(
  'samp/addPhones',
  async (phone) => {
    const response = await addPhones({
      brand: phone.brand,
      color: phone.color,
      price: phone.price
    });
    return response.data;
  }
);
export const delPhonesAsync = createAsyncThunk(
  'samp/delPhones',
  async (id) => {
    console.log(id)
    const response = await delPhones(id);
    return response.data;
  }
);
export const updPhonesAsync = createAsyncThunk(
  'samp/updPhones',
  async (phone) => {
    const response = await updPhones({
      id: phone.id,
      brand: phone.brand,
      color: phone.color,
      price: phone.price
    });
    return response.data;
  }
);

export const sampSlice = createSlice({
  name: 'samp',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhonesAsync.fulfilled, (state, action) => {
        state.phones = action.payload;
      })
      .addCase(addPhonesAsync.fulfilled, (state, action) => {
        state.phones.push(action.payload);
      })
      .addCase(delPhonesAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.phones = state.phones.filter(phone => phone.id !== action.payload);
      })
      .addCase(updPhonesAsync.fulfilled, (state, action) => {
        state.refreshUdpate =! state.refreshUdpate
        console.log(action.payload)
      });
  },
});


export const phoneList = (state) => state.samp.phones;
export const updateFlag = (state) => state.samp.refreshUdpate;
export default sampSlice.reducer;
