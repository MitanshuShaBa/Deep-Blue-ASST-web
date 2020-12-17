import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import { Avatar, Card, CardContent, Container } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:  'tomato', 
    transition: theme.transitions.create(['width', 'margin'],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
       
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '200px',
    marginTop: '5vh',
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navItems = [ {text : 'Household',icon : <HomeIcon />} , {text : 'Community',icon : <PeopleIcon />}]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Society Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navItems.map(({text,icon}, index) => (
            <ListItem button key={text}>
               <ListItemIcon>{icon}</ListItemIcon> 
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Container style={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>

      <Card className={classes.card}>
      <CardContent className={classes.cards}>
         
        <Avatar src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzzi65xDS734zskQnKU_U_g61BIW2ZqHoGQ&usqp=CAU" />
            <Typography variant= "body1" style={{marginTop: "1vh"}}>
              Local Services
            </Typography>
         
      </CardContent>
      </Card>  
      <Card className={classes.card}>
      <CardContent className={classes.cards}>
         
        <Avatar src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFRUXFxcXGBgYFxUVFxoYFxcXFhoYHRcYHSggGBslHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIGBwMFCAT/xABYEAABAgMEBAcJCgoIBgIDAAABAgMABBESITFBBQdRYQYTcYGRofAUIpKxs8HR0+EIFyMlMjVUcpPxNEJSc3SClKOy0hUYM0Rig4SiNlNVtMPEJGMWQ2T/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvAmAQUjGpVO2HsgH2ss4UmkNsdO2GpNcejbv5IDIDWEtZZw1Rs4dHnhQj74Bxir+EWuiXlJl2WVLPKU0soKkqRQ0zFYswKrd2Mclaz/nWd/PK80BbI1+yv0R/wAJv0wnv/Sv0R/wm48GtXVsxxHdGj20ocZQFPsore0q1RwJ2gpVygKzTQ6nTvAph9zQkuwhLJmpcKdWkXqo224tV+KqW6bzASY6/ZX6I/4TfpgGv2V+iP8AhN+mI1pXT+hJSaVIjRaXWW1Fp19SiXrQNlahdaNDXBQrS6l0YdJ6LktD6SVLuSaZ1mZDK2C44UlpKlrQofJNu8brkjbASr3/AKV+iP8AhNwp1+yv0R/wm/TEW1uqkJRxyQY0c0hwpaUmYSshSaqCiLFm+oSU1tfjRs+EWr6Wf06zJtISxLiVS+6EXEgOLSaVrQqJQmuyA2w1+yv0R/wm/TCe/wDSv0R/wm4irvCzQBcVLHRVJYApTMIV8MaXBVPlX0xK67RjHq1caGlnNFzEz/RonnUzakNtk/CcWUsXFQFO9C1HC+/CAkPv+yv0R/wm/TANfsr9Ef8ACb9MVprLspUwgaKOjjRZIKrRdBKQDgKWSlXhRJdV2g2HNFzUwrR6Z59t9KUN1KVKSQ0CAqhpQKUrDIwEmOv6V+iP+E36YPf9lfoj/hN+mItrG4IS3xdxDAkpubWELlrfGBAUQkLOwAnKlam6oMZ+EU/ojQ7wkBo1M4pATx7zqu/tKSFd7VJFbJBusjLfASIa/pX6I/4TfpgOv2V+iP8AhN+mK71j8EWmHZRyQCizPICmUGpUFGx3otX0PGIpU1qSImXDfV/Jo0a43LBBnZJtl2YKflqSpKisqrlQKXyIG2A2Q1+yv0R/wm/TCe/9K/RH/CbiKautHyg0ROTj0iibcZeSlKCSFFKg0mgIBpS2VYGG8N9BSjmiW9JMyZkHS6Gy0VKKVpNoXBVL7qggDBWOICXHX7K/RH/Cb9MA1+yv0R/wm/TGt4cO6I0a6ww7olDqXWEuKWhZQsVKkmicz3ta2hjEF1o8FWpB5pcsomWmWw81aNSmuKa4kUKSCb++ocKkOkOBnCVOkZVM02hTaVKUkJUQT3qinLkjeBVYrvUUr4oZGHwj1/8AmG6LEApALBBBANVuxhEffDiYYU1v6N/LugG/w9uqHudeXbZBb6dnbKGpFnk8XsgHN78c+2yGHd8nP2bocoWuTb2yhbeWeyAF0p4qRyRrP+dZ38+rzR1qE0v6d3JHN8zoBqf4TPyrqlpQ489UoICu8aUsUJBGKRlAbDhVrLbb0uzOSTpdZEu208mytAWA44VJo4kGoCkkKpjziHcPdYMp3Xo2Z0eQ4JVKwW7C2glKghPF98kAd5aFU1AiWHUVo7N6ar9dq/8Adwp1E6Pp/azXJba9XAQufTwdm5gzzk480HFca7K8UupWb1JtpSQAo1rQnE0IupGeGfDBOkNJImrPFsoLSGwR3wabXaqqzW+qlmg2gX0rFsjUVo7J6a8Nr1cB1FaOzemvDa9XAVVrc07LzukS/LOcY2W202rK0XprW5YB6olWntZMu3ptmelld0MCWSw7RK0Ksla1KADgT3w7xWw0pXMSz3iNH0/tZrktterhBqK0dk9NeG1d+7gIPMyPBkLXMCamFoNpQlUtrSQogmyFFAuFbu+pcKkxm1f8JZBrRcxJuzz0ktyaLiFtoeU4G7LNO+aRS/i1JPPdEyVqK0cMXpqm2216uFGonR//ADZrd37fq4CpdYDsqvilS+k359ffJVxyXUltIoRQuAYkquGyN/q54RSTWi5qUmJ1yTddeCkONoeUtKQGjUKbTdWwU0rgTE594rR2Ts1X67V37uHK1E6PzemqfXa9XAQzhjw2lUScmxKTLs7MMTCXxMPIcBFgqUE1WApQJUkUvFE44QumprQWlXROPzT0k8pKQ+yG1OVKQE1SpKFCtABXYB3oviZJ1E6PyemvDa9XDfeK0d/zZquy216vCAjLPDrRz2kZdbhLElo9lSZVJQta3HKJSDRKVWQAhJFo4oSTiQH6A1yNKmrUxJS7Lb1UvvISpThTZITaoKrA70UvurSJKrUTo/N6a39+36uBOonRxwemqfXa9XAQvQvDGW0bI6RZkpujqpm3KHinDabPFD/9jdkEJCwbVMLso82sXhfL6VkJZwzCm5xq52Wsu8WsnvS4k0KAcxU1sqIxArPPeK0dm7NV+u1f+7hTqJ0fT+1mt/ft+rgI5wt0hoHSTrLz+kXU8UyhsttsPd8ElSvlKauPfU5ohGszhY3pCYb4hBbl2Gw0ylWJAxURlWiRSpuSN8WynUVo44PTXLba9XEa1jaqZOQkHplpyYU4gt2QtSCk23EoNaIBwUc4Cc6i/mdqv/Me8oYsBFc+3tivtRaPihk49+95RXXFhBVYB0EEEAhFYYVUux2e2HK3QiB7fRAFjPPb5uSECrXJn22Q2uX4u3zckPXuxy9EAijZ5O3VC2M84G9+MMJy/F8W6AcFVuw2+yKE0CacL3Pzsz5ByL8WBTZsisNFavppvTytJKWzxJcdVZCl8ZRxpSBdYpiRnAWeE1vPNuhLRwz29s4RRphhnuhxSKQCEWbxhn22wAWrzzdtsajS3CiTlfwmZZaIvsqWm3y2ASo9EQfTOvDR7VeIQ9MHcni0V5V98PBMBZ9o4Z7e2cLZpeOffFBO629LTpKJCTCRtQ2uYWDtKqWRzphDwH4Q6R/C5gtIVil16iSPzLNU13ECAt7TPDTR8tXj5tlBH4gVbXzoRVXVG4kp1LraHGzaQ4lK0K2pUAQTzERQXC7U4JHR7sz3Sp51uyqylAQiwVBKsSSaA1rUYYRZepPSndGiWQTVTJUyr9Q1QPAUiAnVjPPxx55ycQ22t1xVlttJWsnJKRaJNMgBGUHI4Zb40msEfFk7t7lf8mqA141m6JH99bplc5/LCe+XonHu5uvI50fJwiqNT+r2T0nLPOzHG2kO2E2FhIpYSq8WTfUmJ17yWi64zFNvGj+SA3x1m6KP99bG25z+WAazdEjCdbpyOfyxo16kNF7Zj7UfywiNSGi9sxXZxo/kgN575eic55uvI5d/thTrO0Vh3a2Npo51d7GhVqS0XX+8UzPGj+SHK1I6L2zH2o/kgN+xrH0WpSUonGyVEJCQHKkk0FO92mNdrv8AmaZO9ny7cVJw14LMaN0vJsS9uwoy7htqCjaL6k4gC6iRFt68PmeZptZr9u3AY9RavihkD8t7yiosEJpFf6jB8Ts1/Le8oqJ+gnOAfBBBAJWMahXD74yKFYZapd0QC2hTqp5oRIpj07N0Fg459roK2rss/RAChXDp80YJ/SDTDS3XlhttsVUVYADx7gMYz1s8mXoigvdC8JlrmG5FKqNtpDjoB+UtV6QfqpoeVe4QDeFmu99a1IkEJabFQlxaQtw7wk96gY3EKPJhEQGs/SwNru1yv1WqdFmnVEQpSDHlgLr4F68VhSW9IoSUG7j20kKTvW2PlDemnIY3GuXRc07LpnpScd7mokuNtuK4sNqpR5PF/KTQ1IvuvGcc+VpF6e5/4Ql5p7Rr1FpSgrbCrxxajZdbO0VUk0/xKgF0NqEaFDMTi11yZSlAp9ddqvQInehtWui5b5Mohahfadq8bs+/qBzARvtBpsMpRUni6tEm8nizYCjvKUpPPHvpa5MvTAedxTbKColDTSRU1IQgAZ30AjxSHCiSmFcWxNS7q8kodQpV2YANTzRz5rt4UOzU+5L2yGJdVhKBcC4B36yM1VJA2AbzWvG3CCCCUkEFJBoQRgQR44Ds7TGjhMS70uvB5tbZP10lNeUVimvc7TykOzkmu4966EHIoJbcH+5voieaoeEbmkNHpU8bTrSyytWaykJUlR32VpqcyDFcAf0bwr2Nvu9Imh1AOq/2wF/FQI27oj/D0U0ZPV+iv3/5Sro39gi/PONDw+VXRk9TDuV/ySroCA+5xSe4pn9I/wDGi6LdtCnVTzRUfucV0kpn9I6+LRFt2Djn1ckAiRTH7t0Ku/DLPzQWq3Dn9EFbPJ4oBUqAGymUNApecNmyFsVvzy3QW63Z57oChtc/z7I/Ulv+5cifa7vmaZH+Jny7d8QDXKkDTsj9SW/7hyJ/rw+Zpk72afbtwGLUYPihk4i29d/mKviw6xXuotXxQyBjbe8oqLBSmkA6CCCAaowiU1vN9e1IdGNW7n3+2ALWVbtvm5YcoUvH37oKim6ETjfzdtsAqBW89GyOVdcTZGmJuv5TZHJxLdOqOqV43Y59tsUj7oLgktRRpFlJISkNvgYpoe8cPhFJOVEb4CkAYDdCndCJ34QCgV7YxY+oEKOlai4Bh0q5O9HjKYrdUdCag+CapdhU88mipgANg4hkG1aO5ZoeRKTnATPg1pUOT+kpat7TrDgGVHZdsEDkU2T+tElWqzyYndv5IpHgVNvtcKJ1py0ovF4EgGgSCHWlHYAgJT+sNsS7XNwtEjIraQr/AORMgtp2hBuW5uFklIO1Q2GA504Rz/Hzcw8DUOPOrHIpZI6iI15FO2EHjhBAdIe5+li3osrx419xQG4JQ3dzoMRr3ROj1NvSc8i5VC2VDJTauMb5++c8GLV4A6H7jkJaXUKLQ0Csf41d+v8A3KVGg12aK7o0U8pIqWVIeH6psqI/UUvogJfobSImWGXk/JdbQ4P1khVOvqjXawBTRk7S7/4r4/dKiOajNLcfolCFVKmHFsnbSvGJpyJWB+rEi4efNk9XHuV/ySoCCe5wSO4pn9I/8aItm1lXn83LFIah+EMrKyj6X5lllSnrQDjiUEp4tIqAd4N8Wh/+c6Lp+HStPzyPTASFQpeLu2EIi+89GyI6jhzo2t8/K7vhm/TjCr4c6Nyn5Wv55v0wEgJpdlt2Q4pAGymcR9PDnRlPw+V+2b9MMTw50b9PlaZfDN3ct8BU+uRVdOyN1O8lv+4cif68LtDzI3s+XbittaelWJnTck5LvNuoAl0lSFBaQoTCzSozoQeeLJ13fM0zttM1+3bgGai0/E7OXfveUVE/QqvbrivtRnzQzXC295RXVFhwCwQQQDVCsNCqXHm3w5RpCBNbzzboBtk457O2cKTW4c/bbCWjhnt7Zx4dOaYl5JovTDqWmxmo/KONEgXqVuAJgPeDZuPT2zhjrIWCFJBBBBSQCCCKEEHGoJileEuvkVKZKWqBgt8kA7w2g16VDkiHzWuPS670vobGxDLR/jCj1wE74W6jmnVlyQdDJNSWXAS2D/hWO+QNxCsbqC6IgrUhpOtCZYD8rjVWf4K9UahOtrTH0z9zL+rhV62dMZzn7mX9XAWhwL1JsS6g7OOCZWL0t2aMg7VA3uc9BtBi17eQF+zZ7I5ZTra0x9MP2Mv6uMT2tTS6wUmcUAbiUtsoVzKSgEcxgLy4Y8LZDRCnXbKFzjwTVCacYqykJRbV+I2APHQG+Ob+Een352YXMTC7TishclKRghI/FSPSTUkmNc84pSipSipSiSVEkkk4kk4mGAVgCzE+1N8FjPTyXFpJYliHVnIqB+DRvqRU7kmIpwc0G/PPol5dFpavBSnNaj+KkbeQCpIEdWcDODTOjpVMs1l3zi8C4s/KWdguoNgAEBvld9ybfRHn0jKpeZcYWO9cQpsjalaSk9RjR6Z4e6NlKh2caqLihB41YOyy3UjnpEF0zr4lU1EvLOvKyUspZTyilpXSBAaj3Ps4picnJJz5VLVP8bKy2um/vx4MXRpyTRMy7rC1WUOtqbUoUBAWkpurdW+OfOATs5Maab0g3KOpbddUXC2hfFJS6CharariBat44i4YRamvJFNDv0/KZ8qiAjp1H6Ozm5jwmf5IX3jtH0/C3+S2x/JEN4E6oVaRk25oTaWgsrFgtFdLC1I+VbFa2a4ZxuveAXWnd6fsD6yA241H6Oym5jwmf5IcrUbo/EzcxQ4G0zS79SIZw31Qq0dJuTRm0uhBQLAaKK21hHyrZwtVwjUcJR8R6K/OTvlRAWSNR2j6fhb/AIbP8kJ7x+jvpcx4TP8AJGik9RC3ENr7uSLaErpxJutAGn9pvj0n3Py/p6PsD6yA3klqY0e0626Jt8lC0rFVM0qlQUK0RhdG713muhpg5VZpv+HbikNY3AE6J4ir4e47jMGyizxfF/4jWvGdW+Lg1o/8Okf/AFSn8bMB69RavidkDG295RUWAhNIr/UWn4nZIxtveUVFgIVWAfBBBAJGNWN3P7N8PUIRJpcboDRcM+E7GjpVT7t+TaAaKWs4JByzJOQBjljhZwnmNIPF6YXaN4SkXIbT+SlOQ34nOJBri4UGe0gtCT8DLlTTYyqDRxf6yhjsSmIKBSAUb4Q1rAYWuUAHdCJ6oAIDfACoXxwA07YQlIATEq4FcAZvSaxxSLDIPfPLBCBtp+WrcOcjGLK1QauZF+UZnphCnlLK6IUfgk2HFoFUj5VbP4xI3RczbKQAlACUpFAAKCg/FAGAgIHKaOY0HLlmSlnZqZcF9lJUtxQFynHALLTQvoLs6VNTEFf1fad0ksuTr4ZQok8Wp1SkpGQQy2SkDC4kb74vq2KdVIakUvP3eyAqfQmomTRTul955QxSmy0g9FVU/WETjRHAnR8p/YSjSSPxynjFjkW5VXXEhXfhlnCpVQUwpABApuyp5ogGvAn+h5iuNpnyqInoTS/q2RBNeSvid/PvmfKogG6jyf6Hl6flPV+2X1xP6Cm6IHqNPxOx9Z7yy4nVnOnN5+WAgWvAn+h36/lM0+2R1xS/CT5j0V+cnPKiLr15H4nf+sz5ZEUpwl+Y9FfnJzyogOmtAgdysfmW6+AmPUN+GW/ljxaDSTLMH/6WrtveJjYKNRhWsBSPumf7h/qv/XiSa0P+HFbeLlP42YjHulk07gz/AAn/ANeJNrR/4dP5qU5+/ZgPVqN+aGa4W3q/aK6osMxX2otXxOzn373lFRP0Jp26oB8EEEAijSNVwlnixKTExm0y64kb0oKh0kCNrEY1kGmi50D6O5zd6YDkc33k1r0kwlawVgN0BaGneC6JPg4w8QOOmX2XVqzsKbdU2jkCSDTaTuir6Z5Rf+uVIGgpQf45a7/IXFAEwBWsGHLCkU7YQggClYK9EBMLSA6i1IiuhpYZVer9u5dE6Js8mXois9W+lO5ODiJmzbLSJhdmtm1ZedNK0NOWkRn+sArPR4P+oPqoC8rBxz6uSC1W7DbFG/1gFU/AB+0GvkoP6wBupo8D/UH1UBeXyeTxQWK3nHLdFHH3QKq/N4/aD6qEHugFUukB+0H1UBeVsm7POI5rC4Nrn5FyVbWlBWUG0qpAsLSo4X30ir/6wB/6eP2g+qhyvdAK/wCnj9oPqoDyt6iJwC6cZA5HRB7xc5WndrVeR2PUn3QCstHp/aD6qG/1gD/08cvdBr5KA869Q84RfOMkcjsbzSWqOYe0fJyiZhkKl1PqKiF0VxqwoUFKim+Nar3QCs5BP7QfVQD3QCq/N4/aD6qA8h1FTgu7ta3XOw86iZ36a1+9jN/WAP8A08ftB9VCn3QCqfgA/aD6qA8nvETav74yeUOeiJ1reYLWgXGlEEoTLJqMKpdaB8URAe6AVX5vA/1B9VGi4ba3jpCTdlTKBvjCjv8AjrdLC0r+TxYrWzTHOAtDUWn4oZIxtveUVFgpVWK91GK+KGRgLb1/+Yq6LDpALBBBANVuiNaxfmqd29zuV8ExJiaRHuHsqp7R04lAJUZd2yBiTYJpz0wgOQfHCCCz0QqQVEAAkm4AXk1y5YC/tc3zFK7bct5BcUD446E14NFGhZdCsUOsJPKllwHxRz1Z6IAAgVuwgrWAXQCjfCAXwUrC1ygOodSQB0NLVFQS9jh/buXRNVyyCbkJ33DowiF6kr9DSw3vV+3cidA2bjzdtsBjEu3T5CfBHRDUyqBihO64XdUZrJxz2ds4Cqtw590BiXLIOCE1+qPRCpl26fISKY3CMg73k2+mAprfhs9sBhEsgXlCafVF3VDlyyMkJr9UXRlt5Z+KEAs8nbqgMaJdGaE1zuHThDO5kY2E2fqjpwjOU2vN22QtvKl/a/kgMS5dv8hNcrh0wiJZGaE1+qL4yhNm/pgItckBgMqg3hCaZ96L+qHql26fISa4d6Iy26XZ+OECaX9PsgMSJZAxQmu2yPRCKlUHBCd9wv3YRmPfcm2AKpcebf7YBEhITQAAbAKdUOQDnCWDjns7Zw4KrAOggggEIjGVUu7Dl3Q9W7GER98BU/C7UgzMOqelXu57ZKlNlFtupvJTQgoGN142UF0Z+AepxiTeTMPu90OINUJsWG0qyXQklZFKgmg3VAMWd/D26oe515dtkBWHuhk00YjZ3S3/AAOxzhajrvhvpORl5cL0g2lxouJTZU0HgFlKik2SDS4Kv3xATw04MV/BGafoKK/wwFBYQC+L/PDTgx9EZ/YUfywieGnBjOUY/YUU/hgKBrBdjF+q4acGPojH7Cjq72HHhpwY+iM/sKP5YCSak7tDSx3vV3/DudcTpIrefu9sabgbPSr8q25JoShg2+LSlsNJFFqCqIFwNoKjcLxu5+22ALRw6+2cKU0vH3wopTdDU7+b274BU99eej0whVS7sOWFXjdj2xhUUp46+eACjp2+mESbXJs7ZQ0b/k5e2Hubse3VANUqz2w9kO4vp29soG+vPtshn8PbqgFCrV3Y+yFUbPJshXOvKBvfj2w3QAEVvz2+iGhVbuvbyQHdhn7IcqlPFTzQCK728dHo3wJTW8/d7YEY34wisbufttgC0cOvtnDwmkJdTd264EVz7e2AfBBBAITGNSa3j7/ZGQisMKqXY7IBbfTshEizj07N3JBYzz7XQBVrkz9EBWPuhlfFiP0lv+B2OcLMdH+6GTTRiBl3S3/A7HOFrogFJr2xhBdHv0BIJfmpdlZIS6802SmgVZWtKSRUEVodhi+16h9HC/j5yn12fUwHOpELXKHPiypSRgCR0GkMpnAdR6k79DSw3vc3w7nXE6SaXHp2+2ILqSNNDSx3vV+3cidUtXnDL0wCWTj1eflhylVuF8JbOGfa+CzS8c++AE3XHphCmt/Ywo77k8cBVS7HZ7YBSvp2emESLOPT5oLFL8/HADa5IBFC1h9/sh1vp2QhVZ83ohbGefa7kgGpFnH7vZCqFrDpgCrV3T6ICbPJ4oBQum7d6IaE0v6tkLYrecct0AXW7POAFX3Dp2QJVS4/fB8nkgs1vPN6YBLJxpzeflh4VWG2zhn2vhyU0gHQQQQDVGESK79voh0Y1CuHPv7bYBK5ZbfN7YcsUvGPj3QpUKdVPNDUihv5j5oCsfdCH4rQc+6W+bvHY5yp0x0d7ocj+jEfpLf8Dt0c4EQG34Gn4wk/0qX8qiOxkX447Nkcd8DT8YSf6VL+VRHYq7zdjt2QHE82PhF/WVz3mMIMZZwfCL+srxmMdemA6i1ID4nltxep9u5fE6UaG7o88QXUn8zSozq9zfDuRO0XY4+PfAASKddfPDUmtx5t8JTPLZt3w9ZBG2uHpgEXcbsdkKlII217c0Ii7HHbthCK3jDPfAANbstu3dDl3XjHZtgKhTbuhEXG/Hb5oBUCuOOfohtcstvm9sChXDn37vbDrQp1U80ALFN2z0QIvvOOzZDUimPNu3e2FXebsdvmgEJpcMPFDlJFNlM+2MCVCmymMMApecMt3bqgHIvN+Iy88Io0w592/wBkKu+4Y7dkKg08/pgCyKddfPAg1x7b4bTPLZ5/ZGSsAsEEEAihWGWqXHm3w5RpCBNbz90Alg459roCbVw5/Rywlo4dfm5YVQpePv8AbAVj7oVNNFoGXdLdPAdjnCuUdHe6FNdFoP8A/S3zd471xzlTOA2/A1PxhJ/pUv5VEdijveSOOuBqvjCT/SpfyqI7FTfj0emA4om1fCL+srxmMNnojNNj4Rf1leMxhtQHUepE00NLHKr1ft3InRTa5MvTEF1Iiuh5YbC9d/nuROlGzh0bPZAFvLPtfAE0vx2woR07YaFVu7H2QCkWuTxwWqXHHLfArvcOj0QoTW/HtlAJZIvzzgJtcmfohAqt3XthVCl46NvtgAGlx5vRywWDjn2ugSK3n7vbCWjh19s4BSqtw5+22Ad7yQKTS8ffAm+89HbOALJN+By9sFutwxz3QhVS7r2csOKKen0wCAWeTxQFNq/DZ6YEm1j0QijZu7D2QDreWfa/khUppCWOnbAhVe3a6AfBBBAJGNWN3P7N8ZCIBANNKboRGN/N22wtm+sKoVgK21/ypXosqSK8W80te5NFIr0rTHNJrWO2ZqUQ62tpxIWhaSlSTeFA3EGKb0xqDSpwmWm7DZNyHEWyncFhQqOUV3mAqngDKqd0lJIQKq7oaUfqoWFqPIEpUeaOv143Y+bfEI1fas5fRdXAovTChZLihZCUnEIRU2a5mpMThIpAcVaYllNPutrFFIcWgjYUqII6RHm8cdOawNVLGknC+24Zd80ClBNtC6XAqTUUVQUtA8oMR3g5qHabcC5uY45KTXi0JLaVU/KUSTTcKcsBLtT0qpvQ8olQoohxY+q46taTyFKgeeJq3159tkIy0EgAAAAAAAUAAuAAyEOUmsBj/h7dUPXh4odDUppACN+Pm3Q1W7DP2Q9SawogGqpTdlTzQiMb8cu22FCb6wqhWAYrG7n7bYddTd264VIpCWb69vvgGpxv5vbvhV43Yw9QrCJFIBE0p46+eGjfhl7YcU5w4wDXN2PbHdA315wqU0hFJrAM/h7dUZTBCJTSAdBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAf//Z" />
            <Typography variant= "body1" style={{marginTop: "1vh"}}>
              Notice Board
            </Typography>
         
      </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent className={classes.cards}>
         
        <Avatar src = "data:image/png;base64,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" />
            <Typography variant= "body1" style={{marginTop: "1vh"}}>
              Residents
            </Typography>
         
      </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent className={classes.cards}>
         
        <Avatar src = "data:image/png;base64,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" />
            <Typography variant= "body1" style={{marginTop: "1vh"}}>
              Emergency No's
            </Typography>
         
      </CardContent>
      </Card>
      </Container>
    </div>
  );
}
