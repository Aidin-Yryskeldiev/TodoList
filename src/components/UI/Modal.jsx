import { Box, Modal as MuiButton } from "@mui/material";

const Modal = ({ children, variant, open, onClose, ...rest }) => {
	return (
		<div>
			<MuiButton variant={variant} open={open} onClose={onClose} {...rest}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
						borderRadius: "20px",
					}}>
					{children}
				</Box>
			</MuiButton>
		</div>
	);
};

export default Modal;
