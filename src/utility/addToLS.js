const getStoredApps = () => {
    const storedApps = localStorage.getItem('installedApps');
    return storedApps ? JSON.parse(storedApps) : [];
}
const addToLS = (id) => {
    const storedApps = getStoredApps();
    if(!storedApps.includes(id)) {
        storedApps.push(id);
        localStorage.setItem('installedApps', JSON.stringify(storedApps));
    }
}
export { addToLS , getStoredApps};