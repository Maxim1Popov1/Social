import store from './redux/redux-store';
import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
root.render(
	<React.StrictMode>
		 <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
	</React.StrictMode>
)}


rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
});