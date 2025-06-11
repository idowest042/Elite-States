import {create} from 'zustand';
import { axiosInstance } from './axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
export const baseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:3000': '/';
export const authentication= create((set) => ({
    isSignup:false,
    isLogging:false,
    authUser:null,
    signup: async (data,navigate) => {
        set({isSignup:true});
        try {
            const response = await axiosInstance.post('/users/signup', data);
            set({authUser: response.data});
            toast.success('Account Created successfully');
            navigate('/');
        } catch (error) {
         toast.error(error.response?.data?.msg || 'Signup failed');
            console.error('Signup Error:', error.response?.data || error.message);   
        }finally{
            set({isSignup:false});
        }
    },
    login: async (data,navigate) => {
        set({isLogging:true});
        try {
            const response = await axiosInstance.post('/users/login', data);
            set({authUser: response.data});
            toast.success('Login successfully');
            navigate('/')

        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
            console.error('Login Error:', error.response?.data || error.message);
        }finally{
            set({isLogging:false});
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post('/users/logout');
            set({authUser: null});
            toast.success('Logout successfully');
            
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Logout failed');
            console.error('Logout Error:', error.response?.data || error.message);
        }
    },
}))