import { FC, memo } from "react";
import * as S from "./styles";

const BannerContainer: FC<{
	bgImg: string;
	title: Array<[number, string]>;
	desc: string[];
}> = ({ bgImg, title, desc }) => (
	<S.BannerWithTitleDesc bgImg={bgImg}>
		<S.BannerTitle>
			{title.map((a, i) =>
				a[0] === 0 ? (
					<span key={i}>{a[1]}</span>
				) : a[0] === 1 ? (
					<S.AccentTitle key={i}>{a[1]}</S.AccentTitle>
				) : (
					<S.BannerTitleBr key={i} />
				)
			)}
		</S.BannerTitle>
		<S.BannerDesc>
			{desc.map((a, i) => (
				<span key={i}>
					{a}
					{i !== desc.length - 1 && <br />}
				</span>
			))}
		</S.BannerDesc>
	</S.BannerWithTitleDesc>
);

export default memo(BannerContainer);
