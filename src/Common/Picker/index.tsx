import { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Desc, IMG, ImgContainer, Title } from "./styles";

interface Props {
	title: string;
	desc: string[];
	img: "*.png";
	link: string;
}

const Picker = ({ title, desc, img, link }: Props) => {
	return (
		<Link to={link}>
			<Container>
				<ImgContainer>
					<IMG src={img} />
				</ImgContainer>
				<div style={{ width: "100%" }}>
					<Title>{title}</Title>
					{desc.map((a, i) => (
						<Desc key={i}>{a}</Desc>
					))}
				</div>
			</Container>
		</Link>
	);
};

export default memo(Picker);
