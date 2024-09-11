import { _projectConfigFileNestingUpdater, configs } from './xyz-configuration-array';
import {
    defineConfigObject,


} from 'reactive-vscode'
import type { ConfigObject, ConfigTypeOptions } from 'reactive-vscode'






function useConfig<T extends typeof configs>(section?: keyof T) {



    // const t = defineConfigObject<T>('', T[section])
    return undefined;
}