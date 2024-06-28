import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { getTodos } from "../store/todoSlice/todoThunk";

const TodoList = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<div>
			{todos?.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default TodoList;
