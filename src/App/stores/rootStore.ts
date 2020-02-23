import {configure} from 'mobx';
import ValuesStore from './valuesStore';
import { createContext } from 'react';
configure({enforceActions: 'always'});

export class RootStore {
	valuesStore: ValuesStore
	constructor() {
		this.valuesStore = new ValuesStore(this);
	}
}

export const RootStoreContext = createContext(new RootStore());