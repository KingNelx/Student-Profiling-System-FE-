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


const AdminSideBar = () => {
    return (
        <div style={{ display: 'flex', height: '91vh' }}>
            <CDBSidebar textColor="#333" backgroundColor="white" className='shadow-lg'>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    KingNelx
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="user">Add Record</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sign" iconType="solid">
                            <Link to="/" onClick={LoadingInterval}>Sign out</Link>
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
            <div style={{ flex: 1, overflow: 'auto', textAlign: 'center', marginTop: '10vh' }}>
                {/* Add your main content here */}
                <Dashboard />
                {/* Add more components/content as needed */}
            </div>
        </div>
    );
};

export default AdminSideBar;