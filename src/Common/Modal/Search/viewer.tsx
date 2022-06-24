import { categoryOptions } from "../../../config/data/AS";
import searchIcon from "../../../assets/BackTest/searchIcon.jpg";
import closebtnimg from "../../../assets/MyPage/closebtn.jpg";
import { XMark } from "../../../styles";
import { useMediaQuery } from "react-responsive";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Asset } from "../../../types";
import { AssetInvested } from "../../../types";
import {
	CloseBtn,
	ContainerWithButton,
	ExampleTitle,
	ModalBlueBox,
	ModalWhiteBox,
	Options,
	SearchButton,
	SearchInput,
	SearchWarning,
	SearchedList,
	SearchedListContainer,
	Select,
	SemiContainer,
	ModalBackground,
	SemiTitle,
	DecideBtn,
	SAIContainer,
	SelectedAssetItem,
	AssetItemDeleteBtn,
} from "./styles";

const SearchModalViewer: FC<{
	closeModal: () => void;
	changeCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
	searchAsset: (e: ChangeEvent<HTMLInputElement>) => void;
	selectedCategory: string;
	categorySearchLoading: boolean;
	searchKey: string;
	searchedList: Asset[];
	warningText: string;
	selectValue: (item: Asset) => void;
	decideInvestList: () => void;
	selectedAssetList: AssetInvested[];
	setSelectedAssetList: Dispatch<SetStateAction<AssetInvested[]>>;
}> = ({
	closeModal,
	changeCategory,
	searchAsset,
	selectedCategory,
	categorySearchLoading,
	searchKey,
	searchedList,
	warningText,
	selectValue,
	decideInvestList,
	selectedAssetList,
	setSelectedAssetList,
}) => {
	const isNarrow = useMediaQuery({
		query: "(max-width: 800px)",
	});
	return (
		<ModalBackground>
			<ModalBlueBox>
				<CloseBtn onClick={closeModal} src={closebtnimg} />
				<ModalWhiteBox>
					<ExampleTitle>자산 검색</ExampleTitle>
					<SemiContainer>
						<SemiTitle>종류</SemiTitle>
						<ContainerWithButton>
							<Select name="categoryOptions" onChange={changeCategory} defaultValue={"none"}>
								{categoryOptions.map((category, id) => (
									<Options value={category.value} key={id} disabled={category.disabled}>
										{category.title} {!isNarrow && category.desc && `(${category.desc})`}
									</Options>
								))}
							</Select>
							<SearchButton>▼</SearchButton>
						</ContainerWithButton>
					</SemiContainer>
					<SemiContainer>
						<SemiTitle>검색</SemiTitle>
						<ContainerWithButton>
							<SearchInput
								type="text"
								disabled={selectedCategory === "" || categorySearchLoading}
								value={searchKey}
								onChange={searchAsset}
								placeholder={
									selectedCategory === "" || categorySearchLoading
										? "자산 종류를 먼저 선택해주세요."
										: "자산명을 입력하세요."
								}
							/>
							<SearchButton>
								<img src={searchIcon} alt="" width="16px" style={{ marginLeft: "3px" }} />
							</SearchButton>
						</ContainerWithButton>
					</SemiContainer>
					<SAIContainer>
						{selectedAssetList
							.filter((a) => a.nameticker !== "")
							.map((a, i) => (
								<SelectedAssetItem
									key={i}
									onClick={() =>
										setSelectedAssetList(
											selectedAssetList.filter(
												(asset) => asset.name !== a.name || asset.ticker !== a.ticker
											)
										)
									}
								>
									{a.name.length > 13 ? `${a.name.slice(0, 12)}...` : a.name}
									<AssetItemDeleteBtn>
										<XMark />
									</AssetItemDeleteBtn>
								</SelectedAssetItem>
							))}
					</SAIContainer>
					<SearchedListContainer>
						{searchedList.length === 0 ? (
							<SearchWarning>{warningText}</SearchWarning>
						) : (
							<ul>
								{searchedList.map((item, idx) => (
									<SearchedList key={idx} onClick={() => selectValue(item)}>
										{item.name} {item.ticker}
									</SearchedList>
								))}
							</ul>
						)}
					</SearchedListContainer>

					<DecideBtn onClick={decideInvestList}>선택 완료</DecideBtn>
				</ModalWhiteBox>
			</ModalBlueBox>
		</ModalBackground>
	);
};

export default SearchModalViewer;
