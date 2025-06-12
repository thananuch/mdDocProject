import  React ,{useState} from 'react';
import { ThemeProvider, createTheme, Container, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, AppBar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';
import { FcComboChart, FcStatistics } from "react-icons/fc";

const drawerWidth = 240;

const demoTheme = createTheme({
  palette: {
    mode: 'light', // หรือ 'dark' ได้
  },  typography: {
    fontFamily: 'PromptRegular, sans-serif',
  },
});

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const NAVIGATION = [
  {
    title: 'รายการเมนู',
    icon: <FcComboChart size={35}/>,
    children: [
      { title: 'ข้อมูลโครงการตามปีงบประมาณ', icon: <FcStatistics size={25} /> },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Chart</Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {NAVIGATION.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            <hr/>
            {item.children &&
              item.children.map((child) => (
                <ListItem button key={child.title} sx={{ pl: 4 }}>
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText primary={child.title} />
                </ListItem>
              ))}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={demoTheme} >
      <Box sx={{ display: 'flex' }}>
         <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ระบบสารสนเทศเพื่อการบริหารจัดการ
          </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="navigation"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={8}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton height={150} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid item xs={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={3}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
