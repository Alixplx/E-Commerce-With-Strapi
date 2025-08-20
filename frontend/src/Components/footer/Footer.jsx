import { Box, Typography } from "@mui/material"


const Footer = () => {
  
    return (
    
        <Box sx={{bgcolor: "#2B3445", py: 1.3, borderTopLeftRadius: 8, borderTopRightRadius: 8, mt: 12}}>

            <Typography justifyContent={"center"} display={"flex"} alignItems={"center"} color={"HighlightText"} variant="h6" sx={{fontSize: 18, p: 2}}>
                
                Designed & Developed By 
                <a style={{color: "#ec274eff", padding: "4px", marginTop: "-4px", textDecoration: "none", cursor: "pointer"}}>
                Ali Abdulrahman</a> In &copy;2025
            </Typography>
        </Box>
    
    )
}

export default Footer