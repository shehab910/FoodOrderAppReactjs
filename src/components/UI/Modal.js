import { useCallback, useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ open, onClose, children }) {
	const modalRef = useRef(null);

	const onClick = useCallback(
		({ target }) => {
			if (target === modalRef.current) onClose();
		},
		[onClose]
	);

	useEffect(() => {
		if (open) modalRef.current.showModal();
		else modalRef.current.close();
	}, [open]);

	return (
		<dialog
			ref={modalRef}
			className={styles.modal}
			onClose={onClose}
			onCancel={onClose}
			onClick={onClick}
		>
			<div className={styles["modal__container"]}>{children}</div>
		</dialog>
	);
}
