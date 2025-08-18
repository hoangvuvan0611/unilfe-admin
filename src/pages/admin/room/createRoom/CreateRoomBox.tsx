import {Modal, Box, Button, Select, MenuItem, FormControl, InputLabel, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CustomTextField from "../../../../components/custom/CustomTextField";
import { useTheme } from '@mui/material/styles';

export interface CreateRoomBoxProps {
    isOpen: boolean,
    handleCloseModal: () => void,
}

interface CreateRoomForm {
    title: string;
    description: string;
    price: string;
    area: string;
    roomTypeId: string;
    address: string;
    contactPhone: string;
    contactName: string;
    ownerName: string;
    availableFrom: string;
    availableTo: string;
    images: File[];
}

const initialFormData: CreateRoomForm = {
    title: '',
    description: '',
    price: '',
    area: '',
    roomTypeId: '',
    address: '',
    contactPhone: '',
    contactName: '',
    ownerName: '',
    availableFrom: '',
    availableTo: '',
    images: []
};

const CreateRoomBox: React.FC<CreateRoomBoxProps> = ({isOpen, handleCloseModal}) => {

    const [formData, setFormData] = useState<CreateRoomForm>(initialFormData);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const theme = useTheme();

    const handleSubmit = () => {
        // Xử lý logic tạo mới phòng trọ ở đây
        console.log('Form data:', formData);
        
        // Giả lập API call
        setTimeout(() => {
            alert('Tạo phòng trọ thành công!');
            handleCloseModal();
        }, 1000);
    };

    const removeImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleInputChange = (field: keyof CreateRoomForm, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleClose = () => {
        handleCloseModal();
        setFormData(initialFormData);
        setPreviewImages([]);
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));

        // Tạo preview cho ảnh
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImages(prev => [...prev, e.target?.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 800,
        maxHeight: '90vh',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        overflow: 'auto',
    };

    return (
        <div className="createRoom">
            {/* Modal Tạo Mới Phòng Trọ */}
            <Modal
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                sx={{
                    '& .MuiBackdrop-root': {
                        backdropFilter: 'blur(4px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }
                }}
            >
                <Box sx={modalStyle}>
                    {/* Header */}
                    <div className={`sticky z-50 top-0 border-b border-gray-200 px-6 py-1 flex justify-between items-center `}
                        style={{backgroundColor: theme.palette.background.default}}
                    >
                        <Typography variant="body1" className="font-semibold">
                            Thêm Phòng Trọ Mới
                        </Typography>
                        <IconButton onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                            <IoClose size={24}/>
                        </IconButton>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 space-y-6">
                        {/* Upload Ảnh */}
                        <div>
                            <Typography variant="body2" className="mb-3 text-gray-700">
                                Hình Ảnh Phòng Trọ
                            </Typography>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="mb-4 block w-full bg-blue-100 p-2 rounded-xl text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-200 file:border-none"
                                />
                                
                                {/* Preview Images */}
                                {previewImages.length > 0 && (
                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        {previewImages.map((src, index) => (
                                            <div key={index} className="relative">
                                                <img
                                                    src={src}
                                                    alt={`Preview ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                                <button
                                                    onClick={() => removeImage(index)}
                                                    className="absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Thông Tin Cơ Bản */}
                        <div>
                            <Typography variant="body2" className="mb-3 text-gray-700">
                                Thông Tin Cơ Bản: 
                            </Typography>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <CustomTextField
                                    label="Tên Phòng"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.title}
                                    // sx={{
                                    //     "& .MuiInputLabel-root": {
                                    //     fontSize: "14px",   // label khi bình thường
                                    //     color: "green",
                                    //     },
                                    //     "& .MuiInputLabel-root.Mui-focused": {
                                    //     fontSize: "16px",   // label khi focus
                                    //     color: "green",
                                    //     },
                                    //     "& .MuiInputLabel-shrink": {
                                    //     fontSize: "12px",   // label thu nhỏ (khi có value hoặc focus)
                                    //     },
                                    // }}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    placeholder="VD: Phòng trọ ghép Cửu Việt 2"
                                />
                                <CustomTextField
                                    label="Diện Tích (m²)"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.area}
                                    onChange={(e) => handleInputChange('area', e.target.value)}
                                    placeholder="VD: 25"
                                />
                                <CustomTextField
                                    label="Giá Thuê (VNĐ)"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    placeholder="VD: 3000000"
                                />
                                <FormControl fullWidth>
                                    <InputLabel>Loại Phòng</InputLabel>
                                    <Select
                                        value={formData.roomTypeId}
                                        label="Loại Phòng"
                                        size="small"
                                        onChange={(e) => handleInputChange('roomTypeId', e.target.value)}
                                    >
                                        <MenuItem value="1">Phòng đơn</MenuItem>
                                        <MenuItem value="2">Phòng đôi</MenuItem>
                                        <MenuItem value="3">Phòng gia đình</MenuItem>
                                        <MenuItem value="4">Studio</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        {/* Mô Tả */}
                        <div>
                            <CustomTextField
                                label="Mô Tả Chi Tiết"
                                variant="outlined"
                                fullWidth
                                multiline
                                size="small"
                                rows={4}
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                placeholder="Mô tả chi tiết về phòng trọ, tiện ích, vị trí..."
                            />
                        </div>

                        {/* Địa Chỉ */}
                        <div>
                            <Typography variant="body2" className="mb-3 text-gray-700">
                                Địa Chỉ:
                            </Typography>
                            <div className="mt-2">
                                <CustomTextField
                                    label="Địa Chỉ Đầy Đủ"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="VD: 123 Nguyễn Văn A, Phường B, Quận C, TP.HCM"
                                />
                            </div>
                        </div>

                        {/* Thông Tin Liên Hệ */}
                        <div>
                            <Typography variant="body2" className="mb-3 text-gray-700">
                                Thông Tin Liên Hệ: 
                            </Typography>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <CustomTextField
                                    label="Tên Người Liên Hệ"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.contactName}
                                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                                    placeholder="VD: Anh Nam"
                                />
                                <CustomTextField
                                    label="Số Điện Thoại"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.contactPhone}
                                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                                    placeholder="VD: 0987654321"
                                />
                                <CustomTextField
                                    label="Tên Chủ Nhà"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.ownerName}
                                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                                    placeholder="VD: Nguyễn Văn A"
                                />
                            </div>
                        </div>

                        {/* Thời Gian Có Sẵn */}
                        <div>
                            <Typography variant="body2" className="mb-4 text-gray-700">
                                Thời Gian Có Sẵn
                            </Typography>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <CustomTextField
                                    label="Có Sẵn Từ Ngày"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.availableFrom}
                                    onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <CustomTextField
                                    label="Có Sẵn Đến Ngày"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={formData.availableTo}
                                    onChange={(e) => handleInputChange('availableTo', e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="sticky z-50 bottom-0 border-t border-gray-200 px-6 py-2 flex justify-end space-x-3">
                        <Button
                            variant="outlined"
                            onClick={handleCloseModal}
                            className="px-6 py-2"
                        >
                            Hủy
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600"
                            disabled={!formData.title || !formData.price || !formData.address}
                        >
                            Tạo Phòng Trọ
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default CreateRoomBox;