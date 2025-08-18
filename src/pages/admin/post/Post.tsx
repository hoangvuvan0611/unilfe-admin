import { Checkbox, TableCell } from "@mui/material";
import EnhancedTable from "../../../components/admin/enhancedTable/EnhancedTable";
import type { Post } from "../../../models/post";
import type { PostStats } from "../../../types/postStats";
import { BiHelpCircle } from "react-icons/bi";
import FilterBox from "../../../components/admin/filterBox/FilterBox";

const statsItems: PostStats[] = [
    {
        id: "totalPost",
        title: "Tổng số bài đăng",
        subtitle: "Số lượng bài đăng trong 30 ngày",
        value: <div>1</div>,
        cssStyle: "bg-lime-500",
        textColor: "text-white",
    },
    {
        id: "totalWaiting",
        title: "Chờ phê duyệt",
        subtitle: "Số lượng bài đăng đang ở trạng thái chờ phê duyệt",
        value: <div>100</div>,
        cssStyle: "bg-blue-500",
        textColor: "text-white",
    },
    {
        id: "totalReject",
        title: "Bị từ chối",
        subtitle: "Số lượng bài đăng không được phê duyệt",
        value: <div>1</div>,
        cssStyle: "bg-red-400",
        textColor: "text-white",
    },
    {
        id: "totalExpired",
        title: "Sắp hết hạn",
        subtitle: "Số lượng bài đăng sắp hết hạn 7 ngày",
        value: <div>1</div>,
        cssStyle: "bg-yellow-500",
        textColor: "text-white",
    },
];

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: 'Id',
    },
    {
        id: 'title',
        numeric: false,
        disablePadding: false,
        label: 'Tiêu đề',
    },
    {
        id: 'createdBy',
        numeric: false,
        disablePadding: false,
        label: 'Người đăng',
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
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Ngày đăng',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'trạng thái',
    },
    {
        id: 'active',
        numeric: false,
        disablePadding: false,
        label: 'Thao tác',
    }
];

const posts: Post[] = [
    {
        id: '1',
        title: 'Nhượng trọ tại Cửu Việt 2',
        body: 'string',
        price: '20342344',
        createdBy: 'vuvanhoang', 
        state: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        images: [
            "",
            ""
        ]
    }
];



export default function Post() {
    return (
        <div className="post p-2">
            {/* Hien thi thong tin so luong bai dang */}
            <div className="post-review grid grid-cols-6 gap-6">
                {statsItems?.map((item) => 
                    <div 
                        key={item.id}
                        className={`p-2 ${item.cssStyle} rounded-2xl shadow-2xl cursor-pointer`}
                    >   
                        <div className="flex justify-between items-center">
                            <div className={`text-sm ${item.textColor} text-shadow-2xs `}>{item.title}</div>
                            <div className="relative">
                                <div>
                                    <BiHelpCircle color={"white"}/>
                                </div>
                                <div className="absolute">

                                </div>
                            </div>
                        </div>
                        
                        <div className={`text-xs ${item.textColor} `}>({item.subtitle})</div>
                        <div className={`text-xl ${item.textColor} mt-1 font-bold`}>{item.value}</div>
                    </div>
                )}
            </div>

            {/* Box chua thong tin tim kiem */}
            <div className={'filter-box my-4'}>
                <FilterBox />
            </div>

            {/* Table chua thong tin danh sach bai dang */}
            <div className="my-4">
                <EnhancedTable<Post> 
                    headCells={headCells}
                    rows={posts}
                    numSelected={1}
                    keyExtractor={(post) => post.id}
                    renderRow={(post: Post) => (
                        <>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="success"
                                />
                            </TableCell>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.createdBy}</TableCell>
                            <TableCell>{post.price}</TableCell>
                            <TableCell>{post.createdAt.toLocaleString()}</TableCell>
                        </>
                    )}
                />
            </div>
        </div>
    );
}