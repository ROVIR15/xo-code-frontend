import React from "react";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Fuse from 'fuse.js'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    minWidth: '59em',
    margin: '1.5em 0'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "80%",
  },
  searchField: {
    width: "100%",
  },
  iconButton: {
    padding: 10,
  },
  rounded: {
    borderRadius: '2em',
    border: '1px black solid',
    padding: theme.spacing(1,3)
  }
}));

function SearchBox(props){
    const [mainData, setMainData] = React.useState([]);
    const [selected, setSelectedData] = React.useState(null);
    const classes = useStyles();

    function handleChange(event, values){
      console.log(values);
      const options = {
        includeScore: true,
        keys: ['identification_id']
      }
      const fuse = new Fuse(mainData, options);

      const result = fuse.search(values)[0].item;
      console.log(result)
      setSelectedData(result);
    }

    React.useEffect(() => {
      if(props.data.length !== 0) {
        setMainData(props.data);
      }
    }, [props.data])

    const {change} = props;
    React.useEffect(() => {
      change(selected)
    }, [selected])

    function handleSearch(){
      props.next();
    }

    return (
        <div className={classes.root}>
            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                <Paper className={classes.rounded} elevation={0}>
                    <Autocomplete
                      freeSolo
                      disableClearable
                      options={mainData.map(option => option.identification_id)}
                      onChange={handleChange}
                      renderInput={params => (
                        <InputBase
                            {...params}
                            className={classes.searchField}
                            placeholder="Search Something Here"
                            endAdornment={
                              <IconButton type="submit" className={classes.iconButton} onClick={handleSearch} on aria-label="search">
                                <SearchIcon/>
                              </IconButton>                            
                            }
                            InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                      )}
                    />
                </Paper>
            </FormControl>
        </div>
    )
}

export default SearchBox;