import { Button as MuiButton } from "@mui/material";

const Button = ({ children, onClick, variant, type = "button", ...rest }) => {
	return (
		<MuiButton onClick={onClick} variant="contained" type={type} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
