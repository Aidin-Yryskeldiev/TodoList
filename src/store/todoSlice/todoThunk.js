import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getTodos = createAsyncThunk(
	"todos/getTodos",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/todos.json`);
			const transform = [];
			const result = response.data;

			for (let key in result) {
				transform.push({
					id: key,
					text: result[key].text,
					title: result[key].title,
					photo: result[key].photo,
				});
			}

			return transform;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postTodos = createAsyncThunk(
	"todos/postTodos",
	async (data, { dispatch, rejectWithValue }) => {
		try {
			await axios.post(`${BASE_URL}/todos.json`, data);
			dispatch(getTodos());
		} catch (error) {
			rejectWithValue(error);
		}
	}
);
