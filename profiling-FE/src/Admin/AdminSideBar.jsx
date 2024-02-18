import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';
import { Link } from "react-router-dom"
import LoadingInterval from '../Alerts/LoadingInterval';
import Dashboard from './Dashboard';
import AddRecordModal from '../Student/Modals/AddRecordModal';



const AdminSideBar = () => {
    return (
        <div style={{ display: 'flex', height: '92vh' }}>
            <CDBSidebar textColor="#333" backgroundColor="white" className='shadow-lg'>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    KingNelx
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu >
                        <CDBSidebarMenuItem icon="th-large">
                            <span className='px-2 mx-1'>Dashboard</span>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="user">
                            <AddRecordModal />
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon='flag'>
                            <span className='px-2 mx-1'>Statistics</span>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon='envelope'>
                            <span className='px-2 mx-1'>Reports</span>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sign" iconType="solid">
                            <Link to="/" onClick={LoadingInterval}> <span className='px-2 mx-1'>Sign out</span></Link>
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
            <div style={{ flex: 1, overflow: 'auto', textAlign: 'center', marginTop: '5vh' }}>
                {/* Add your main content here */}
                <Dashboard />
                {/* Add more components/content as needed */}
            </div>
        </div>
    );
};

export default AdminSideBar;