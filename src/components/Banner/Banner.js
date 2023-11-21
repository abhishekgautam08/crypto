import { Container, Typography, styled } from "@mui/material";
import Carousel from "./Carousel";

const BannerContainer = styled("div")({
  backgroundImage: "url(./banner2.jpg)",
});

const BannerContent = styled(Container)({
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
});

const Tagline = styled("div")({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

const TaglineTypography = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 15,
  fontFamily: "Montserrat",
  color:"white"
});

const SubtitleTypography = styled(Typography)({
  color: "darkgrey",
  textTransform: "capitalize",
  fontFamily: "Montserrat",
});

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Tagline>
          <TaglineTypography variant="h2">Crypto</TaglineTypography>
          <SubtitleTypography variant="subtitle2">
            Now track and get all information about your favorite Crypto
          </SubtitleTypography>
        </Tagline>
        <Carousel />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
