import React, { useEffect, useContext } from 'react';
import './App.css';
import {observer} from 'mobx-react-lite';
import { RootStoreContext } from './App/stores/rootStore';

const App: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const {Values, LoadValues} = rootStore.valuesStore
	useEffect(() => {
		LoadValues();
	}, [LoadValues])
  return (
    <div>
			<ul>
				{Values.map(v => (<li key={v.id}>{v.id}: {v.name}: {v.surname}</li>))}
			</ul>
		</div>
  );
}

export default observer(App);
