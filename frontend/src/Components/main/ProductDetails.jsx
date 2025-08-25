import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"


const ProductDetails = ({clickedProduct}) => {
    
    const [selectedImg, setSelectedImg] = useState(0)

    return (

        <Box key={clickedProduct.id} sx={{display: "flex", alignItems: "center", gap:4, flexDirection: {xs: "column", sm: "row"}}}>

            <Box sx={{display: "flex"}}>
                
                <img width={300} src={clickedProduct.productImg[selectedImg].url} alt="" style={{borderRadius: 4}} />
            </Box>

            <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
                
                <Typography variant="h5" sx={{my: 1}}>{clickedProduct.productTitle}</Typography>
                <Typography my={1} fontSize={"22px"} color={"crimson"} variant="h5">{clickedProduct.productPrice}</Typography>
                <Typography variant="body1">{clickedProduct.productDescription}</Typography>
                
                <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={2} my={2}>
                    {clickedProduct.productImg.map((item, index) => {
                        
                        return (
                            
                            <img style={{borderRadius: 3, cursor: "pointer"}} height={100} width={90} onClick={() => {setSelectedImg(index)}}
                                 src={item.url} key={item.id} borderradius={2} />
                        )
                    })}
                </Stack>

                <Button sx={{textTransform: "capitalize", my: 2}} variant="contained"> 
                    
                    <AddShoppingCartOutlined sx={{mr: 1}} fontSize="small" />
                    Buy Now
                </Button>
            </Box>
        </Box>
    )
    
}

export default ProductDetails