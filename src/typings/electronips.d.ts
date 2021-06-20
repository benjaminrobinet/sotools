import { ipcRenderer } from 'electron';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $ipc: typeof ipcRenderer
    }
}
