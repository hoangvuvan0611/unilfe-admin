import type {HeadCells} from "./EnhancedTable.tsx";
import {Checkbox, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";

interface EnhancedTableHeadProps {
    headCells: HeadCells[];
    numSelected: number;
    rowCount: number;
}
export default function EnhancedTableHead({headCells, numSelected, rowCount}: EnhancedTableHeadProps) {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox
                        sx={{width: '10px', height: '10px'}}
                        color="success"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells?.map((headCell: HeadCells) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        // sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            // active={orderBy === headCell.id}
                            // direction={orderBy === headCell.id ? order : 'asc'}
                            // onClick={createSortHandler(headCell.id)}
                            sx={{fontSize: '12px'}}
                        >
                            {headCell.label}
                            {/*{orderBy === headCell.id ? (*/}
                            {/*    <Box component="span" sx={visuallyHidden}>*/}
                            {/*        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}*/}
                            {/*    </Box>*/}
                            {/*) : null}*/}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}