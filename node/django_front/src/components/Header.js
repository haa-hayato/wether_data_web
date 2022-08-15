import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h5" onClick={() => {navigate('/')}}>天気×旅行のWEBサービス</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header