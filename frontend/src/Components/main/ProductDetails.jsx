import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"


const ProductDetails = () => {
        
    return (

        <Box sx={{display: "flex", alignItems: "center", gap:4, flexDirection: {xs: "column", sm: "row"}}}>

            <Box sx={{display: "flex"}}>
                
                <img width={300} src="src\images\1\final.png" alt="" style={{borderRadius: 4}} />
            </Box>

            <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
                
                <Typography variant="h5" sx={{my: 1}}>Women's Fashion</Typography>
                <Typography my={1} fontSize={"22px"} color={"crimson"} variant="h5">$22.2</Typography>
                <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis rerum inventore consequuntur corrupti? Alias, autem?</Typography>
                
                <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={2} my={2}>
                    {['dsdsds','dsdsds'].map((item) => {
                        
                        return (
                            
                            <img style={{borderRadius: 3, cursor: "pointer"}} height={100} width={90} src={item} key={item} borderRadius={2} />
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