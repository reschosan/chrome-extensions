chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    chrome.storage.sync.set({ currentUrl: url });
});

export const configs = () => {
    return {
        config1: 'your first config item',
        config2: 'your second config item'
    }
}