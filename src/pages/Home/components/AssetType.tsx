import {
	CardContainer,
	ExampleCard,
	ExampleTitle,
	ExampleDesc,
	AssetBox,
	AssetItem,
	AssetTitle,
	AssetDesc,
} from "../styles";
import { AccentRed } from "../../../styles";
import { categoryOptions } from "../../../config/data/AS";
import { memo } from "react";

const AssetType = () => {
	return (
		<CardContainer mb="100px">
			<ExampleCard>
				<ExampleDesc>
					<ExampleTitle>선택할 수 있는 자산 종류</ExampleTitle>
					<AssetBox>
						{categoryOptions
							.filter((a) => !a.disabled)
							.map((category, i) => (
								<AssetItem key={i}>
									<AssetTitle>{category.title}</AssetTitle>{" "}
									<AssetDesc>
										{category.desc} (<AccentRed>{category.count}개</AccentRed>)
									</AssetDesc>
								</AssetItem>
							))}
					</AssetBox>
				</ExampleDesc>
			</ExampleCard>
		</CardContainer>
	);
};

export default memo(AssetType);
