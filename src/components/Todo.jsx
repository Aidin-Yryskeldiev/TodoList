import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { EditTodo, DeleteTodo } from "../store/todoSlice/todoSlice";
import { useState } from "react";
import Modal from "./UI/Modal";

const Todo = ({ text, title, photo, id }) => {
	const dispatch = useDispatch();
	const [newText, setNewText] = useState("");
	const [newTitle, setNewTitle] = useState("");
	const [newPhoto, setNewPhoto] = useState("");
	const [open, setOpen] = useState(false);
	const { todos } = useSelector((state) => state.todo);

	const handleChangeNewText = (e) => setNewText(e.target.value);
	const handleChangeNewTitle = (e) => setNewTitle(e.target.value);
	const handleChangeNewPhoto = (e) => setNewPhoto(e.target.value);

	const toggleTodo = () => {
		const update = todos.find((item) => item.id === id);
		setNewText(update.text);
		setNewTitle(update.title);
		setNewPhoto(update.photo);
	};

	const EditTodos = () => {
		const newTodo = {
			id,
			text: newText,
			title: newTitle,
			photo: newPhoto,
		};
		dispatch(EditTodo(newTodo));
		setOpen(false);
	};

	const handleEdit = () => {
		setOpen((prev) => !prev);
		toggleTodo();
	};

	const DeleteTodoList = () => {
		dispatch(DeleteTodo(id));
	};

	return (
		<div>
			<Box component="div">
				<BoxMui>
					<Typography>{text}</Typography>
					<Typography>{title}</Typography>
					<img src={photo} alt="photo" />
					<Button variant="contained" onClick={handleEdit}>
						Edit
					</Button>
					<Button variant="contained" onClick={DeleteTodoList}>
						Delete
					</Button>
					<Modal open={open}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 3,
								width: "400px",
							}}>
							<TextField
								value={newText}
								onChange={handleChangeNewText}
								placeholder="Введите текст"
							/>
							<TextField
								value={newTitle}
								onChange={handleChangeNewTitle}
								placeholder="Введите текст"
							/>
							<TextField
								value={newPhoto}
								onChange={handleChangeNewPhoto}
								placeholder="Введите url"
							/>
							<Button variant="contained" onClick={EditTodos}>
								Save
							</Button>
							<Button variant="contained" onClick={handleEdit}>
								Close
							</Button>
						</Box>
					</Modal>
				</BoxMui>
			</Box>
		</div>
	);
};

export default Todo;

const BoxMui = styled(Box)(() => {
	return {
		width: "300px",
		border: "1px solid black",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: 10,
		borderRadius: "10px",
		margin: "0 auto",
		position: "relative",
		top: "120px",
		marginTop: "30px",
	};
});
