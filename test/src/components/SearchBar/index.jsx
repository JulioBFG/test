import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchBar = ({ onChange, value }) => {
  return (
    <Box>
      <TextField component="form" onChange={onChange} value={value}></TextField>
    </Box>
  );
};

export default SearchBar;
