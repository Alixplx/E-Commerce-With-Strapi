import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import IconsData from "../../Data/IconsData"


const Icons = () => {

    const theme = useTheme()

    return (

        <Container>

            <Container sx={{bgcolor: theme.palette.mode === "dark" ? "#000" : "#FFF"}}>

                <Stack divider={useMediaQuery('(min-width:600px)')? <Divider orientation='vertical' flexItem /> : null} flexWrap={"wrap"} sx={{mt: 3}} direction={"row"}>

                    {

                        IconsData.map((icon) => {
                            
                            return (
                                
                                <Box key={icon.id} sx={{width: 150 ,display: "flex", alignItems: "center", justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left"
                                    ,flexGrow: 1, gap: 3, py: 1}}>
                                    
                                    {icon.icons}
                                    <Box>

                                        <Typography variant='h5'>{icon.title}</Typography>
                                        <Typography variant='body2'>{icon.subTitle}</Typography>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Stack>
            </Container>
        </Container>
    )
}

export default Icons