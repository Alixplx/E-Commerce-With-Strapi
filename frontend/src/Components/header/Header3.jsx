import { KeyboardArrowRightOutlined, WindowOutlined, Man, Woman, Boy, MenuOutlined, CloseOutlined, ExpandMoreOutlined } from "@mui/icons-material"
import { Box, Button, Container, Menu, IconButton, MenuItem, Typography, useTheme, ListItemIcon, ListItemText, Drawer, Accordion, AccordionSummary, List, ListItem, ListItemButton, useMediaQuery } from "@mui/material"
import { useState } from "react"
import accordionSbjects from "../../Data/Accordion"
import Links from "./Links"


const Header3 = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        
        setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => {
        
        setAnchorEl(null)
    }
  
    const theme = useTheme();

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            
            return
        }
        
        setState({ ...state, [anchor]: open })
    }


    return (
    
        
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5}}>

            <Box>

                <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}
                    onClick={handleClick} sx={{ width: 222, bgcolor: theme.palette.myColor.main, color: theme.palette.text.secondary, }}>

                    <WindowOutlined />
                    
                    <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1,}}>Categories</Typography>
                    
                    <Box flexGrow={1} />

                    <KeyboardArrowRightOutlined />
                </Button>

                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                        slotProps={{"aria-labelledby": "basic-button",}} sx={{".MuiPaper-root": { width: 220,bgcolor: theme.palette.myColor.main,},}}>

                    <MenuItem onClick={handleClose}>

                        <ListItemIcon> <Man /> </ListItemIcon>
                        <ListItemText>Man</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>

                        <ListItemIcon> <Woman /> </ListItemIcon>
                        <ListItemText>Women</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>

                        <ListItemIcon> <Boy /> </ListItemIcon>
                        <ListItemText>Kids</ListItemText>
                    </MenuItem>
                </Menu>

            </Box>

            {useMediaQuery('(min-width:1000px)') && (

                <Links />
            )}

            {useMediaQuery('(max-width:1000px)') && (

                <IconButton onClick={toggleDrawer("top", true)}>

                    <MenuOutlined />
                </IconButton>
            )}

            <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer("top", false)} sx={{".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {height: "100%"}}}>
                
                <Box sx={{ maxWidth: 444, mx: "auto", mt: 6, position: "relative", pt: 10}}>

                    <IconButton onClick={toggleDrawer("top", false)} sx={{":hover": {rotate: "180deg", color: "red" }, transition: "0.3s",
                                position: "absolute", top: 0, right: 0}}>

                        <CloseOutlined />
                    </IconButton>

                    {accordionSbjects.map((item) => {

                        return (

                            <Accordion key={item.id} elevation={1} sx={{bgcolor: "initial", mt: 2, width: 450}}>

                                <AccordionSummary expandIcon={ <ExpandMoreOutlined /> } aria-controls="panella-content" id="panella-header">

                                    <Typography>{item.maniLink}</Typography>
                                </AccordionSummary>

                                <List sx={{py: 0, my: 0}}>

                                    {

                                        item.subLink.map((link) => {

                                            return (

                                                <ListItem key={link} sx={{py: 0, my: 0}}>

                                                    <ListItemButton>

                                                        <ListItemText primary={link} />
                                                    </ListItemButton>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>

                            </Accordion>
                        )
                    })}

                </Box>
            </Drawer>

        </Container>
    )
}

export default Header3