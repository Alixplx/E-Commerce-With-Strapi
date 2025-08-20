import { ExpandMoreOutlined } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import accordionSbjects from "../../Data/Accordion"


const Links = () => {
  
    return (
        
        <>

            {accordionSbjects.map((link) => {
                        
                return (

                    <Box key={link.id} sx={{":hover .paper": {display: "block"} ,position: "relative" ,display: "flex", alignItems: "center", cursor: "pointer"}}>

                        <Typography variant="body2">{link.maniLink}</Typography>

                        <ExpandMoreOutlined sx={{fontSize: "16px", ml: 1}} />

                        <Box className="paper" 
                            sx={{display: "none" ,position: "absolute", top: "100%", minWidth: "150px", 
                            transform: "translateX(-50%)", left: "50%", zIndex: 111}}>

                            <Paper sx={{mt: 2}}>

                                <nav aria-label="secondary mailbox folders">

                                    <List>

                                        {

                                            link.subLink.map((item) => {

                                                return (

                                                    <ListItem key={item} disablePadding>

                                                        <ListItemButton>

                                                            <ListItemText primary={item} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>

                                </nav>
                            </Paper>
                        </Box>

                    </Box>
                )
            
            })}
        </>

    )
}

export default Links