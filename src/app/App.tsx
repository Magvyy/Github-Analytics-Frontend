import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { logout } from '@/shared/services/logout';

function App() {

    return (
        // <>
        //     <div
        //         onClick={() => window.location.href = "http://localhost:8081/oauth2/authorization/github"}
        //     >
		// 		Login
		// 	</div>
        //     <div
        //         onClick={() => logout()}
        //     >
		// 		Logout
		// 	</div>
        // </>
		
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
    )
}

export default App
