import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import RepoCommitsOverview from "@/src/pages/repos/RepoCommitsOverview";
import Layout from './Layout';
import ReposPage from '@/src/pages/repos/ReposPage';
import HomePage from '../pages/HomePage';
import CommitsPerIntervalPage from '../pages/commits/CommitsPerIntervalPage';

export default function App() {

    return (

        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/repos" element={<ReposPage />} />
                    <Route path="/commits" element={<CommitsPerIntervalPage />} />
                    <Route path="/repos/:repoId/commits" element={<RepoCommitsOverview />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}