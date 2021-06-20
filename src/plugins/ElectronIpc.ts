import { App } from 'vue';

export default {
    install(app: App): void {
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.$ipc = window.ipcRenderer;
    },
};
