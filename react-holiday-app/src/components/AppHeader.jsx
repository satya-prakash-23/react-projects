import { AppBar, Toolbar } from '@mui/material'
import { NavMenuItem } from "./NavMenuItem"
import DeleteIcon from '@mui/icons-material/Delete';
import Person from '@mui/icons-material/Person'

export const AppHeader = () => {
  return (
    <div>
        <AppBar position="static" sx={{backgroundColor:"#abcdef"}}>
            <Toolbar disableGutters >
                <NavMenuItem displayIcon={<Person/>} displayName={"Manjari Prakash"}/>
                <NavMenuItem displayIcon={<DeleteIcon/>} displayName={"Menu 1"}/>
            </Toolbar>
        </AppBar>
    </div>
  )
}
