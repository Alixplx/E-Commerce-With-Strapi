import { AddShoppingCartOutlined, CloseOutlined } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import ProductDetails from "./ProductDetails"
import { useGetProductByNameQuery } from "../../redux/product"


const Main = () => {
    
    const allProductsAPI = "products?populate=*"
    const menCategoryAPI = "products?populate=*&filters[category][$eq]=men"
    const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women"
    const kidsCategoryAPI = "products?populate=*&filters[category][$eq]=kids"

    const [category, setCategory] = useState(allProductsAPI)
    const [open, setOpen] = useState(false)
    const theme = useTheme()

    const handleAlignment = (event, newValue) => {

        setCategory(newValue)
    }

    const handleClickOpen = () => {

        setOpen(true)
    }

    const handleClickClose = () => {

        setOpen(false)
    }

    

    const {data, error, isLoading} = useGetProductByNameQuery(category)


    if (isLoading) {

        return (

            <Typography variant="h6">Loading...</Typography>
        )
    }

    if (error) {

        return (

            <Typography variant="h6">{error.message}</Typography>
        )
    }
    
    if (data) {

        return (
    
            <Container>

                <Stack flexWrap={"wrap"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={4} mt={8}>

                    <Box>

                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">All Our New Arrivals in a Exclusion Brand Selection</Typography>
                    </Box>

                    <ToggleButtonGroup value={category} exclusive onChange={handleAlignment} aria-label="text alignment"
                        sx={{".Mui-selected": {border: "1px solid rgba(233, 69, 96, 0.5) !important", color: "#e94560", backgroundColor: "initial"} ,gap: 1 }}>

                        <ToggleButton sx={{color: theme.palette.text.primary}} className="myButton" value={allProductsAPI} aria-label="left aligned">All Products</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary}} className="myButton" value={menCategoryAPI} aria-label="centered">Men Category</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary}} className="myButton" value={womenCategoryAPI} aria-label="right aligned">Women Category</ToggleButton>
                        <ToggleButton sx={{color: theme.palette.text.primary}} className="myButton" value={kidsCategoryAPI} aria-label="justified">Kids Category</ToggleButton>
                    </ToggleButtonGroup>

                </Stack>


                <Stack mt={10} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                    {

                        data.data.map((item) => {

                            return (

                                <Card key={item.id} sx={{maxWidth: 350,":hover .MuiCardMedia-root": {scale: "1.1", transition: "0.3s" }}}>

                                    <CardMedia sx={{height: 280}} image={`${item.productImg[0].url}`} />

                                    <CardContent>

                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                                            <Typography gutterBottom variant="h5" component="div">{item.productTitle}</Typography>
                                            <Typography variant="subtitle" component="p">{item.productPrice}</Typography>
                                        </Stack>

                                        <Typography variant="body2" color="text.secondary">{item.productDescription}</Typography>
                                    </CardContent>

                                    <CardActions sx={{justifyContent: "space-between"}}>

                                        <Button onClick={handleClickOpen} size="small" sx={{textTransform: "capitalize"}}> 
                                            
                                            <AddShoppingCartOutlined sx={{mr: 1}} fontSize="small" />
                                            Add To Cart
                                        </Button>

                                        <Rating name="read-only" value={item.productRating} readOnly precision={0.1} size="small" />
                                    </CardActions>

                                </Card>
                            )
                        })
                    }

                </Stack>


                <Dialog sx={{".MuiPaper-root": {minWidth: {xs: "100%", md: "45%"}}}} open={open} onClose={handleClickClose} 
                        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    
                    <IconButton onClick={handleClickClose} sx={{transition: "0.3s", padding: 2 ,position: "absolute", top: 0, right: 0}}>

                        <CloseOutlined />
                    </IconButton>

                    <ProductDetails />
                </Dialog>

            </Container>
        )
    }
}

export default Main