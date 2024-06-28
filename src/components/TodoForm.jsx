import { useState } from "react";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { AddTodo } from "../store/todoSlice/todoSlice";
import { postTodos } from "../store/todoSlice/todoThunk";
import { Box, TextField, styled } from "@mui/material";

const TodoForm = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [photo, setPhoto] = useState("");

	const handleChangeText = (e) => setText(e.target.value);
	const handleChangeTitle = (e) => setTitle(e.target.value);
	const handleChangePhoto = (e) => setPhoto(e.target.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newData = {
			id: Math.random(),
			text,
			title,
			photo,
		};
		dispatch(AddTodo(newData));
		dispatch(postTodos(newData));
		setText("");
		setTitle("");
		setPhoto("");
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<Box component="div">
					<BoxMuiForm>
						<TextField
							onChange={handleChangeText}
							value={text}
							type="text"
							label="Text"
							required
						/>
						<TextField
							onChange={handleChangeTitle}
							value={title}
							type="text"
							label="Text"
							required
						/>
						<TextField
							onChange={handleChangePhoto}
							value={photo}
							type="url"
							label="photo"
							required
						/>
						<Button type="submit">Add</Button>
					</BoxMuiForm>
				</Box>
			</form>
		</div>
	);
};

export default TodoForm;

const BoxMuiForm = styled(Box)(() => {
	return {
		width: "400px",
		border: "1px solid black",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: 10,
		borderRadius: "10px",
		margin: "0 auto",
		position: "relative",
		top: "100px",
	};
});
