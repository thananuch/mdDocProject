import  React ,{useState} from 'react';
import { ThemeProvider, createTheme, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, AppBar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AccountCircle } from '@mui/icons-material';
import { FcAreaChart, FcComboChart, FcStatistics } from "react-icons/fc";
import MainPage from '../../module/main/mainPage';
import { TreeItem  } from '../../components/treeview/TreeView';
import { TbDatabaseSearch } from "react-icons/tb";
import { MdOutlineDirectionsBoat } from "react-icons/md";

const drawerWidth = 240;

const demoTheme = createTheme({
  palette: {
    mode: 'light', 
  },  typography: {
    fontFamily: 'PromptRegular, sans-serif',
  },
});


const NAVIGATION = [
  {
    title: 'รายการเมนู',
    icon: <FcComboChart size={35}/>,
    children: [
      { title: 'ข้อมูลโครงการตามปีงบประมาณ', icon: <FcStatistics size={25} /> , path :"fiscalyear"},
      { title: 'ระบบทะเบียนเรือ', icon: <FcStatistics size={25} /> },
    ],
  },
];

const data = [
  {
    id: 1,
    name: "ข้อมูลโครงการตามปีงบประมาณ",
    icon : <TbDatabaseSearch size={25}/>,
    subtrees: []
  }, {
    id: 2,
    name: "ระบบทะเบียนเรือ",
    subtrees: [
      {
        id: 1,
        name: "มูลค่าเรือแบ่งตามประเภทการใช้",
        subtrees: []
      },
      {
        id: 2,
        name: "เรือสนับสนุนการประมง (เรือกลเดินทะเล)",
        subtrees: []
      },
      {
        id: 3,
        name: "สรุปสถานการณ์เรือ (WHITE LIST)",
        subtrees: []
      }
    ]
  },
  {
    id: 3,
    name: "ระบบตรวจเรือ",
    icon : <MdOutlineDirectionsBoat  size={25}/>,
    subtrees: []
  }
];


export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState(null);


  const [activeId, setActiveId] = useState("ข้อมูลโครงการตามปีงบประมาณ");


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderSubtrees = (trees) => {
    return trees.map((tree) => {
      if (!tree.subtrees.length) {
        return <TreeItem key={tree.id} id={tree.id} title={tree.name}  icon = {tree.icon}  activeId={activeId}
            setActiveId={setActiveId}/>;
      }

      return (
        <TreeItem key={tree.id} id={tree.id} title={tree.name} icon = {tree.icon}  activeId={activeId}
            setActiveId={setActiveId}>
          {renderSubtrees(tree.subtrees)}
        </TreeItem>
      );
    });
  };

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
             MARINE DEPARTMENT
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
            className="font-promptRegu"
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
          <Toolbar />
          {renderSubtrees(data)}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              cursor:"pointer",
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          > 
          <Toolbar />
          <p className='mt-2 ml-1 text-gray-500 text-sm'>รายการเมนู</p>
          {renderSubtrees(data)}          
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            background:"#f4f9ff",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {activeId === "ข้อมูลโครงการตามปีงบประมาณ" && <MainPage/>}

        </Box>
      </Box>
    </ThemeProvider>
  );
}
