import HolidayList from "./components/HolidayList"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import ButtonDropDown from "./components/ButtonDropDown"
import { InputLabel, TextField, MenuItem } from '@mui/material'
function App() {

  return (
    <div>
      {/* <Navbar/>
      <SearchBar/>
      <HolidayList/> */}
      {/* <ButtonDropDown/>
      <ButtonDropDown/> */}
      {/* <InputLabel id="label">Age</InputLabel> */}
      <TextField id="select" value="" select>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </TextField>
    </div>
  )
}

export default App
