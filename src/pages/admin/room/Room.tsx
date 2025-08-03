import FilterBox from "../../../components/admin/filterBox/FilterBox.tsx";
import {IoIosAdd} from "react-icons/io";

export default function Room(){
    return (
        <div className={'room p-2'}>
            <div className={'filter-box-button flex items-center my-2' }>
                <button
                    type="button"
                    className={'flex items-center justify-center'}
                >
                    <IoIosAdd style={{width: '30px', height: '30px'}}/>
                    Thêm mới
                </button>
            </div>
            <FilterBox />
        </div>
    );
}