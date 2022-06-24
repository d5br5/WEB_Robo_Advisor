import { useDispatch, useSelector } from "react-redux";
import { offModal } from "../../../store/slice/modal";
import closebtnimg from "../../../assets/MyPage/closebtn.jpg";
import DetailPieChart from "../../Chart/Pie/MyPageDetail";
import { RootState } from "../../../store";
import { SimulationState } from "../../../types/state";
import {
	ModalContainer,
	Modal,
	ModalBorder,
	CloseBtn,
	DescTitle,
	DescInfo,
	DescItem,
	DescContainer,
} from "./styles";
import { memo } from "react";

const DetailModal = () => {
	const dispatch = useDispatch();
	const { selectedSimulation: idx, simulations: simuls } = useSelector<RootState, SimulationState>(
		(state) => state.simulation
	);

	return simuls.length > 0 ? (
		<ModalContainer>
			<ModalBorder>
				<Modal>
					<CloseBtn onClick={() => dispatch(offModal())} src={closebtnimg} />
					<DetailPieChart label={simuls[idx].assets} width="300px" />
					<DescContainer>
						<DescItem>
							<DescTitle>전략</DescTitle>
							<DescInfo>
								{simuls[idx].strategies
									.filter((a) => a.name !== "snp" && a.name !== "kospi")
									.map((item) => item.name)
									.join(", ")
									.toUpperCase()}
							</DescInfo>
						</DescItem>
						<DescItem>
							<DescTitle>시뮬레이션 기간</DescTitle>
							<DescInfo>
								{simuls[idx].startDate} - {simuls[idx].endDate}
							</DescInfo>
						</DescItem>
						<DescItem>
							<DescTitle>리밸런싱 주기</DescTitle>
							<DescInfo>{simuls[idx].rebalancingPeriod}일</DescInfo>
						</DescItem>
					</DescContainer>
				</Modal>
			</ModalBorder>
		</ModalContainer>
	) : null;
};

export default memo(DetailModal);
