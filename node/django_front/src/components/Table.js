import { useNavigate } from "react-router-dom"
import { CreateData } from "./Search1"
import { useEffect, useState, React, useMemo, useCallback } from "react"

import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const CreateTable = () =>  {  //Reactで非同期処理
    const [state, setState] = useState();   
    const [count, setCount] = useState(0);
    //setCount(count + 1)
    useEffect(() => {
        const y = async() => {
            const x = await CreateData()
            setState(x) 
        }
        y();
    },[]);

    var rows =  state 
    console.log(rows);
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.common.white,
          fontSize: 20,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 18,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));



    return (           
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>日付</StyledTableCell>
                    <StyledTableCell align="right">最高気温&nbsp;(℃)</StyledTableCell>
                    <StyledTableCell align="right">最低気温&nbsp;(℃)</StyledTableCell>
                    <StyledTableCell align="right">降水量&nbsp;(mm)</StyledTableCell>
                    <StyledTableCell align="right">降雪量&nbsp;(mm)</StyledTableCell>
                    <StyledTableCell align="right">天気概要</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows?.map((row) => (
                    <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <StyledTableCell component="th" scope="row">
                            {row.date}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.maxtemp}</StyledTableCell>
                        <StyledTableCell align="right">{row.mintemp}</StyledTableCell>
                        <StyledTableCell align="right">{row.precipitation}</StyledTableCell>
                        <StyledTableCell align="right">{row.snowfall}</StyledTableCell>
                        <StyledTableCell align="right">{row.summary}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
            </div>        
    )
}
export default CreateTable
