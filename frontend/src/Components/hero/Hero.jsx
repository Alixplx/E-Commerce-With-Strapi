import { ArrowForwardOutlined } from "@mui/icons-material"
import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./style.css"
import "swiper/css"
import "swiper/css/pagination"
import sliderData from "../../Data/Sliders"



const Hero = () => {
    
    const theme = useTheme()

    return (
    
        <Container sx={{mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2}}>

            <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} loop={true} className="mySwiper">

                {

                    sliderData.map((item) => {

                        return (

                            <SwiperSlide key={item.id} className="slider-image">

                                <img src={item.link} alt="" />

                                <Box sx={{[theme.breakpoints.up("sm")]: {position: "absolute", top: "30%" ,left: "10%", 
                                     textAlign: "left"}, [theme.breakpoints.down("sm")]: {pt: 4, pb: 6}}}>

                                    <Typography sx={{color: "#222"}} variant="h5">LIFESTYLE COLLECTION</Typography>
                                    <Typography sx={{color: "#222", fontWeight: 400, my: 1}} variant="h3">{item.text}</Typography>

                                    <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} alignItems={"center"}>

                                        <Typography color={"#333"} mr={1} variant="h5">SALE UP TO</Typography>
                                        <Typography color={"#D23F57"} mr={1} variant="h5">{item.off}</Typography>
                                    </Stack>

                                    <Typography sx={{color: "#000", fontWeight: 300, my: 1}} variant="body1">{item.freeShipping}</Typography>
                                    <Button sx={{px: 5, py: 1, mt: 2, backgroundColor: "#222", boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            color: "#fff", borderRadius: "1px", "&:hover": {bgcolor: "#151515", boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)"}}}
                                            variant="contained">

                                        Shop Now
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>

            <Box sx={{display: {xs: "none", md: "block", minWidth: "26%"}}}>

                <Box sx={{position: "relative"}}>

                    <img src="src/images/banner-17.jpg" alt="" width="100%" />
                    
                    <Stack sx={{position: "absolute", top: "50%", transform: "translateY(-50%)", left: 25}}>

                        <Typography variant="caption" sx={{color: "#2B3445", fontSize: "18px"}}>NEW ARRIVALS</Typography>
                        <Typography variant="caption" sx={{color: "#2B3445", lineHeight: "16px", mt: 1}}>SUMMER</Typography>
                        <Typography variant="caption" sx={{color: "#2B3445", lineHeight: "16px", mt: 1}}>SALE 20% OFF</Typography>

                        <Link href="#" underline="none"
                            sx={{color: "#2B3445", display: "flex", alignItems: "center", gap: "5px", transition: "0.2s", ":hover": {color: "#D23F57"}}}>

                            Shop Now
                            <ArrowForwardOutlined />
                        </Link>
                    </Stack>
                </Box>

                <Box sx={{position: "relative"}}>

                    <img src="src/images/banner-16.jpg" alt="" width="100%" />

                    <Stack sx={{position: "absolute", top: "50%", transform: "translateY(-50%)", left: 25}}>

                        <Typography variant="caption" sx={{color: "#2B3445", fontSize: "18px"}}>GAMING 4K</Typography>
                        <Typography variant="caption" sx={{color: "#2B3445", lineHeight: "16px", mt: 1}}>DESKTOP & LAPTOP</Typography>
                        <Typography variant="caption" sx={{color: "#2B3445", lineHeight: "16px", mt: 1}}>SALE 40% OFF</Typography>

                        <Link href="#" underline="none"
                            sx={{color: "#2B3445", display: "flex", alignItems: "center", gap: "5px", transition: "0.2s", ":hover": {color: "#D23F57"}}}>

                            Shop Now
                            <ArrowForwardOutlined />
                        </Link>
                    </Stack>
                </Box>

            </Box>

        </Container>        

    )
}

export default Hero