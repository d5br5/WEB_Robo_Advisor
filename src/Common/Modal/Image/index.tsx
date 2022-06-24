import { useDispatch, useSelector } from "react-redux";
import { offModal } from "../../../store/slice/modal";
import { ModalState } from "../../../types/state";
import { RootState } from "../../../store";
import { ImgModal } from "./styles";
import { memo } from "react";

const ImageModal = () => {
	const modal = useSelector<RootState, ModalState>((state) => state.modal);
	const dispatch = useDispatch();

	return modal.isActive && modal.isImg ? (
		<ImgModal onClick={() => dispatch(offModal())}>
			<img src={modal.src} alt="modalImg" style={{ maxWidth: "100%", height: "auto" }} />
		</ImgModal>
	) : null;
};

export default memo(ImageModal);
