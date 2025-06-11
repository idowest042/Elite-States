import {create} from 'zustand';
import { axiosInstance } from './axios';
export const baseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:3000': '/';
export const apimanagement = create((set) => ({
    isGettingData: false,
    isPostingData: false,
    Allproperties:[],
    fetchAllproperties:async()=>{
        set({isGettingData:true});
        try {
            const response = await axiosInstance.get('/homes/getallhouse');
            set({Allproperties: response.data});
        } catch (error) {
            console.error('Error fetching properties:', error.response?.data || error.message);
        } finally {
            set({isGettingData:false});
        }
    }
}))