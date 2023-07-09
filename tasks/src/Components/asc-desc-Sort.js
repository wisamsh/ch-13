import React, { useState, useEffect, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TaskContext from "../Context/tasks";
function SortAscDesc() {
    const { sortascdescTasks } = useContext(TaskContext);
    const [sortascDesc, setsortascDesc] = useState('asc');


    useEffect(() => {

    }, [sortascDesc]);
   
    const handleSortChange = (e) => {
       let asc = e.target.value;
        setsortascDesc(asc == 'desc' ? 'desc' : 'asc')
        sortascdescTasks(asc == 'desc' ? 'desc' : 'asc');
    }

    return (<>
        <FormControl fullWidth>
            <InputLabel
                id="sort_asc_desc_select-label"
                sx={{
                    zIndex: '0',
                }}
            > Asc Desc</InputLabel>
            <Select
                labelId="ssort_asc_desc_select-label"
                id="sort_asc_desc_select"
                value={sortascDesc}
                label="Filter"
                onChange={handleSortChange}>
                <MenuItem value={'asc'}>ASC</MenuItem>
                <MenuItem value={'desc'}>DESC</MenuItem>

            </Select>
        </FormControl>
    </>);

}
export default SortAscDesc;