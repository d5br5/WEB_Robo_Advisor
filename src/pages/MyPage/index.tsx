import { BodyContainer } from "../../styles";
import { ResultPageContainer } from "../../styles/mypage";
import ASHistory from "./components/ASHistory";
import TSHistory from "./components/TSHistory";
import * as S from "../../styles/mypage";

const MyPage = () => {
	return (
		<BodyContainer>
			<ResultPageContainer>
				<S.ResultContainer>
					<S.ResultTitle>시뮬레이션 히스토리</S.ResultTitle>
					<S.ResultBox>
						<S.TableHeader>
							<S.HHNum>No.</S.HHNum>
							<S.HHDate>일시</S.HHDate>
							<S.HHAsset>자산명</S.HHAsset>
							<S.HHResult>결과</S.HHResult>
							<S.HHDelete>삭제</S.HHDelete>
						</S.TableHeader>
						<ASHistory />
					</S.ResultBox>
				</S.ResultContainer>
				<S.ResultContainer>
					<S.ResultTitle>트레이딩 히스토리</S.ResultTitle>
					<S.ResultBox>
						<S.TableHeader>
							<S.HHNum>No.</S.HHNum>
							<S.HHDate>일시</S.HHDate>
							<S.HHAsset>시장 및 운용기간</S.HHAsset>
							<S.HHResult>결과</S.HHResult>
							<S.HHDelete>삭제</S.HHDelete>
						</S.TableHeader>
						<TSHistory />
					</S.ResultBox>
				</S.ResultContainer>
			</ResultPageContainer>
		</BodyContainer>
	);
};

export default MyPage;
