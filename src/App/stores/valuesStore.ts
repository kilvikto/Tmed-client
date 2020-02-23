import { observable, action, runInAction } from 'mobx';
import agent from '../API/agent';
import { RootStore } from './rootStore';
export default class ValuesStore {
	rootStore: RootStore
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}
  @observable Values = new Array();
  @action LoadValues = async () => {
    try {
			let values = await agent.values.list();
			runInAction(() => {
				this.Values = values;
			});
    } catch (error) {
			console.log(error);
		}
  };
}

