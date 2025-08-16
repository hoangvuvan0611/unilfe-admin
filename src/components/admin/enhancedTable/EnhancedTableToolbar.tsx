import {alpha, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export interface EnhancedTableToolbarProps {
    numSelected : number;
}

export default function EnhancedTableToolbar({numSelected }: EnhancedTableToolbarProps) {

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 2},
                fontSize: '13px',
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%', fontSize: '13px' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} đã chọn
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
                    variant="body2"
                    id="tableTitle"
                    component="div"
                >
                    Danh sách phòng trọ
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Xóa">
                    <IconButton>
                        <DeleteIcon sx={{width: '20px'}}/>
                    </IconButton>
                </Tooltip>
            ) : (
                <></>
            )}
        </Toolbar>
    );
}