import {Box, Paper, Table, TableBody, TableContainer, TableRow} from "@mui/material";
import EnhancedTableHead from "./EnhancedTableHead.tsx";
import EnhancedTableToolbar from "./EnhancedTableToolbar.tsx";

export interface HeadCells {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
    renderHead?: () => React.ReactNode;
}

export interface EnhancedTableProps<T> {
    headCells: HeadCells[];
    keyExtractor: (row: T, index: number) => string;
    numSelected: number;
    renderRow: (row: T) => React.ReactNode;
    rows: T[];
}

export default function EnhancedTable<T> ({headCells, rows, renderRow, keyExtractor, numSelected}: EnhancedTableProps<T>) {
    return (
        <Box>
            <Paper sx={{ width: "100%" }}>
                <EnhancedTableToolbar numSelected={numSelected}/>
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            headCells={headCells}
                            numSelected={numSelected}
                            rowCount={3}
                        />
                        <TableBody>
                            {rows?.map((row: T, index: number) => {
                                return (
                                    <TableRow
                                        key={keyExtractor(row, index)}
                                        hover
                                        role='checkbox'
                                    >
                                        {renderRow(row)}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}