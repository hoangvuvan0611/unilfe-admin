// Sidebar Title
export const SIDEBAR_TITLE_DASHBOARD = "Tổng quan";
export const SIDEBAR_TITLE_ROOM = "Phòng trọ";
export const SIDEBAR_TITLE_POST = "Bài đăng";
export const SIDEBAR_TITLE_STORE = "Cửa tiệm";
export const SIDEBAR_TITLE_USER = "Người dùng";
export const SIDEBAR_TITLE_CONFIG = "Cấu hình";
export const SIDEBAR_TITLE_SETTING = "Cài đặt";

// Common path
export const PATH_ROOT = "/";
export const PATH_ADMIN = "/admin";
export const PATH_AUTH = "/auth";

// Sidebar Path
export const SIDEBAR_PATH_DASHBOARD = "/admin";
export const SIDEBAR_PATH_ROOM = "/admin/room";
export const SIDEBAR_PATH_POST = "/admin/post";
export const SIDEBAR_PATH_STORE = "/admin/store";
export const SIDEBAR_PATH_USER = "/admin/user";
export const SIDEBAR_PATH_CONFIG = "/admin/config";
export const SIDEBAR_PATH_SETTING = "/admin/setting";


// Mode
export const MODE_DARK = "dark";
export const MODE_LIGHT = "light";

export type ThemeMode = typeof MODE_LIGHT | typeof MODE_DARK;

// TITLE BUTTON
export const TITLE_LOGOUT = "Đăng xuất";

// SORT TYPE
export const SORT_TYPE_DEFAULT = "default";
export const SORT_TYPE_NEWEST = "newest";
export const SORT_TYPE_PRICE_ASC = "price_asc";
export const SORT_TYPE_PRICE_DESC = "price_desc";
export type SortType = typeof SORT_TYPE_DEFAULT
    | typeof SORT_TYPE_NEWEST
    | typeof SORT_TYPE_PRICE_ASC
    | typeof SORT_TYPE_PRICE_DESC;