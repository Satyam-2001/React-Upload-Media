import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import ExploreIcon from '@mui/icons-material/Explore';
import DownloadIcon from '@mui/icons-material/Download';
import CreateIcon from '@mui/icons-material/Create';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

const drawerWidth = 240;

const Item = (props) => {

    const [isAcive, setIsActive] = useState(false);

    const style = {
        bgcolor: 'secondary.main',
        borderLeft: '3px solid',
        borderColor: 'primary.main',
        color: 'white',
    }

    useEffect(() => {
        if (isAcive) {
            document.title = `${props.text} - React Upload Media`
        }
    }, [isAcive])

    return (
        <ListItem disablePadding sx={isAcive ? style : undefined}
        >
            <NavLink to={`/${props.text}`} style={{ textDecoration: 'none', width: '100%' }} className={({ isActive }) => setIsActive(isActive)} >
                <ListItemButton>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.text} />
                </ListItemButton>
            </NavLink>
        </ListItem>
    )
}


export const SideDrawer = (props) => {

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <img src={require('../../images/icon.png')} height='40px'/>
                <Typography component={'h1'} sx ={{fontWeight: '700', textTransform: 'uppercase', color: 'primary.main', fontSize: 'large', marginLeft: '0.4rem'}}>Upload Media</Typography>
            </ Toolbar>
            <Divider />
            <List>
                <Item icon={<ArticleIcon />} text={'Overview'} />
                <Item icon={<DownloadIcon />} text={'Installation'} />
                <Item icon={<CreateIcon />} text={'Usage'} />
                <Item icon={<ExploreIcon />} text={'Explore'} />
            </List>
        </Drawer>
    )
}
