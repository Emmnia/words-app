import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from "@mui/material/Divider";
import { HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink, HeaderButton } from './Header.styled';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const HeaderBurger = ({ onClick, isDarkMode, onToggle }) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown'
            && (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                    mr: 2,
                }
                }
            >
                <MenuRoundedIcon fontSize="large" />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box sx={{
                    p: 2,
                    height: 1,
                    backgroundColor: "rgba(208, 208, 230, 0.95)",
                }}>

                    <IconButton sx={{ mb: 2 }}>
                        <CloseRoundedIcon onClick={toggleDrawer(false)} fontSize="medium" />
                    </IconButton>

                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ mb: 2 }}>
                        <HeaderNav>
                            <HeaderNavList>
                                <HeaderNavItem><HeaderNavLink to="/" data-content="Home">Home</HeaderNavLink></HeaderNavItem>
                                <HeaderNavItem><HeaderNavLink to="/" data-content="Words">Words</HeaderNavLink></HeaderNavItem>
                                <HeaderNavItem><HeaderNavLink to="game" data-content="Cards">Cards</HeaderNavLink></HeaderNavItem>
                                <HeaderNavItem><HeaderButton type="button" onClick={onClick}>WOTD</HeaderButton></HeaderNavItem>
                                <HeaderNavItem><ThemeToggle isDarkMode={isDarkMode} onToggle={onToggle} /></HeaderNavItem>
                            </HeaderNavList>
                        </HeaderNav>
                    </Box>

                </Box>

            </Drawer>
        </>
    );
}