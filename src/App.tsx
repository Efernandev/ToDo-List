import './App.module.css'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Dashboard />
		</div>
	)
}

export default App
