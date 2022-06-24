import { memo, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Text from "../../../../../Common/FormInput/Text";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StringOption, strs, strPortion } from "../../../../../config/data/TS";
import Range from "../../../../../Common/FormInput/Range";
import { ItemInput } from "../../styles";
import { RangeBox, Container, ItemBox } from "./styles";
import Number from "../../../../../Common/FormInput/Number";
import { ConditionName } from "../../../../../utils/TS";
import { AccordionProps } from "../Strategy";

function ControlledAccordions({
	control,
	setValue,
	buyStrs,
	setBuyStrs,
	sellStrs,
	setSellStrs,
}: AccordionProps) {
	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const isIn = (arr: StringOption[], obj: StringOption) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].label === obj.label) return true;
		}
		return false;
	};

	const onBuyStrCheck = (str: StringOption) => {
		if (buyStrs.length < 15) {
			if (isIn(buyStrs, str)) {
				setBuyStrs(buyStrs.filter((a: StringOption) => a.label !== str.label));
			} else {
				setBuyStrs([...buyStrs, str]);
			}
		} else {
			alert("전략은 15개까지 선택 가능합니다.");
		}
	};

	const onSellStrCheck = (str: StringOption) => {
		if (sellStrs.length < 15) {
			if (isIn(sellStrs, str)) {
				setSellStrs(sellStrs.filter((a: StringOption) => a.label !== str.label));
			} else {
				setSellStrs([...sellStrs, str]);
			}
		} else {
			alert("전략은 15개까지 선택 가능합니다.");
		}
	};

	return (
		<div>
			<Accordion expanded={expanded === "buy"} onChange={handleChange("buy")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>매수 전략</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Container>
						<ItemBox>
							{strs.map((a, i) => (
								<Accordion key={i}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls={`panel${i + 1}a-content`}
										id={`panel${i + 1}a-header`}
									>
										<Typography>{a.name}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										{a.str.map((str: StringOption, idx) => (
											<div
												key={idx}
												style={{ marginBottom: "10px" }}
												onClick={() => onBuyStrCheck(str)}
											>
												{str.label}
											</div>
										))}
									</AccordionDetails>
								</Accordion>
							))}
						</ItemBox>
						<RangeBox>
							{buyStrs.map((a: StringOption, i: number) => (
								<div key={i}>
									<div>
										{ConditionName[i]} : {a.label}
									</div>
									<Range
										control={control}
										name={`buy ${a.value}`}
										step={10}
										setValue={setValue}
										marks={strPortion}
									/>
								</div>
							))}

							<Text name="buyLogic" label="로직" control={control} />
						</RangeBox>
					</Container>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "sell"} onChange={handleChange("sell")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>매도 전략</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Container>
						<ItemBox>
							{strs.map((a, i) => (
								<Accordion key={i}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls={`panel${i + 1}a-content`}
										id={`panel${i + 1}a-header`}
									>
										<Typography>{a.name}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										{a.str.map((str, idx) => (
											<div
												key={idx}
												style={{ marginBottom: "10px" }}
												onClick={() => onSellStrCheck(str)}
											>
												{str.label}
											</div>
										))}
									</AccordionDetails>
								</Accordion>
							))}
						</ItemBox>
						<RangeBox>
							{sellStrs.map((a: StringOption, i: number) => (
								<div key={i}>
									<div>
										{ConditionName[i]} : {a.label}
									</div>
									<Range
										control={control}
										name={`sell ${a.value}`}
										step={10}
										setValue={setValue}
										marks={strPortion}
									/>
								</div>
							))}
							<Text name="sellLogic" label="로직" control={control} />
						</RangeBox>
					</Container>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "timecut"} onChange={handleChange("timecut")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>타임컷 전략</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ItemInput gap="20px">
						<Number
							name={"holdMin"}
							control={control}
							min={1}
							label={"최소 보유일"}
							defaultValue={1}
						/>
						<Number
							name={"holdMax"}
							control={control}
							label={"최대 보유일"}
							min={1}
							defaultValue={5}
							helperText={"최소 보유일보다 크거나 같아야 합니다."}
						/>
					</ItemInput>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default memo(ControlledAccordions);
