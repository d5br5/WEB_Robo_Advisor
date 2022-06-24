import { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { offModal } from "../../../store/slice/modal";
import { changeInvestList, changePeriod } from "../../../store/slice/backSelection";
import { AssetInvested, Calendar } from "../../../types";
import { RootState } from "../../../store";
import { Asset } from "../../../types";
import SearchModalViewer from "./viewer";

const warningList = [
	"자산이 속한 시장을 선택해주세요.",
	"검색어를 입력해주세요.",
	"검색어는 2자 이상 입력해야 합니다.",
	"검색된 자산이 없습니다.",
];

const SearchModalContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchKey, setSearchKey] = useState("");
	const [categorySearchLoading, setCategorySearchLoading] = useState(true);
	const [filteredAssetClass, setFilteredAssetClass] = useState<Asset[]>([]);
	const [searchedList, setSearchedList] = useState<Asset[]>([]);
	const [warningText, setWarningText] = useState(warningList[0]);
	const [selectedAssetList, setSelectedAssetList] = useState<AssetInvested[]>([]);
	const [selectedPeriod, setSelectedPeriod] = useState({
		start: "1985-01-01",
		end: "2099-12-23",
	});

	const {
		modal: { isActive, isDiv },
		assetClass: { assetClass },
		backSelection: { period, investList },
	} = useSelector<RootState, RootState>((state) => state);

	const dispatch = useDispatch();

	const initSearchItem = () => {
		setSearchedList([]);
		setSearchKey("");
		setWarningText(warningList[0]);
	};

	// 자산 종류 변경
	const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
		setCategorySearchLoading(true);
		initSearchItem();
		const newCategory = e.target.value;
		setSelectedCategory(newCategory);
		const filteredAC = assetClass.filter((item) => item.index === newCategory);
		setFilteredAssetClass(filteredAC);
		setWarningText(warningList[1]);
		setCategorySearchLoading(false);
	};

	// 자산명 텍스트 입력
	const searchAsset = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchKey(input);
		const keyword = input.toUpperCase();
		if (keyword.length === 0) setWarningText(warningList[1]);
		if (keyword.length >= 1) {
			const picked = selectedAssetList.map((a) => a.nameticker);
			const array = filteredAssetClass.filter(
				(item) =>
					(item.name.search(keyword) !== -1 || item.ticker.search(keyword) !== -1) &&
					!picked.includes(`${item.name} ${item.ticker}`)
			);
			if (array.length === 0) setWarningText(warningList[3]);
			setSearchedList(array);
		} else {
			setSearchedList([]);
		}
	};

	// 검색된 자산 중 하나 선택
	const selectValue = (item: Asset) => {
		if (selectedAssetList.length >= 10) {
			return alert("자산은 10개까지만 선택 가능합니다.");
		}
		const newStartDate = item.startDate.slice(0, 10);
		const newEndDate = item.endDate.slice(0, 10);

		const newItem: AssetInvested = {
			nameticker: `${item.name} ${item.ticker}`,
			name: item.name,
			index: selectedCategory,
			ticker: item.ticker,
			startDate: newStartDate,
			endDate: newEndDate,
		};

		const newCalendarPeriod: Calendar<string> = {
			start: selectedPeriod.start,
			end: selectedPeriod.end,
		};

		if (newCalendarPeriod.start <= newStartDate) newCalendarPeriod.start = newStartDate;
		if (newCalendarPeriod.end >= newEndDate) newCalendarPeriod.end = newEndDate;

		setSelectedAssetList([...selectedAssetList, newItem]);
		setSelectedPeriod(newCalendarPeriod);
		initSearchItem();
	};

	// 선택완료 버튼 클릭
	const decideInvestList = () => {
		if (selectedAssetList.length > 10) {
			return alert("자산은 최대 10개까지 선택 가능합니다.");
		}
		if (selectedAssetList.length < 2) {
			return alert("자산은 최소 2개 선택해야 합니다.");
		}
		dispatch(changeInvestList(selectedAssetList));
		dispatch(changePeriod(selectedPeriod));
		dispatch(offModal());
	};

	// X표 닫기 버튼 클릭
	const closeModal = () => {
		initSearchItem();
		setSelectedPeriod(period);
		setSelectedAssetList(investList);
		setSelectedCategory("");
		dispatch(offModal());
	};

	useEffect(() => {
		closeModal();
	}, []);

	return isActive && isDiv ? (
		<SearchModalViewer
			closeModal={closeModal}
			changeCategory={changeCategory}
			searchAsset={searchAsset}
			searchedList={searchedList}
			categorySearchLoading={categorySearchLoading}
			selectValue={selectValue}
			searchKey={searchKey}
			warningText={warningText}
			selectedCategory={selectedCategory}
			decideInvestList={decideInvestList}
			selectedAssetList={selectedAssetList}
			setSelectedAssetList={setSelectedAssetList}
		/>
	) : null;
};

export default SearchModalContainer;
