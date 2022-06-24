import { memo } from "react";
import { DoneContainer, DoneBody } from "../../../styles/mypage";

const NoHistory = () => {
	return (
		<DoneContainer>
			<DoneBody>
				완료한 시뮬레이션이 없습니다.
				<br />
				[시작하기] 탭에서 자산배분 시뮬레이션을 시작해보세요!
			</DoneBody>
		</DoneContainer>
	);
};

export default memo(NoHistory);
