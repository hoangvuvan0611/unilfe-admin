import FilterBox from "../../../components/admin/filterBox/FilterBox.tsx";
import { IoIosAdd } from "react-icons/io";
import EnhancedTable from "../../../components/admin/enhancedTable/EnhancedTable.tsx";
import type {Room} from "../../../models/room.ts";
import { Checkbox, TableCell } from "@mui/material";
import { useState } from "react";
import CreateRoomBox from "./createRoom/CreateRoomBox.tsx";

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'Id',
    },
    {
        id: 'roomCode',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Mô tả',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Địa chỉ',
    },
    {
        id: 'price',
        numeric: false,
        disablePadding: false,
        label: 'Giá',
    },
    {
        id: 'state',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái thuê',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Hoạt động',
    },
    {
        id: 'owner',
        numeric: false,
        disablePadding: false,
        label: 'Chủ nhà',
    },
    {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Ngày thêm',
    },
    {
        id: 'createdBy',
        numeric: false,
        disablePadding: false,
        label: 'Người thêm',
    },
    {
        id: 'updatedAt',
        numeric: false,
        disablePadding: false,
        label: 'Lần cuối sửa',
    },
    {
        id: 'updatedBy',
        numeric: false,
        disablePadding: false,
        label: 'Người sửa',
    },
];

const rooms = [{
    id: '1',
    title: 'Tro test',
    description: 'Phong tro tang 2',
    price: '2000000',
    area: '15,4',
    roomTypeId: '123',
    roomType: '',
    address: 'Thi tran Trau quy',
    contactPhone: '0398128889',
    contactName: 'Bac Phuong chu nha',
    ownerName: 'Vu Viet Phuong',
    ownerId: '234545345',
    rating: 3.2,
    totalView: 2314234,
    totalFavorites: 23543452544,
    status: 'ACTIVE',
    state: 'AVAILABLE',
    availableFrom: '20/08/2025',
    availableTo: '25/08/2025',
    createdAt: '20/08/2025',
    updatedAt: '20/08/2025',
    createdBy: '20/08/2025',
    updatedBy: '20/08/2025',
}];

export default function Room() {
    const [openModal, setOpenModal] = useState(false);


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div className={'room p-2'}>
            <div className={'filter-box-button flex items-center my-2' }>
                <button
                    type="button"
                    onClick={handleOpenModal}
                    className={'flex items-center justify-center'}
                >
                    <IoIosAdd width={20} height={20}/>
                    <text className={'text-xs'}>
                        Thêm mới
                    </text>
                </button>
            </div>
            <div className={'filter-box my-2'}>
                <FilterBox />
            </div>
            <div className={'room-table my-2'}>
                <EnhancedTable<Room>
                    headCells={headCells}
                    rows={rooms}
                    numSelected={1}
                    keyExtractor={(room) => room.id}
                    renderRow={(room: Room) => (
                        <>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="success"
                                />
                            </TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.title}</TableCell>
                            <TableCell>{room.description}</TableCell>
                            <TableCell>{room.address}</TableCell>
                            <TableCell>{room.price}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                            <TableCell>{room.id}</TableCell>
                        </>
                    )}
                />
            </div>

            {/* Modal them moi phong tro */}
            <CreateRoomBox isOpen={openModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}