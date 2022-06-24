import styled from "styled-components";

export const Item = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MiniTitle = styled.div<{ mt?: string; mb?: string }>`
	width: 100%;
	font-weight: 700;
	font-size: 16px;
	margin-top: ${(props) => props.mt};
	margin-bottom: ${(props) => props.mb};
`;

export const ItemInput = styled.div<{ width?: string; gap?: string }>`
	width: 100%;
	display: flex;
	gap: ${(props) => (props.gap ? props.gap : "50px")};
`;

export const DropdownSlider = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
`;

export const DropdownGrider = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const SliderNextDropdown = styled.div`
	width: 55%;
`;
