import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todoThunk";

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		AddTodo: (state, { payload }) => {
			state.todos.push(payload);
		},
		DeleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter((todo) => todo.id !== payload);
		},
		EditTodo: (state, { payload }) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === payload.id) {
					return {
						...todo,
						...payload,
					};
				}
				return todo;
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTodos.fulfilled, (state, { payload }) => {
				state.todos = payload;
				state.isLoading = false;
			})
			.addCase(getTodos.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const { AddTodo, DeleteTodo, EditTodo } = todoSlice.actions;
