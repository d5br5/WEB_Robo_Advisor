import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
import Dropdown from "../../../../Common/FormInput/DropDown";
import Number from "../../../../Common/FormInput/Number";
import Slider from "../../../../Common/FormInput/Slider";
import Date from "../../../../Common/FormInput/Date";
import { MiniTitle, ItemInput, DropdownGrider } from "../styles";
import { fee, slippage, universe, buyPortion } from "../../../../config/data/TS";
import { FC, memo } from "react";
import { validLastDay, validToday } from "../../../../utils/TS";
import dayjs from "dayjs";
import {
	StepBody,
	StepContainer,
	StepNum,
	StepTitle,
	TitleContainer,
} from "../../../../styles/form";

interface Props {
	control: Control;
	setValue: UseFormSetValue<FieldValues>;
}

const Basic: FC<Props> = ({ control, setValue }) => {
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 1.</StepNum>
				<StepTitle>기본 입력</StepTitle>
			</TitleContainer>

			<StepBody>
				<MiniTitle>기본 정보</MiniTitle>
				<Dropdown name={"Universe"} label="유니버스" control={control} options={universe} />
				<ItemInput gap="20px">
					<DropdownGrider>
						<Dropdown name={"Fee"} label="수수료" control={control} options={fee} />
					</DropdownGrider>
					<DropdownGrider>
						<Dropdown name={"Slippage"} label="슬리피지" control={control} options={slippage} />
					</DropdownGrider>
				</ItemInput>
				<ItemInput gap="20px">
					<Number
						name={"InitBalance"}
						control={control}
						label={"초기 운용 금액"}
						min={10}
						defaultValue={2000}
						endadorn="만 원"
					/>
					<Number
						name={"MaxHoldNum"}
						control={control}
						label={"최대 보유 종목 수"}
						min={1}
						max={50}
						defaultValue={10}
						endadorn="개"
					/>
				</ItemInput>

				<MiniTitle mt="10px">종목당 매수 비중</MiniTitle>
				<Slider
					name={"OneStockWeight"}
					control={control}
					setValue={setValue}
					min={5}
					max={100}
					step={5}
					defaultValue={10}
					marks={buyPortion}
				/>

				<MiniTitle mt="10px">운용 기간</MiniTitle>
				<ItemInput gap="20px">
					<Date
						control={control}
						name="PeriodStart"
						min={"1985-01-01"}
						max={dayjs().subtract(1, "day").format("YYYY-MM-DD")}
						label="시작일"
						defaultValue={validLastDay}
						trading
					/>
					<Date
						control={control}
						name="PeriodEnd"
						label="종료일"
						min={"1985-01-01"}
						max={dayjs().subtract(1, "day").format("YYYY-MM-DD")}
						defaultValue={validToday}
						trading
					/>
				</ItemInput>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Basic);
